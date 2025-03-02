import React from "react";

const ProjectCard = ({ image, title, description, techStack, link, position }) => {
    return (
      <div className={`bg-gray-900 text-white  mt-10  rounded-lg font-serif
      ${position}  flex flex-col md:flex-row gap-6 w-full max-w-11/12`}>
        {/* Left Side - Project Image */}
        <div className="w-full p-6 md:w-1/2 bg-gray-800 rounded-lg">
          <img src={image} alt={title} className="rounded-3xl lg:max-w-[350px] p-5 flex justify-center items-center h-auto" />
        </div>
  
        {/* Right Side - Project Details */}
        <div className="flex-1 p-6 text-justify ">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-300 mt-2">{description}</p>
  
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-700 px-3 py-1 rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
  
          {/* External Link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-gray-400 hover:text-white"
            >
              <span>View Project</span>
              🔗
            </a>
          )}
        </div>
      </div>
    );
  };
  
  export default ProjectCard;