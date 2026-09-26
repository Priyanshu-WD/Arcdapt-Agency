export const Team = () => {
  return (
    <>
      <section className="pt-10 pb-10 md:pt-25 md:pb-25">
        <div>
          <h1 className="text-black text-center text-hero leading-11.5 sm:text-hero-sm sm:leading-14.5 lg:text-hero-lg lg:leading-19.5 font-Fraunces font-light">
            The people behind Arcdapt
          </h1>
          <div className="mt-2.5 md:mt-5 text-center">
            <p className="text-[#17130F] font-Inter font-light text-[10.7px] md:text-[11.7px]">
              Three founders, one studio
            </p>
          </div>
        </div>
        <div className="mt-9 mb-9">
            <div className="flex-col flex md:flex-row items-center  justify-center gap-7.5">
                <div>
                    <div>
                        <img src="/images/Cutout-image/Atul.png" alt="Atul-co-founder" />
                    </div>
                    <div>
                        <article className="flex flex-col mt-4.5">
                            <span className="font-Fraunces text-[14.9] leading-6.25]">Atul Vishwakarma</span>
                            <span className="font-inter text-[11px] text-[#4A443C]">Co-founder</span>
                        </article>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/images/Cutout-image/Abhijeet.png" alt="Abhijeet-co-founder" />
                    </div>
                    <div>
                        <article className="flex flex-col mt-4.5">
                            <span className="font-Fraunces text-[14.9] leading-6.25]">Abhijeet kumar</span>
                            <span className="font-inter text-[11px] text-[#4A443C]">Co-founder</span>
                        </article>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/images/Cutout-image/Priyanshu.png" alt="Priyanshu-co-founder" />
                    </div>
                    <div>
                        <article className="flex flex-col mt-4.5">
                            <span className="font-Fraunces text-[14.9] leading-6.25]">Priyanshu Pramanik</span>
                            <span className="font-inter text-[11px] text-[#4A443C]">Co-founder</span>
                        </article>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};
