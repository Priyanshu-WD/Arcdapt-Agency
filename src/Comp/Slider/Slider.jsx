const skills = [
  {
    name: "GRAPHIC DESIGN" 
  },
  {
    name: "VIDEO EDITING"
  },
  {
    name: "SOCIAL MEDIA" 
  },
  {
    name: "LANDING PAGES"
  },
  {
    name: "WEB DEVELOPMENT"
  }
  
]

console.log(skills)


export const Slider = () => {
  return (
    <div className=" bg-[#ff0000] border-t border-b border-[#FBF0E8] p-[.3rem] overflow-hidden">
      <div
        className="flex items-center animate-scroll"
        style={{ width: "max-content", gap: "5rem" }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="" aria-hidden={index >= skills.length}>
            <span className="text-white font-Inter font-light italic opacity-80">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};