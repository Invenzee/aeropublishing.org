type FormFeedbackProps = {
  isSuccess: boolean;
  errorMessage: string;
  successMessage?: string;
  className?: string;
  variant?: "default" | "on-dark";
};

export default function FormFeedback({
  isSuccess,
  errorMessage,
  successMessage = "Thank you! Your message has been sent. We'll be in touch soon.",
  className = "",
  variant = "default",
}: FormFeedbackProps) {
  if (!isSuccess && !errorMessage) return null;

  const toneClass =
    variant === "on-dark"
      ? isSuccess
        ? "text-green-300"
        : "text-red-300"
      : isSuccess
        ? "text-green-700"
        : "text-red-600";

  return (
    <p role="status" className={`text-sm leading-6 ${toneClass} ${className}`}>
      {isSuccess ? successMessage : errorMessage}
    </p>
  );
}
