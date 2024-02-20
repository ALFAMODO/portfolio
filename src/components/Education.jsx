import Image from 'next/image';
import React from 'react';
import EducationImage from '../../public/assets/Education.jpg';
import { GiGraduateCap } from "react-icons/gi";


const Education = () => {
  return (
    <div id='education' className='w-full lg:h-screen '>
    <div className='max-w-[1240px] p-6 md:p-0 mx-auto justify-center pt-10 md:pt-28'>
        <p className='text-xl tracking-widest uppercase text-teal-700 font-bold font-prata'>
          EDUCATION
        </p>
        <h2 className='py-2 md:py-4 text-lg md:text-2xl lg:text-4xl font-prata'>What I&apos;ve Done</h2>
    </div>
    <div className="relative">
      <div className="backdrop-blur-sm opacity-90">
        <Image src={EducationImage} alt="education.jpg" className="w-full" />
      </div>
      <div className="absolute top-5 md:top-10 left-5 md:left-10 text-white font-bold font-fawk p-2 ">
        <div className="flex gap-1 md:gap-3 lg:gap-5 text-sm md:text-xl lg:text-3xl tracking-wide font-marcel"><GiGraduateCap className="h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10"/>MASTERS IN ARTIFICIAL INTELLIGENCE</div>
        <div className="text-slate-300 text-xs md:text-md lg:text-lg">MANHATTAN, NEW YORK</div>
      </div>
    </div>

      
    </div>
  );
};

export default Education;
