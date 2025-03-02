import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import HomeImg from "../assets/Home Image.jpg";
import SectionTwo from "../components/SectionTwo";
import SectionThird from "../components/SectionThird";
import SectionFour from "../components/SectionFour";
import SectionFive from "../components/SectionFive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <Navbar/>
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-center 
      lg:gap-10 items-center text-white font-serif py-10 lg:py-20">
        {/* Left Content */}
        <div className="lg:w-2/3 flex flex-col justify-start gap-6 text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-5xl">Hi, I am Pratik 👋</h1>

          <p className="text-lg text-gray-300 text-justify ">
            A Full-Stack Developer specializing in the MERN stack, proficient in both frontend and backend development.
            He has experience in building scalable web solutions using React.js and Node.js. With expertise in MongoDB
            and Express.js, he efficiently manages APIs and databases. His coding style is effective, secure, and
            user-centric.
          </p>

          {/* Location & Availability */}
          <div>
            <div className="flex flex-row items-center justify-center lg:justify-start gap-2 text-lg">
              <IoLocationOutline /> <p>Lucknow, UP, IND</p>
            </div>

            <div className="flex flex-row items-center justify-center lg:justify-start gap-2">
              <img
                width="15"
                height="15"
                src="https://img.icons8.com/emoji/48/green-circle-emoji.png"
                alt="green-circle-emoji"
              />
              <p>Available for new projects</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-row justify-center lg:justify-start gap-5 mt-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="hover:text-gray-400 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} className="hover:text-green-500 transition duration-300" />
            </a>
            <a href="mailto:your-email@example.com">
              <FiMail size={30} className="hover:text-red-500 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0">
          <img
            src={HomeImg}
            alt="Pratik's Profile"
            width="250px"
            className="scale-x-[-1] shadow-[-20px_20px] shadow-gray-400 border-4 border-black rounded-xl"
          />
        </div>
      </div>

      {/* Sections */}
      <SectionTwo />
      <SectionThird />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default Home;