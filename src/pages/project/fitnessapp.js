import Image from 'next/image';
import React from 'react';
import Img from '../../../public/assets/Education.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const fitnessapp = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Img}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='text-2xl font-prata py-2'>Fitness Tracking App</h2>
          <h3>React Native / Python / Nodejs</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className="text-2xl font-prata mb-5">Project Overview</p>
          <p>
          I developed a comprehensive fitness tracking app that serves as an all-in-one solution for users to monitor their workouts, diet, and body metrics while providing personalized insights and analytics. The app allows users to track various aspects of their fitness journey, including workout routines, meal plans, and body measurements, offering real-time analytics to visualize progress. These analytics help users monitor changes in body shape, weight, and overall fitness performance, ensuring they stay on top of their goals.

The app also includes a robust trainer and trainee dashboard, transforming it into a SaaS platform for fitness professionals. Trainers can manage their clients, create personalized workout and nutrition plans, and track their clients progress. The dashboard allows trainees to follow their trainer&apos;s guidance, access their fitness plans, and communicate effectively. This feature-rich platform enables fitness trainers to expand their reach, manage multiple clients, and scale their business by offering personalized services through the app.

To enhance user experience, I integrated a state-of-the-art LLM (Large Language Model) chatbot based on the Ollama Lama 3 model. This AI-powered chatbot provides users with instant answers to their fitness-related queries, from workout recommendations to dietary guidance. The chatbot offers intelligent suggestions, resolving common fitness concerns and providing personalized advice based on user data and goals. This integration of advanced AI technology not only improves user engagement but also elevates the app&apos;s ability to deliver tailored fitness recommendations.

Built with a focus on scalability and performance, the app is designed to function as a SaaS product for fitness trainers while offering everyday users a powerful tool to manage their fitness journey. It is developed using React Native for mobile compatibility, MongoDB for database management, and PyTorch for AI model integration. This project showcases my ability to merge cutting-edge machine learning models, real-time analytics, and cloud-based solutions to create a complete and highly functional fitness platform.</p>
          {/**<Link href="https://www.alfamodo.com"><button
            className="flex items-center gap-2 h-10 px-6 font-semibold rounded-md bg-black text-white mt-2 hover:bg-white hover:text-black outline"
          >
            <span className="text-xs">
              Website
            </span>
          </button></Link> */}
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React Native
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> LLM and VLM 
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Pytorch
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Analytics
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

export default fitnessapp;