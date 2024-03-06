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
              href='https://www.linkedin.com/in/shikshit-gupta-52794913a/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/ALFAMODO?tab=repositories'
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
          <p className='py-1 italic'>Financial Visualization Specialist (2022 Dec - 2023 Aug)</p>
          <p className='py-1 italic text-sm text-rose-600 font-semibold'>Data Scientist</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Improved financial models by leveraging MySQL and Tableau to perform stock market analysis using stock exchange data,
              resulting in a 17% increase in accuracy and providing valuable insights that drive informed decision-making and strategic growth.
            </li>
            <li>
              Enhanced user decision-making using Python (Matplotlib, Seaborn) and machine learning structured algorithms to transform raw
              data into actionable intelligence setting a new standard for data-driven trading excellence and increase in customers by 30%.
            </li>
            <li>
              Leveraged advanced analytics and interactive dashboards in Tableau to optimize investment strategies for customers, resulting in
              improvement in portfolio performance and significantly increasing investor confidence through data-centric approaches.
            </li>
          </ul>
        </div>

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
              Led the development and deployment of innovative solutions for the biometric system, resulting in a 63% improvement in user
              experience. Streamlined processes by analyzing system logs, identifying and resolving flaws in credit card payment transactions,
              leading to a 7.5% reduction in transaction errors and optimization in ticket issuance.
            </li>
            <li>
              Engaged effectively with American clients to tackle business challenges and seamlessly adapted to their work culture, ensuring the
              successful implementation of innovative solutions.
            </li>
            <li>
              Strengthened the online ticketing interface and camera monitoring application by implementing automated daily system audit
              reports, resulting in a notable 20% decrease in operational costs while bolstering team productivity.
            </li>
            <li>
              Earned an Appreciation Certificate for exceptional leadership and management skills in steering a team of developers, significantly
              enhancing their application performance, and successful completion of key projects and mandatory internship.
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='flex italic'>
            <span className='font-bold italic'>
              Iconseair Management Solutions
            </span>
            <span className='px-2'>|</span>Moradabad, IN
            <span className='px-2'> | </span><Link href="https://economictimes.indiatimes.com/company/iconseair-management-solutions-private-limited/U74120UP2011PTC047057"><FaLink className="h-5 w-5 text-rose-500 cursor-pointer" /></Link>
          </p>
          <p className='py-1 italic'>Technical Intern (2020 July - 2020 Sept)</p>
          <p className='py-1 italic text-sm text-rose-600 font-semibold'>Data Analyst</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Applied advanced data analysis techniques, such as regression analysis and trend forecasting, to scrutinize financial data, identifying
              patterns and anomalies, and providing valuable insights for informed financial decision-making in accounting data.</li>
            <li>
              Increased 80% efficiency and accuracy by revolutionizing the company's traditional methods by implementing advanced digital
              solutions utilizing tools like MS Excel, SQL, and Zoho Books in accounting, auditing activities, and tax consultancy.</li>
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
