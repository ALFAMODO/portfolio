import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BiArrowToRight } from 'react-icons/bi';
import AboutImg from '../../public/assets/qr.png';

const useTypewriter = (text, speed) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayedText, isComplete };
};

const Main = () => {
  const { displayedText: typewriterText, isComplete } = useTypewriter("AII Product Developer", 100);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/shikshit-gupta-52794913a/',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: 'https://github.com/ALFAMODO?tab=repositories',
      label: 'GitHub'
    },
    {
      icon: <AiOutlineMail className="w-5 h-5" />,
      href: '/#contact',
      label: 'Email'
    },
    {
      icon: <BsFillPersonLinesFill className="w-5 h-5" />,
      href: '/resume',
      label: 'Resume'
    }
  ];

  return (
    <section id='home' className='w-full min-h-screen bg-white flex items-center justify-center'>
      <div className='max-w-4xl mx-auto px-6 py-20 text-center'>
        
        {/* Intro Text */}
        <div className={`transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className='text-sm font-medium text-gray-500 tracking-wider uppercase mb-8'>
            Let&apos;s Build Something Together
          </p>
        </div>

        {/* Main Heading */}
        <div className={`transform transition-all duration-800 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4'>
            Hi, I&apos;m{' '}
            <span className='text-gray-800'>
              Shikshit Gupta
            </span>
          </h1>
        </div>
        
        {/* Typewriter */}
        <div className={`transform transition-all duration-800 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8'>
            {typewriterText}
            <span className={`inline-block w-0.5 h-8 lg:h-10 bg-gray-900 ml-1 ${isComplete ? 'animate-pulse' : 'animate-pulse'}`}>
              |
            </span>
          </h2>
        </div>

        {/* Description */}
        <div className={`transform transition-all duration-800 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className='text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12'>
            I am a complete blend of AI engineer, data scientist, and software developer, 
            focused on developing data-driven solutions that seamlessly integrate advanced analytics 
            and machine learning techniques with backend technologies.
          </p>
        </div>

        {/* Social Links */}
        <div className={`transform transition-all duration-800 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className='flex items-center justify-center gap-6 mb-12'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noreferrer' : ''}
                className='p-4 bg-gray-50 hover:bg-gray-900 text-gray-700 hover:text-white rounded-full transition-all duration-300 hover:scale-105'
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* QR Code Section */}
        <div className={`transform transition-all duration-800 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className='inline-block p-6 bg-gray-50 rounded-2xl mb-8'>
            <Image 
              src={AboutImg} 
              alt='Digital Resume QR Code' 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-xl" 
            />
            <p className='text-sm text-gray-600 mt-4 font-medium'>
              Scan for Digital Resume
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`transform transition-all duration-800 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Link href="/resume">
            <button className='inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105'>
              <span>View Resume</span>
              <BiArrowToRight className='w-5 h-5' />
            </button>
          </Link>
        </div>

      </div>

      <style jsx>{`
        /* Mobile optimizations */
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
            line-height: 1.1;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          p {
            font-size: 1rem;
          }
          
          .gap-6 {
            gap: 1rem;
          }
          
          button, a {
            min-height: 44px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }
          
          h2 {
            font-size: 1.25rem;
          }
          
          .px-6 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Main;