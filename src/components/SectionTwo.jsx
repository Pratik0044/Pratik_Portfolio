import React from "react";
import Button from "./Button";
import HomeImg from "../assets/Home Image.jpg";

function SectionTwo() {
  return (
    <div id="about" className="bg-gray-900 min-h-screen flex justify-center">
      <div className="w-11/12 text-white font-serif flex flex-col items-center py-16">
        {/* Section Heading */}
        <div className="mb-10">
          <Button text={"About Me"} />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center p-6">
            <img
              src={HomeImg}
              alt="About Me"
              className="w-[250px] sm:w-[300px] lg:w-[400px] object-contain shadow-[-20px_20px] shadow-gray-400 border-4 border-black rounded-xl"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 p-6 flex flex-col gap-4 text-[16px] sm:text-[18px] text-gray-300">
            <h1 className="text-3xl sm:text-4xl text-white font-semibold text-center lg:text-left">
              Curious About Me? Here You Have It:
            </h1>

            <p className="text-justify">
              I'm a passionate, self-proclaimed designer who specializes in full-stack development (React.js & Node.js).
              I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience,
              pixel-perfect design, and writing clear, readable, highly performant code matter to me.
            </p>

            

            <p className="text-justify">
              I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            </p>

            <p className="text-justify">
              You can follow me on Twitter where I share tech-related bites and build in public,
              or you can follow me on GitHub.
            </p>

            <h3 className="text-xl font-semibold text-white">Quick Bits About Me:</h3>
            <ul className="list-disc pl-5">
              <li className="underline font-semibold">B.Tech in Computer Science and Engineering.</li>
              <li className="underline font-semibold">Part-Time Mathematics Teacher.</li>
            </ul>

            <p className="text-justify">
              One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite ☺️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;