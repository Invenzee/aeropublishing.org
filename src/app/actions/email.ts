"use server";

import nodemailer from "nodemailer";
import type { FormTrackingData } from "@/lib/tracking";

interface EmailFormData extends FormTrackingData {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  website?: unknown;
  services?: unknown;
  timeline?: unknown;
  source?: unknown;
  message?: unknown;
  formType?: unknown;
  genre?: unknown;
  pages?: unknown;
}

function toDisplayValue(value: unknown) {
  if (value === undefined || value === null || value === "") {
    return "N/A";
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return String(value);
}

function escapeHtml(value: unknown) {
  return String(value ?? "N/A")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderRow(label: string, value: unknown) {
  if (value === undefined || value === null || value === "") {
    return "";
  }

  return `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`;
}

function hasPpcData(data: FormTrackingData) {
  return Boolean(
    data.utm_source ||
      data.utm_medium ||
      data.utm_campaign ||
      data.utm_term ||
      data.utm_content ||
      data.gclid ||
      data.fbclid ||
      data.msclkid ||
      data.landing_page ||
      data.previous_page ||
      data.current_page ||
      data.referrer,
  );
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parseRecipientEmails(value: string) {
  return value
    .split(",")
    .map((email) => email.trim())
    .filter((email) => email && isValidEmail(email));
}

export async function sendEmail(formData: EmailFormData) {
  try {
    const {
      name,
      email,
      phone,
      website,
      services,
      timeline,
      source,
      message,
      formType,
      genre,
      pages,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid,
      fbclid,
      msclkid,
      landing_page,
      previous_page,
      current_page,
      referrer,
      user_agent,
    } = formData;

    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_PASS = process.env.GMAIL_APP_PASSWORD;
    const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO;

    if (!GMAIL_USER || !GMAIL_PASS) {
      throw new Error("Email service is not configured.");
    }

    const recipients = parseRecipientEmails(CONTACT_EMAIL_TO || GMAIL_USER);
    if (recipients.length === 0) {
      throw new Error("No valid lead recipients configured.");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    const servicesValue = toDisplayValue(services);
    const trackingData: FormTrackingData = {
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid,
      fbclid,
      msclkid,
      landing_page,
      previous_page,
      current_page,
      referrer,
      user_agent,
    };

    const ppcText = hasPpcData(trackingData)
      ? `
PPC / Marketing Attribution:
UTM Source: ${utm_source || "N/A"}
UTM Medium: ${utm_medium || "N/A"}
UTM Campaign: ${utm_campaign || "N/A"}
UTM Term: ${utm_term || "N/A"}
UTM Content: ${utm_content || "N/A"}
Google Click ID (gclid): ${gclid || "N/A"}
Facebook Click ID (fbclid): ${fbclid || "N/A"}
Microsoft Click ID (msclkid): ${msclkid || "N/A"}
Landing Page: ${landing_page || "N/A"}
Previous Page: ${previous_page || "N/A"}
Submitted From: ${current_page || "N/A"}
Referrer: ${referrer || "N/A"}
User Agent: ${user_agent || "N/A"}
`
      : "";

    const mailOptions = {
      from: `Aero Publishing <${GMAIL_USER}>`,
      to: recipients,
      replyTo: toDisplayValue(email) !== "N/A" ? String(email) : GMAIL_USER,
      subject: `New Lead: ${toDisplayValue(formType)}${utm_campaign ? ` | ${utm_campaign}` : ""}`,
      text: `
Form Details:
Form Type: ${toDisplayValue(formType)}
Name: ${toDisplayValue(name)}
Email: ${toDisplayValue(email)}
Phone: ${toDisplayValue(phone)}
Website: ${toDisplayValue(website)}
Genre: ${toDisplayValue(genre)}
Pages: ${toDisplayValue(pages)}
Services: ${servicesValue}
Timeline: ${toDisplayValue(timeline)}
Source: ${toDisplayValue(source)}
Message: ${toDisplayValue(message)}
${ppcText}
            `.trim(),
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #3F3774; border-bottom: 2px solid #E96659; padding-bottom: 10px;">New Form Submission</h2>
        ${renderRow("Form Type", formType)}
        ${renderRow("Name", name)}
        ${renderRow("Email", email)}
        ${renderRow("Phone", phone)}
        ${renderRow("Genre", genre)}
        ${renderRow("Pages", pages)}
        ${renderRow("Website", website)}
        ${renderRow("Services", servicesValue)}
        ${renderRow("Timeline", timeline)}
        ${renderRow("Source", source)}
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${escapeHtml(toDisplayValue(message))}</p>
        </div>
        ${
          hasPpcData(trackingData)
            ? `
        <div style="background: #f3f7ff; padding: 15px; border-radius: 5px; margin-top: 20px; border-left: 4px solid #3F3774;">
            <h3 style="color: #3F3774; margin-top: 0;">PPC / Marketing Attribution</h3>
            ${renderRow("UTM Source", utm_source)}
            ${renderRow("UTM Medium", utm_medium)}
            ${renderRow("UTM Campaign", utm_campaign)}
            ${renderRow("UTM Term", utm_term)}
            ${renderRow("UTM Content", utm_content)}
            ${renderRow("Google Click ID (gclid)", gclid)}
            ${renderRow("Facebook Click ID (fbclid)", fbclid)}
            ${renderRow("Microsoft Click ID (msclkid)", msclkid)}
            ${renderRow("Landing Page", landing_page)}
            ${renderRow("Previous Page", previous_page)}
            ${renderRow("Submitted From", current_page)}
            ${renderRow("Referrer", referrer)}
            ${renderRow("User Agent", user_agent)}
        </div>`
            : ""
        }
        <footer style="margin-top: 20px; font-size: 12px; color: #777; text-align: center;">
            <p>This email was sent from the Aero Publishing website contact form (aeropublishing.org).</p>
        </footer>
      </div>
    `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return { success: true, message: "Email sent successfully" };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const message = error instanceof Error ? error.message : "Failed to send email";
    return { success: false, message };
  }
}
