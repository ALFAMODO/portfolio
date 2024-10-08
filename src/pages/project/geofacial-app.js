import Image from 'next/image';
import React from 'react';
import Img from '../../../public/assets/Education.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const geofacialapp = () => {
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
          <h2 className='text-2xl font-prata py-2'>Geo-Facial Attendance System</h2>
          <h3>React Native / iOS / Google API</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className="text-2xl font-prata mb-5">Project Overview</p>
          <p>
            I developed an advanced attendance management app for my university that integrates geolocation and facial recognition technologies to automate and enhance the accuracy of attendance tracking. The app utilizes GPS geofencing to automatically record attendance when students are within the designated campus boundaries, ensuring that only those physically present are marked as attending. This eliminates the need for manual check-ins and prevents location-based attendance fraud.

            Additionally, the app features facial recognition technology, allowing instructors to capture a classroom photo and automatically detect and identify students in real time. Powered by PyTorch, the facial recognition system cross-references the detected faces with the class roster and records the attendance instantly. This dual approach—geolocation for remote verification and facial recognition for in-class attendance—streamlines the process, reduces administrative overhead, and improves both accuracy and efficiency.

            The app is built using React Native for cross-platform compatibility, PyTorch for advanced facial recognition, Google Maps API for location tracking, and Firebase for real-time data storage and management. This project demonstrates my ability to blend cutting-edge AI techniques with backend technologies to solve real-world challenges, particularly in educational settings.
          </p>
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
                <RiRadioButtonFill className='pr-1' /> iOS Development
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenCV
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> RetinaFace
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Location API
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

export default geofacialapp;