import Image from 'next/image';
import React from 'react';
import Img from '../../../public/assets/Education.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const FraudDetection = () => {
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
          <h2 className='text-2xl font-prata py-2'>Fraud Detection</h2>
          <h3>Python / Data Analysis / KNN</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className="text-2xl font-prata mb-5">Project Bio</p>
          <p>Our project employs cutting-edge Machine Learning techniques to tackle the critical issue of fraud detection. Utilizing Principal Component Analysis (PCA) for dimensionality reduction and the K-Nearest Neighbors (KNN) algorithm, our system efficiently processes large datasets to identify fraudulent transactions with high accuracy. These advanced algorithms enable our system to analyze complex data patterns, detect anomalies, and classify transactions that might otherwise go unnoticed. </p>
          <p> By focusing on data-driven insights, our system doesnt just stop at identifying fraud—it goes a step further, uncovering unique patterns that can inform broader business strategies. These insights offer organizations a deeper understanding of their data, allowing them to mitigate risks, improve decision-making, and ultimately create a more secure financial environment. </p>
          <p className="text-2xl font-prata my-5">Project Goal</p>
          <p> The primary goal of our project is to revolutionize fraud detection by leveraging advanced Machine Learning techniques to identify fraudulent transactions and provide actionable insights into data anomalies. Through dimensionality reduction and KNN analysis, we aim to create a robust system that significantly reduces the risk of financial loss due to fraud. In addition, we strive to offer businesses a deeper understanding of their transaction patterns, empowering them to make informed decisions and proactively manage risks. Ultimately, we seek to contribute to a safer and more transparent financial ecosystem.</p>
          <Link href="https://github.com/ALFAMODO/Fraud-Detection"><button
            className="flex items-center gap-2 h-10 px-6 font-semibold rounded-md bg-black text-white mt-5 hover:bg-white hover:text-black outline"
          >
            <span className="text-xs">
              Source
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
                <RiRadioButtonFill className='pr-1' /> KNN
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PCA
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Matplotlib
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Seaborn
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Statistical Analysis
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />Git
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

export default FraudDetection;