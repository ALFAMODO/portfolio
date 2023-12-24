import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaLink } from "react-icons/fa6";
import Link from 'next/link';

const resume = () => {
  return (
    <>
      <Head>
        <title>Shikshit | Resume</title>
        <meta
          name='description'
          content='I am a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center font-marcel tracking-wide text-3xl'>RESUME</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center font-marcel text-3xl tracking-wide'>Shikshit Gupta</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Data Scientist{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Data Scientist</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated data scientist with experience in data analysis, statistical modeling, and machine learning techniques. Proficient in customer data insights, predictive analytics, and data-driven decision-making. Adept at developing strategies for extracting valuable insights from complex datasets and driving data-driven solutions. Skilled in team collaboration, hypothesis testing, and relationship building. Consummate professional and motivated leader with solid interpersonal abilities and a proven track record of critical thinking, hypothesis generation, and optimizing data-driven efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span> PyTorch
            <span className='px-2'>|</span> R
            <span className='px-2'>|</span> Machine Learning
            <span className='px-2'>|</span> Data Structures
            <span className='px-2'>|</span> Data Visualization
            <span className='px-2'>|</span> Tableau
            <span className='px-2'>|</span> PowerBI
            <span className='px-2'>|</span> AWS
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RestAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Competencies</span>
            <span className='px-2'>|</span>Leadership
            <span className='px-2'>|</span>Active Listening
            <span className='px-2'>|</span>Problem Solving
            <span className='px-2'>|</span>Public Speaking
            <span className='px-2'>|</span>Adaptability
            <span className='px-2'>|</span>Verbal Proficiency
            <span className='px-2'>|</span>Persuasion
          </p>
          <p className='py-2'>
            <span className='font-bold'>Certifications</span>
            <span className='px-2'>|</span>Google Advanced Data Analytics Professional (Present)
            <span className='px-2'>|</span>Capgemini Appreciation Certificate
            <span className='px-2'>|</span>Deep Learning Certification deeplearning.ai
            <span className='px-2'>|</span>Advance Java Star Performer
            <span className='px-2'>|</span>Machine Learning Stanford
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='flex italic'>
            <span className='font-bold italic'>
              Option Tools
            </span>
            <span className='px-2'>|</span>Noida, IN
            <span className='px-2'> | </span><Link href="https://www.optiontools.in"><FaLink className="h-5 w-5 text-rose-500 cursor-pointer" /></Link>
          </p>
          <p className='py-1 italic'>Financial Visualization Specialist (2023 Jan - 2023 July)</p>
          <p className='py-1 italic text-sm text-rose-600 font-semibold'>Data Scientist</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Led Data Analysis and Visualization at OptionTools, for option chains and current market trends using Tableau & SQL.
            </li>
            <li>
              Developed interactive graphs using Python (Matplotlib, Seaborn) and Machine Learning algorithms to transform raw data into actionable intelligence, which enhanced user decision-making in trading and led to a rapid increase in subscribers.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='flex italic'>
            <span className='font-bold italic'>
              Capgemini
            </span>
            <span className='px-2'>|</span>Mumbai, IN
            <span className='px-2'> | </span><Link href="https://www.capgemini.com"><FaLink className="h-5 w-5 text-rose-500 cursor-pointer" /></Link>
          </p>
          <p className='py-1 italic'>Associate Software Engineer (2020 Dec - 2022 Dec)</p>
          <p className='py-1 italic text-sm text-rose-600 font-semibold'>Analyst</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Engaged in a dual role encompassing development and support with an American-based corporation, for their interconnected applications.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Improved their ticketing interface, biometric system and camera functioning by automating regular internal system audit reports, resulting in unprecedented efficiency and a substantial reduction in operational costs.</li>
            <li>
              As Intern, Acquired proficiency in cutting-edge technologies such as React.js, MongoDB and Node.js by successfully developing Flight Booking application featuring a polyglot architecture.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Masters in Artificial Intelligence</span>
            <span className='px-2'>|</span>Yeshiva University (Present)
          </p>
          <p className='py-1 italic'>Manhattan, New York</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of various Image processing projects like Cow stall number,
              Lung Cancer Segmentation, Brain Tumor Detection using PyTorch, Python, Transfer Learning, CNN with publications of project papers on Research Gate.
            </li>
            <li>
              Oversaw comprehensive understanding, operations in Data Visualization and Acquisition by developing various dashboards, plotting graphs and predictive modelling on financial historical datasets of trending stocks.
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
