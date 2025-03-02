import React from 'react';
import Button from './Button';
import Tools from './Tools';
import jsImg from '../assets/Logo/javascript.svg';
import cssImg from '../assets/Logo/css3.svg';
import htmlImg from '../assets/Logo/html5.svg';
import javaImg from '../assets/Logo/java.svg';
import nodeImg from '../assets/Logo/nodejs.svg';
import npmImg from '../assets/Logo/npm.svg';
import reactImg from '../assets/Logo/react.svg';
import reduxImg from '../assets/Logo/redux.svg';
import gitImg from '../assets/Logo/github.svg';
import bootstrapImg from '../assets/Logo/bootstrap.svg';
import mongoImg from '../assets/Logo/mongodb.svg';
import mysqlImg from '../assets/Logo/mysql.svg';
import vsImg from "../assets/Logo/icons8-vs-code-96.png"
import postmanImg from '../assets/Logo/icons8-postman-inc-96.png';
import cImg from '../assets/Logo/icons8-c-96 (1).png';
import cppImg from '../assets/Logo/icons8-c-96.png';

function SectionThird() {
  return (
    <div className="bg-black py-10 lg:py-20 font-serif text-white">
      <div className="w-11/12 mx-auto flex flex-col justify-center">
        {/* Button */}
        <div className="flex justify-center">
          <Button text="Skills" />
        </div>

        {/* Subtitle */}
        <p className="text-center mx-auto mt-6 text-gray-400 text-lg md:text-xl">
          The Skills, Tools, and Technologies I am really good at:
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-10 mt-8 justify-center">
          <Tools name="HTML-5" imgSrc={htmlImg} />
          <Tools name="CSS-3" imgSrc={cssImg} />
          <Tools name="BootStrap" imgSrc={bootstrapImg} />
          <Tools name="React.js" imgSrc={reactImg} />
          <Tools name="Redux" imgSrc={reduxImg} />
          <Tools name="JavaScript" imgSrc={jsImg} />
          <Tools name="Node.js" imgSrc={nodeImg} />
          <Tools name="NPM" imgSrc={npmImg} />
          <Tools name="MongoDb" imgSrc={mongoImg} />
          <Tools name="MySQL" imgSrc={mysqlImg} />
          <Tools name="Java" imgSrc={javaImg} />
          <Tools name="GitHub" imgSrc={gitImg} />
          <Tools name="C" imgSrc={cImg} />
          <Tools name="C++" imgSrc={cppImg} />
          <Tools name="VS-Code" imgSrc={vsImg} />
          <Tools name="Postman" imgSrc={postmanImg} />
        </div>
      </div>
    </div>
  );
}

export default SectionThird;