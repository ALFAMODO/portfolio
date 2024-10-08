import Image from 'next/image';
import React from 'react';
import Html from '../../public/assets/skills/html.png';
import Css from '../../public/assets/skills/css.png';
import Javascript from '../../public/assets/skills/javascript.png';
import ReactImg from '../../public/assets/skills/react.png';
import Tailwind from '../../public/assets/skills/tailwind.png';
import Github from '../../public/assets/skills/github1.png';
import Firebase from '../../public/assets/skills/firebase.png';
import NextJS from '../../public/assets/skills/nextjs.png'
import AWS from '../../public/assets/skills/aws.png';
import DataScience from '../../public/assets/skills/DataScience.png';
import MachineLearning from '../../public/assets/skills/MachineLearning.png';
import AI from '../../public/assets/skills/AI.jpg';

const Skills = () => {
  return (
    <div id='skills' className='w-full p-6 md:p-2 lg:h-screen'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-teal-700 font-bold font-prata'>
          Skills
        </p>
        <h2 className='py-4 text-lg md:text-2xl lg:text-4xl font-prata'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 col-span-2 lg:col-span-1'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={AI} width='80px' height='80px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="font-bold italic text-xl text-gray-500">Artificial Intelligence</h3>
              </div>
            </div>
            <div className='mt-4'>
              <ul className='list-disc list-inside'>
                <li className='text-gray-600'>Inferencing Models</li>
                <li className='text-rose-600 animate-pulse font-bold'>Fine tuning LLMs and VLMs</li>
                <li className='text-gray-600'>Multi-Modal RAG</li>
                <li className='text-gray-600'>Tokenization Embeddings</li>
                <li className='text-gray-600'>Transformers</li>
              </ul>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 col-span-2 lg:col-span-1'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={DataScience} width='80px' height='80px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="font-bold italic text-xl text-gray-500">Data Science</h3>
              </div>
            </div>
            <div className='mt-4'>
              <ul className='list-disc list-inside'>
                <li className='text-gray-600'>Exploratory Data Analysis</li>
                <li className='text-gray-600'>Data Cleaning and Visualization</li>
                <li className='text-rose-600 animate-pulse font-bold'>Hypothesis A/B Testing</li>
                <li className='text-gray-600'>Dimensionality Reduction</li>
                <li className='text-gray-600'>Cross Validation</li>
                <li className='text-gray-600'>Statistics</li>
                <li className='text-gray-600'>Tableau</li>
              </ul>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 col-span-2 lg:col-span-1'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={MachineLearning} width='80px' height='80px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="font-bold italic text-xl text-gray-500">Machine Learning</h3>
              </div>
            </div>
            <div className='mt-4'>
              <ul className='list-disc list-inside'>
                <li className='text-gray-600'>Supervised/Unsupervised</li>
                <li className='text-gray-600'>Hyperparameter tuning</li>
                <li className='text-gray-600'>Optimization Algorithms</li>
                <li className='text-rose-600 animate-pulse font-bold'>Natural Language Processing</li>
                <li className='text-gray-600'>Computer Vision</li>
                <li className='text-gray-600'>Neural Networks (CNN, GAN)</li>
                
              </ul>
            </div>
          </div>
          
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 col-span-2 lg:col-span-1'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='80px' height='80px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className="font-bold italic text-xl text-gray-500">Software Development</h3>
              </div>
            </div>
            <div className='mt-4'>
              <ul className='list-disc list-inside'>
                <li className='text-rose-600 animate-pulse font-bold text-base'>Python / Nextjs</li>
                <li className='text-gray-600'>Data Structures</li>
                <li className='text-gray-600'>AWS Deployment</li>
                <li className='text-gray-600'>Agile Development</li>
                <li className='text-gray-600'>Github Version Control</li>
                <li className='text-gray-600'>Web Development (MERN Stack)</li>
                <li className='text-gray-600'>App Development (iOS/Android)</li>
                <li className='text-gray-600'>Codebase Documentation</li> 
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
