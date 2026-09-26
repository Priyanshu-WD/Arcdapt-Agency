const DISCIPLINES = [
  {
    id: '01',
    title: 'Graphic Design',
    desc: 'Social media, branding and campaign work built on a system, not a one-off look.',
  },
  {
    id: '02',
    title: 'Video Editing',
    desc: "Reels, ads and SaaS explainers — motion graphics cut for attention spans that don't wait.",
  },
  {
    id: '03',
    title: 'Social Media',
    desc: 'Content and creative strategy that gives a brand a consistent voice across platforms.',
  },
  {
    id: '04',
    title: 'Landing Pages',
    desc: 'Headline, subhead and a call to action that actually earns the click.',
  },
  {
    id: '05',
    title: 'Web Development',
    desc: 'Responsive interfaces on modern frameworks, built and tuned for performance.',
  },
];

export const Process = () => {
  return (
    <>
      <section className="pt-10 pb-10 text-center md:pt-25 md:pb-25">
        <div className="mx-auto max-w-5xl px-4">
          <div>
            <h1 className="text-black text-hero leading-9 font-Fraunces font-light sm:text-hero-sm lg:text-hero-lg">
              What we do
            </h1>
            <div className="mt-2.5 md:mt-8">
              <p className="text-center text-[10.7px] md:text-[11.7px] font-Inter font-light text-[#17130F]">
                Five disciplines, one studio. We move between them freely so
                nothing gets lost between brief and delivery.
              </p>
            </div>
          </div>

          <div className="mt-14">
            {DISCIPLINES.map(({ id, title, desc }, index) => (
              <div
                key={id}
                className={`grid gap-4 border-t border-[#4A443C] p-8 md:grid-cols-[80px_minmax(160px,340px)_1fr] md:items-center ${
                  index === DISCIPLINES.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="text-[11.2px] text-left font-Fraunces font-medium italic text-[#C2321B]">
                  {id}
                </div>
                <div>
                     <h3 className="text-left text-[19.4px] font-Fraunces">
                  {title}
                </h3>
                </div>
               <div>
                    <p className="text-left text-[11.2px] font-Inter">
                  {desc}
                </p>
               </div>

                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
