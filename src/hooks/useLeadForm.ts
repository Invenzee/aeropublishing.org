"use client";

import { useState, type FormEvent } from "react";
import {
  getMarketingAttribution,
  type LeadFormSource,
} from "@/lib/lead-form";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function useLeadForm(formSource: LeadFormSource) {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();

    if (!name || !email) {
      setStatus("error");
      setErrorMessage("Please enter your name and email.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          message: message || undefined,
          subject: subject || undefined,
          formSource,
          pageUrl: window.location.href.split("#")[0],
          marketing: getMarketingAttribution(),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to send your message. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    }
  }

  return {
    handleSubmit,
    status,
    errorMessage,
    isLoading: status === "loading",
    isSuccess: status === "success",
  };
}
