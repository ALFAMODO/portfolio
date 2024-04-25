import Image from 'next/image';
import React from 'react';
import Img from '../../../public/assets/Education.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const olympics = () => {
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
          <h2 className='text-2xl font-prata py-2'>Olympic Analysis (120 years)</h2>
          <h3>Python / EDA / Streamlit</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
        <p className="text-2xl font-prata mb-5">Project Overview</p>
          <p>
          I have developed an immersive Streamlit web application using Python that showcases my expertise in data analysis, visualization, and web development. This project offers a comprehensive analysis of the Olympic Games spanning the last 120 years, providing users with a rich historical perspective and valuable insights into athlete performance and country achievements. By leveraging data manipulation, interactive visualizations, and web development skills, I have created an engaging platform that makes complex Olympic data accessible to a wide audience. This project not only highlights my technical proficiency but also underscores my commitment to delivering informative and captivating data-driven experiences.
          </p>
          <Link href="https://olympics-analysis-project.streamlit.app"><button
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
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Jupyter
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Streamlit
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Data Cleaning
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Data Visualization
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> EDA
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

export default olympics;