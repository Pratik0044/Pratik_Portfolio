import React from 'react';

function Contact() {
  return (
    <div id='contact' className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6'>
      <h2 className='text-3xl font-bold mb-6'>Contact Us</h2>
      <form className='bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md'>
        <label className='block mb-2'>Name</label>
        <input type='text' placeholder='Enter your name' className='w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none' />

        <label className='block mb-2'>Email</label>
        <input type='email' placeholder='Enter your email' className='w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none' />

        <label className='block mb-2'>Message</label>
        <textarea placeholder='Enter your message' className='w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none'></textarea>

        <button type='submit' className='w-full bg-blue-600 hover:bg-blue-500 text-white p-2 rounded'>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
