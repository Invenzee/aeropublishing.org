import Reveal from "./Reveal";

export default function CookbookCulinary() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat max-lg:bg-[position:70%_center]"
        style={{ backgroundImage: "url(/cookbook/lp/culinary-bg.webp)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1140px] px-4 py-12 sm:px-6 sm:py-14 lg:px-4 lg:py-16">
        <Reveal className="max-w-[620px] rounded-[20px] bg-white/70 p-5 backdrop-blur-[2px] sm:p-6 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <p className="font-sans text-[14px] text-black">
            Ready to Publish Your Cookbook?
          </p>
          <h2 className="mt-2 font-sans text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#3f3774] sm:text-[44px] lg:text-[56px]">
            Let&apos;s Bring Your
            <br />
            <span className="text-[#e96659]">Culinary Vision</span> to Life
          </h2>
          <p className="mt-4 font-sans text-[14px] leading-[1.7] text-black">
            Whether you are a seasoned chef, food blogger, or passionate home
            cook, Aero Publishing turns your recipes into beautifully crafted
            professional cookbooks. From expert editing and eye catching design
            to printing and worldwide distribution, we guide you through every
            step. Connect with us today and share your cookbook with the world.
          </p>
          <a
            href="#hire-form"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-[#3f3774] px-6 font-sans text-[15px] font-semibold capitalize text-white transition-all duration-300 hover:opacity-90 hover:brightness-110 active:scale-[0.98]"
          >
            Get Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
