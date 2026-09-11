"use client";

import { openZendeskChat } from "@/lib/zendesk";
import CookbookLogo from "./CookbookLogo";
import Reveal from "./Reveal";

export default function CookbookFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#3f3774] px-4 py-12 sm:px-6 sm:py-14 lg:px-4 lg:py-16"
    >
      <Reveal className="relative z-10 mx-auto grid max-w-[1140px] gap-6 px-4 lg:grid-cols-[180px_1fr_auto] lg:items-center lg:gap-8 lg:px-4">
        <CookbookLogo variant="footer" className="mx-auto lg:mx-0" />

        <p className="mx-auto max-w-[520px] text-center font-poppins text-[14px] leading-[1.7] text-white lg:text-left">
          Aero Publishing helps authors transform recipe ideas into professional
          cookbooks that leave a lasting impact on readers. With dedicated
          editors, designers, illustrators, and marketing experts, we bring your
          culinary vision to life. From concept to global distribution, we offer
          end to end cookbook publishing solutions for aspiring and established
          authors.
        </p>

        <div className="flex w-full flex-col items-center gap-2.5 sm:flex-row sm:justify-center lg:w-auto lg:flex-col lg:items-stretch">
          <a
            href="#hire-form"
            className="inline-flex h-10 min-w-[180px] items-center justify-center rounded-full bg-[#e96659] px-5 font-syne text-[15px] font-semibold capitalize text-white transition-all duration-300 hover:opacity-90 hover:brightness-110 active:scale-[0.98] lg:min-w-[200px]"
          >
            Get Free Consultation
          </a>
          <button
            type="button"
            onClick={openZendeskChat}
            className="inline-flex h-10 min-w-[180px] items-center justify-center rounded-full bg-[#e96659] px-5 font-syne text-[15px] font-semibold capitalize text-white transition-all duration-300 hover:opacity-90 hover:brightness-110 active:scale-[0.98] lg:min-w-[200px]"
          >
            Live Chat
          </button>
        </div>
      </Reveal>

      <p className="relative z-10 mt-8 text-center font-poppins text-[13px] text-white">
        Copyright {new Date().getFullYear()} Aero Publishing. All rights reserved.
      </p>
    </footer>
  );
}
