import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/About.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-6 md:p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='text-xl tracking-widest uppercase text-teal-700 font-bold font-prata'>
            About
          </p>
          <h2 className='py-4 text-lg md:text-2xl lg:text-4xl font-prata'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I specialize in data science and analytics, focusing on extracting actionable insights from complex datasets and developing data-driven solutions. I have a strong passion for continuous learning and believe in the versatility of data science, recognizing that there are multiple approaches to solving analytical challenges. While my primary expertise lies in data analysis, statistical modeling, and machine learning using tools such as Python and R, I am adaptable and quick to grasp new technologies and methodologies as the situation demands. I firmly believe that being a proficient data scientist involves selecting the most suitable tools and techniques for each unique analytical problem.
          </p>
          <p className='py-2 text-gray-600'>
          With a career spanning several years, I&apos;ve had the privilege of working on diverse projects that have honed my analytical skills and expanded my horizons. My experience extends from exploratory data analysis and hypothesis testing to predictive modeling and data visualization. I&apos;ve been entrusted with complex data challenges, and my solutions have consistently delivered measurable results.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-pink-700 font-montserrat animate-pulse cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
