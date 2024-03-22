import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import AboutImg from '../../public/assets/Resume_QR.jpeg';
import { BiArrowToRight } from 'react-icons/bi';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-2 md:py-4 text-gray-700 text-2xl md:text-4xl lg:text-6xl font-bold tracking-wider'>
            Hi, I&#39;m <span className='text-teal-700 font-cors'> Shikshit Gupta</span>
          </h1>
          <h1 className='md:py-2 text-gray-700 font-bold text-lg md:text-2xl lg:text-4xl'>Data Scientist</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto md:text-base text-sm'>
            I am focused on developing data-driven solutions, seamlessly integrating advanced analytics and machine learning techniques with backend technologies to create powerful and insightful data applications.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/shikshit-gupta-52794913a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/ALFAMODO?tab=repositories'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
          <div className="flex justify-center mt-4">
            <Image src={AboutImg} alt='resume' className="border-2 border-teal-700 rounded px-1"/>
          </div>
          <Link href="/resume"><button className=" italic mt-2 text-sm rounded-full px-4"><p className="flex justify-center items-center gap-1">Digital Resume<BiArrowToRight/></p></button></Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
