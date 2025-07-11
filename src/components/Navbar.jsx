import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../../public/assets/logo.jpeg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Education', href: '/#education' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Resume', href: '/resume' },
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedinIn size={18} />, 
      href: 'https://www.linkedin.com/in/clint-briley-50056920a/',
      label: 'LinkedIn'
    },
    { 
      icon: <FaGithub size={18} />, 
      href: 'https://github.com/fireclint',
      label: 'GitHub'
    },
    { 
      icon: <AiOutlineMail size={18} />, 
      href: '/#contact',
      label: 'Contact'
    },
    { 
      icon: <BsFillPersonLinesFill size={18} />, 
      href: '/resume',
      label: 'Resume'
    },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed w-full h-20 z-[100] transition-all duration-500 ease-out ${
          shadow
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className='flex justify-between items-center w-full h-full px-6 lg:px-12 2xl:px-20 max-w-7xl mx-auto'>
          {/* Logo Section */}
          <Link href='/' className='group'>
            <div className='flex items-center space-x-3 transition-transform duration-300 group-hover:scale-105'>
              <div className='relative overflow-hidden rounded-xl shadow-lg ring-2 ring-gray-900/5'>
                <Image
                  src={NavLogo}
                  alt='Logo'
                  width={50}
                  height={50}
                  className='object-cover transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              <div className='hidden sm:block'>
                <h1 className='text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent'>
                  Portfolio
                </h1>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-1'>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onMouseEnter={() => setActiveLink(item.name)}
                onMouseLeave={() => setActiveLink('')}
                className='relative group px-4 py-2 rounded-lg transition-all duration-300'
              >
                <span className='relative z-10 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300'>
                  {item.name}
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out'></div>
                <div className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-600 group-hover:w-full group-hover:left-0 transition-all duration-300'></div>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className='hidden lg:flex items-center space-x-4'>
            <Link href='/#contact'>
              <button className='relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group'>
                <span className='relative z-10'>Get In Touch</span>
                <div className='absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleNav}
            className='lg:hidden relative p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group'
          >
            <div className='relative w-5 h-5'>
              <span className={`absolute block w-5 h-0.5 bg-gray-900 transform transition-all duration-300 ${nav ? 'rotate-45 top-2' : 'top-0'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-gray-900 transform transition-all duration-300 ${nav ? 'opacity-0' : 'top-2'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-gray-900 transform transition-all duration-300 ${nav ? '-rotate-45 top-2' : 'top-4'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[200] transition-all duration-500 ${
          nav ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className='absolute inset-0 bg-black/50 backdrop-blur-sm'
          onClick={handleNav}
        ></div>

        {/* Mobile Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
            nav ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Menu Header */}
          <div className='flex items-center justify-between p-6 border-b border-gray-100'>
            <Link href='/' onClick={() => setNav(false)}>
              <div className='flex items-center space-x-3'>
                <Image
                  src={NavLogo}
                  width={40}
                  height={40}
                  alt='Logo'
                  className='rounded-lg'
                />
                <h2 className='text-lg font-bold text-gray-900'>Portfolio</h2>
              </div>
            </Link>
            <button
              onClick={handleNav}
              className='p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200'
            >
              <AiOutlineClose size={20} className='text-gray-700' />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className='flex flex-col h-full'>
            {/* Navigation Links */}
            <div className='flex-1 py-6'>
              <nav className='space-y-2 px-6'>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setNav(false)}
                    className='block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200 group'
                  >
                    <span className='text-base font-medium'>{item.name}</span>
                    <div className='w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300'></div>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Footer */}
            <div className='p-6 border-t border-gray-100 space-y-6'>
              {/* CTA Button */}
              <Link href='/#contact' onClick={() => setNav(false)}>
                <button className='w-full px-6 py-3 text-white bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold'>
                  Get In Touch
                </button>
              </Link>

              {/* Social Links */}
              <div>
                <p className='text-sm font-semibold text-gray-900 mb-4 tracking-wide'>
                  LET&apos;S CONNECT
                </p>
                <div className='flex space-x-4'>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : '_self'}
                      rel={social.href.startsWith('http') ? 'noreferrer' : ''}
                      onClick={() => setNav(false)}
                      className='flex items-center justify-center w-12 h-12 bg-gray-50 hover:bg-gray-900 text-gray-700 hover:text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group'
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;