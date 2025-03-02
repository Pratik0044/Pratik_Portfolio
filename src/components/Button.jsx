import React from 'react'

function Button({text}) {
  return (
    <div className=''>
        <button className='bg-gray-400 text-black font-bold font-serif 
        rounded-2xl px-3 py-1 hover:bg-amber-300 mt-10
        cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-[5px_5px_5px] 
        hover:shadow-blue-300 ' >
            {text}
        </button>
    </div>
  )
}

export default Button