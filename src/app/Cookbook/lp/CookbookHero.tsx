"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions/email";
import { getFormTrackingPayload } from "@/lib/tracking";
import { openZendeskChat } from "@/lib/zendesk";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CookbookHero() {
  const router = useRouter();
  const [status, setStatus] = useState({
    submitting: false,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ submitting: true, message: "" });

    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      formType: "/Cookbook/lp",
    };

    try {
      const result = await sendEmail({ ...data, ...getFormTrackingPayload() });
      if (result.success) {
        form.reset();
        router.push("/thank-you");
        return;
      }
      setStatus({ submitting: false, message: "Failed to send. Please try again." });
    } catch {
      setStatus({ submitting: false, message: "An error occurred. Please try again." });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06, opacity: 0.85 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease }}
      >
        <Image
          src="/cookbook/lp/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/25" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-[1140px] gap-6 px-4 pb-10 pt-6 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-4 lg:pb-14 lg:pt-8">
        <motion.div
          className="max-w-[520px]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
        >
          <p className="font-poppins text-[14px] text-black sm:text-[15px]">
            Cookbook Publishing Made Easy
          </p>

          <h1 className="mt-2 font-syne text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#e96659] sm:text-[48px] lg:text-[70px]">
            <span className="text-[#3f3774]">Publish</span> Your
            <br />
            Recipes as a Cookbook
          </h1>

          <p className="mt-4 max-w-[480px] font-poppins text-[14px] font-normal leading-[1.7] text-black">
            Share your culinary creations with the world. Aero Publishing designs,
            publishes, and markets professional cookbooks for chefs, food bloggers,
            and home cooks.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href="#hire-form"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#3f3774] px-5 font-syne text-[15px] font-semibold capitalize text-white transition-all duration-300 hover:opacity-90 hover:brightness-110 active:scale-[0.98]"
            >
              Get Free Consultation
            </a>
            <button
              type="button"
              onClick={openZendeskChat}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#e96659] px-5 font-syne text-[15px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:brightness-110 active:scale-[0.98]"
            >
              Live Chat
            </button>
          </div>
        </motion.div>

        <motion.div
          id="hire-form"
          className="mx-auto w-full max-w-[420px] rounded-[28px] bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,0.1)] sm:rounded-[32px] sm:p-6"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
        >
          <h2 className="text-center font-syne text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-black sm:text-[28px]">
            Start Your Cookbook Project
          </h2>
          <p className="mt-1.5 text-center font-syne text-[14px] font-medium text-black">
            Talk with an Aero Publishing cookbook expert
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <label className="block">
              <span className="sr-only">First Name</span>
              <input
                name="name"
                type="text"
                required
                placeholder="First Name"
                className="h-11 w-full border border-[#818181] bg-transparent px-3 font-poppins text-[14px] text-black transition-colors placeholder:font-light placeholder:text-[#a0a0a0] focus:border-[#e96659] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="sr-only">Phone Number</span>
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="h-11 w-full border border-[#818181] bg-transparent px-3 font-poppins text-[14px] text-black transition-colors placeholder:font-light placeholder:text-[#a0a0a0] focus:border-[#e96659] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="sr-only">Email Address</span>
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="h-11 w-full border border-[#818181] bg-transparent px-3 font-poppins text-[14px] text-black transition-colors placeholder:font-light placeholder:text-[#a0a0a0] focus:border-[#e96659] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="sr-only">Write A Message</span>
              <textarea
                name="message"
                required
                rows={3}
                placeholder="Write A Message"
                className="min-h-[70px] w-full resize-y border border-[#818181] bg-transparent px-3 py-2.5 font-poppins text-[14px] text-black transition-colors placeholder:font-light placeholder:text-[#a0a0a0] focus:border-[#e96659] focus:outline-none"
              />
            </label>

            <button
              type="submit"
              disabled={status.submitting}
              className="mx-auto inline-flex h-10 min-w-[120px] items-center justify-center rounded-full bg-[#e96659] px-6 font-syne text-[15px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
            >
              {status.submitting ? "Sending..." : "Submit"}
            </button>

            {status.message ? (
              <p className="font-poppins text-[14px] text-red-600">{status.message}</p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
