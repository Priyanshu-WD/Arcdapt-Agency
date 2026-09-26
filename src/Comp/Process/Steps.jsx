const DISCIPLINES = [
  {
    id: '01',
    title: 'Understand',
    desc: 'We listen before we create — your brand, audience, goals and what success actually looks like.',
  },
  {
    id: '02',
    title: 'Create',
    desc: "We turn strategy into ideas, developing concepts and visual directions that carry the message.",
  },
  {
    id: '03',
    title: 'Adapt',
    desc: 'We refine what works, shaping the creative to fit the brand, the platform and the audience.',
  },
  {
    id: '04',
    title: 'Deliver',
    desc: 'Headline, subhead and a call to action that actually earns the click.',
  },
 
];

export const Steps = () => {
  return (
    <>
      <section className="pt-10 pb-10 text-center md:pt-25 md:pb-25">
        <div className="mx-auto max-w-5xl px-4">
          <div>
            <h1 className="text-black text-hero leading-9 font-Fraunces font-light sm:text-hero-sm lg:text-hero-lg">
              How we get there
            </h1>
            <div className="mt-2.5 md:mt-10">
              <p className="text-center text-[10.7px] md:text-[11.7px] font-Inter font-light text-[#17130F]">
  We turn ideas into digital and visual experiences
designed to communicate, connect, and create
impact.
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
