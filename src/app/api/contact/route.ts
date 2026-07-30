import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  FORM_SOURCE_LABELS,
  formatMarketingAttribution,
  type LeadSubmission,
} from "@/lib/lead-form";

function getEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildEmailSubject(data: LeadSubmission) {
  const sourceLabel = FORM_SOURCE_LABELS[data.formSource];
  const campaign = data.marketing.utm_campaign;
  const medium = data.marketing.utm_medium;
  const parts = [`[Aero Lead] ${sourceLabel}`, data.name];

  if (campaign) parts.push(`Campaign: ${campaign}`);
  if (medium) parts.push(`Medium: ${medium}`);

  return parts.join(" | ");
}

function buildEmailBody(data: LeadSubmission) {
  const sourceLabel = FORM_SOURCE_LABELS[data.formSource];
  const marketingDetails = formatMarketingAttribution(data.marketing);

  return [
    "New lead submission from aeropublishing.org",
    "",
    "=== Contact Details ===",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    data.subject ? `Subject: ${data.subject}` : null,
    `Message: ${data.message || "Not provided"}`,
    "",
    "=== Form Details ===",
    `Form Source: ${sourceLabel}`,
    `Submitted From: ${data.pageUrl}`,
    `Submitted At: ${new Date().toISOString()}`,
    "",
    "=== Marketing Attribution ===",
    marketingDetails,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as LeadSubmission;

    if (!data.name?.trim() || !data.email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(data.email.trim())) {
      return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
    }

    const gmailUser = getEnv("GMAIL_USER");
    const gmailAppPassword = getEnv("GMAIL_APP_PASSWORD");
    const contactEmailTo = getEnv("CONTACT_EMAIL_TO");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Aero Publishing Leads" <${gmailUser}>`,
      to: contactEmailTo,
      replyTo: data.email.trim(),
      subject: buildEmailSubject(data),
      text: buildEmailBody(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
