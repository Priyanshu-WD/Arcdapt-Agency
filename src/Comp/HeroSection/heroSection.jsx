import { motion } from "motion/react";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="text-center pt-10 pb-10 md:pt-25 md:pb-25">
      <div>
        <div>
          <div>
            <h1 className="text-black text-hero leading-11.5 sm:text-hero-sm sm:leading-14.5 lg:text-hero-lg lg:leading-19.5 font-Fraunces font-light">
              We create, so you stand out.
            </h1>
            <div className="mt-2.5 md:mt-5">
              <p className="text-[#17130F] font-Inter font-light text-[10.7px] md:text-[11.7px]">
                A small creative studio building brand identity, motion and web
                work for teams who'd rather be understood than merely noticed.
              </p>
            </div>
          </div>
          <div className="mt-9">
            <div>
              <article className="flex justify-center gap-2.5 text-[10.9px] font-Fraunces font-normal text-[#17130f] opacity-65 uppercase ">
                <span>Design</span>
              <span>Motion</span>
                <span>Development</span>
                <span>Impact</span>
              </article>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-center gap-8">
              <button className=" text-[#17130F] p-cta rounded-(--rounded-cta) bg-[#FF0000] cursor-pointer text-[10.8px] font-regular font-Inter tracking-wide whitespace-nowrap">
                View our work
              </button>
              <button className=" text-[#17130F] p-cta [border:var(--border-cta)] rounded-(--rounded-cta) cursor-pointer text-[10.8px] font-regular font-Inter tracking-wide whitespace-nowrap">
                Build with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
