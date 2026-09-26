import { useMemo, useState } from "react";
import { motion } from "motion/react";

export const OurWork = () => {
  const [selectedProject, setSelectedProject] = useState("Video");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = {
    Video: {
      details: [
        {
          name: "Project Video Name",
          type: "youtube",
          url: "https://www.youtube.com/embed/NnMwrh5I3S4",
        },
        {
          name: "Project Video Name",
          type: "youtube",
          url: "https://www.youtube.com/embed/hbX5s0lX2YQ",
        },
        {
          name: "Project Video Name",
          type: "youtube",
          url: "https://www.youtube.com/embed/MzU4vOraM8M",
        },
        {
          name: "Project Video Name",
          type: "youtube",
          url: "https://www.youtube.com/embed/uPArRnxjGrM",
        },
      ],
    },

    "Graphic Design": {
      details: [
        {
          name: "Project Graphic",
          image: "/images/Graphic/Creative1.png",
        },
        {
          name: "Project Graphic",
          image: "/images/Graphic/Creative2.png",
        },
        {
          name: "Project Graphic",
          image: "/images/Graphic/Creative3.png",
        },
        {
          name: "Project Graphic",
          image: "/images/Graphic/Creative4.png",
        },
      ],
    },

    "Web Site": {
      details: [
        {
          name: "Project Web",
          image: "/images/logo.svg",
        },
        {
          name: "Project Web",
          image: "/images/logo.svg",
        },
        {
          name: "Project Web",
          image: "/images/logo.svg",
        },
        {
          name: "Project Web",
          image: "/images/logo.svg",
        },
      ],
    },
  };

  const categories = Object.keys(projects);

  const currentProjects = useMemo(
    () => projects[selectedProject]?.details || [],
    [selectedProject],
  );

  const repeatedProjects = useMemo(
    () => [...currentProjects, ...currentProjects],
    [currentProjects],
  );

  const renderMedia = (project, isHovered) => {
    if (project.type === "youtube") {
      const videoUrl = isHovered
        ? `${project.url}?autoplay=1&mute=1&playsinline=1`
        : project.url;

      return (
        <div className="aspect-video w-full overflow-hidden rounded-[20px] bg-black">
          <iframe
            src={videoUrl}
            title={project.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="pointer-events-none h-full w-full border-0"
          />
        </div>
      );
    }

    return (
      <img
        src={project.image}
        alt={project.name}
        className="block h-75 w-full rounded-[20px] object-contain bg-[#F5F1EB]"
      />
    );
  };

  return (
    <section className="overflow-x-clip bg-[#17130F] pt-10 pb-10 text-center md:pt-25 md:pb-25">
      <div className="m-auto w-9/10 max-w-360">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[#F4F1EC] text-hero leading-11.5 font-Fraunces font-light sm:text-hero-sm sm:leading-14.5 lg:text-hero-lg lg:leading-19.5">
            OUR WORK
          </h1>

          <div className="mt-2.5 md:mt-5">
            <p className="text-[10.7px] font-Inter font-light text-[#F4F1EC] md:text-[11.7px]">
              Work that speaks without saying a word.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-9 mb-9 flex justify-center gap-4 md:justify-self-start">
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                setSelectedProject(category);
                setHoveredIndex(null);
              }}
              className={`cursor-pointer rounded-full px-4 py-2 text-[12px] uppercase tracking-wide ${
                selectedProject === category
                  ? "bg-[#C2321B] text-white"
                  : "border border-white/20 text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Carousel viewport */}
        <div className="relative overflow-x-clip overflow-y-visible py-12">
          <motion.div
            key={selectedProject}
            className="flex w-max gap-6"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            {repeatedProjects.map((project, index) => (
              <motion.div
                key={`${selectedProject}-${project.name}-${index}`}
                className="relative w-[320px] shrink-0 sm:w-[450px] lg:w-[510px]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{
                  scale: 1.35,
                  y: -20,
                  zIndex: 100,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
              >
                {renderMedia(project, hoveredIndex === index)}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};