import React from "react";

const ExperienceCard = ({ logo, company, title, date, points }) => {
  return (
    <div className="bg-gray-700 m-5 text-white p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-4xl mx-auto shadow-lg">
      {/* Logo Section */}
      <div className="w-24 h-24 md:w-[20%] flex-shrink-0">
        <img
          src={logo}
          alt={`${company} Logo`}
          className="w-full h-full object-contain bg-white p-2 rounded-2xl border-2 border-gray-900"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col w-full md:min-w-[50%] text-center md:text-left">
        <h3 className="text-green-400 font-bold text-xl md:text-3xl">{company}</h3>
        <h2 className="text-lg font-semibold mt-1">{title}</h2>

        {/* Bullet Points */}
        <ul className="list-disc pl-5 text-gray-300 text-sm md:text-base md:">
          {points.map((point, index) => (
            <li key={index} >{point} </li>
          ))}
        </ul>
      </div>

      {/* Date Section */}
      <div className="w-full md:w-[30%] text-center md:text-right">
        <span className="text-red-200 text-sm md:text-md font-semibold">{date}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;