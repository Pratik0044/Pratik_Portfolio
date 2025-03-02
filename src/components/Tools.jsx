import React from 'react';

function Tools({ imgSrc, name }) {
  return (
    <div className="flex flex-col items-center text-gray-400">
      <div className="flex flex-col items-center justify-center gap-2">
        <img
          src={imgSrc}
          alt={name}
          className={`w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] transition-transform transform hover:scale-110 ${
            name === 'GitHub' ? 'bg-white rounded-full' : ''
          }`}
        />
        <p className="text-base sm:text-xl">{name}</p>
      </div>
    </div>
  );
}

export default Tools;