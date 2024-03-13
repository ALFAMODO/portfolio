import Image from 'next/image';
import React from 'react';
import netflixImg from '../../public/assets/Education.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const aitools = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='text-2xl font-prata py-2'>Generate AI workout plan</h2>
          <h3>Nextjs / OpenAI / GPT-Model</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
        <p className="text-2xl font-prata mb-5">Project Overview</p>
          <p>
          I have developed an innovative website that leverages OpenAI&apos;s powerful GPT model to provide users with the ability to create personalized AI workout plans. This project exemplifies my commitment to merging cutting-edge AI technology with the fitness industry, enabling users to effortlessly generate customized workout plans by simply inputting their fitness details. It showcases my expertise in AI integration, user-friendly interface design, and responsible data handling. This website represents a transformative approach to fitness planning, empowering individuals to tailor their workout routines to their specific goals and preferences, and stands as a testament to my dedication to using technology to enhance the health and well-being of users.
          </p>
          <Link href="https://www.alfamodo.com/fitness/ai-tools/workout"><button
                        className="flex items-center gap-2 h-10 px-6 font-semibold rounded-md bg-black text-white mt-2 hover:bg-white hover:text-black outline"
                    >
                        <span className="text-xs">
                            Website
                        </span>
                    </button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Nextjs
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Open AI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Instruct Gpt
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Prompt Engineering
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default aitools;