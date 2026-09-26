export const Idea = () => {
  return (
    <>
      <section className="pt-10 pb-10 md:pt-25 md:pb-25 bg-[#FF0000]">
        <div className="m-auto w-9/10 max-w-360">
          <div className="md:flex md:items-center md:gap-87.5">
            <div className=" md:w-105">
              <h1 className="text-[#FBF0E8] text-hero leading-11.5 sm:text-hero-sm sm:leading-14.5 lg:text-hero-lg lg:leading-19.5 font-Fraunces font-light">
                Have an idea? Let's adapt it.
              </h1>
              <div className="mt-2.5 md:mt-5">
                <p className="text-[#FBF0E8] font-Inter font-light text-[10.7px] md:text-[11.7px]">
                  Tell us where the brand needs to go. We'll bring the design,
                  the motion and the build to get it there.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <button className=" text-white p-cta rounded-(--rounded-cta) bg-[#17130F] cursor-pointer text-[10.8px] font-regular font-Inter tracking-wide whitespace-nowrap">
                Build with us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
