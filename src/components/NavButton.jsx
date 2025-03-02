import React from 'react';

function NavButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}  // onClick event handle करेगा
      className='bg-gray-800 rounded-xl cursor-pointer px-5 py-2 text-sm hover:bg-gray-600 hover:text-black transition duration-300'
    >
      {text}
    </button>
  );
}

export default NavButton;