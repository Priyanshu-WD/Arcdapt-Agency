import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
export const Header = () => {
  const navigate = useNavigate();
  //   const handleclick = () => {
  //     <PreLoader />;
  //   };

  const scrollToAbout = () => {
    document.getElementById("About").scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrolltoSkill = () => {
    document.getElementById("Skills").scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrolltoExperience = () => {
    document.getElementById("Experience").scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrolltoWorks = () => {
    document.getElementById("Works").scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header className="w-9/10  m-auto pt-4 ">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>

        <ul className="hidden text-[#17130F] text-right md:flex flex-col md:flex-row   md:items-center gap-[35.01px] md:text-[10.8px] font-Inter opacity-65">
          <motion.li
            onClick={scrollToAbout}
            whileHover={{
              rotateX: 360,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link to="/#About">ABOUT US</Link>
          </motion.li>

          <motion.li
            onClick={scrolltoSkill}
            whileHover={{
              rotateX: 360,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link to="/#Skills">WORK</Link>
          </motion.li>
          <motion.li
            onClick={scrolltoExperience}
            whileHover={{
              rotateX: 360,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link to="/#Experience">SERVICE</Link>
          </motion.li>
          <motion.li
            onClick={scrolltoWorks}
            whileHover={{
              rotateX: 360,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link to="/#Works">PROCESS</Link>
          </motion.li>
          <motion.li
            onClick={scrollToContact}
            whileHover={{
              rotateX: 360,
            }}
            transition={{
              duration: 1.0,
            }}
          >
            <Link to="/#contact">TEAM</Link>
          </motion.li>
        </ul>
        <div>
          <div>
            

            <div>
              <button className="hidden md:block text-white p-cta rounded-(--rounded-cta) bg-[#FF0000] cursor-pointer text-[10.8px] font-regular font-Inter tracking-wide whitespace-nowrap">
                Build with us
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
