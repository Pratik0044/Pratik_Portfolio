import React, { useState } from 'react';
import logo from '../assets/Home Image.jpg';
import NavButton from './NavButton';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 60; 
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navbarHeight - 10, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='bg-gray-900 text-white font-serif fixed w-full z-10'>
      <nav className='flex justify-between w-11/12 mx-auto items-center py-1'>
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className='w-10 h-10 rounded-full' />
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex flex-row gap-4'>
          <NavButton text='About' onClick={() => scrollToSection('about')} />
          <NavButton text='Experience' onClick={() => scrollToSection('experience')} />
          <NavButton text='Work' onClick={() => scrollToSection('work')} />
          <NavButton text='Contact'  />
          <a href="https://drive.google.com/file/d/1zl7vpjE3t5TneJzD_0T7PphhVK9NZh1O/view?usp=drive_link"><NavButton text='Download CV' /></a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center gap-4 py-4 bg-gray-800'>
          <NavButton text='About' onClick={() => scrollToSection('about')} />
          <NavButton text='Experience' onClick={() => scrollToSection('experience')} />
          <NavButton text='Work' onClick={() => scrollToSection('work')} />
          <NavButton text='Contact' onClick={() => scrollToSection('contact')} />
          <a href="https://drive.google.com/file/d/1zl7vpjE3t5TneJzD_0T7PphhVK9NZh1O/view?usp=drive_link"><NavButton text='Download CV' /></a>
        </div>
      )}
    </div>
  );
}

export default Navbar;