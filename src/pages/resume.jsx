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
          <h2 className='text-center font-cors font-bold text-3xl tracking-wide'>Shikshit Gupta</h2>
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
            <p><span className='px-1'></span> AI PRODUCT DEVELOPER{' '}
              <span className='px-1'>|</span> DATA SCIENTIST
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
              ZSAnalytics
            </span>
            <span className='px-2'>|</span>New York, NY
            <span className='px-2'> | </span><Link href="https://zsanalytics.com/"><FaLink className="h-5 w-5 text-rose-500 cursor-pointer" /></Link>
          </p>
          <p className='py-1 italic'>Generative AI Intern (2024 May - 2024 Aug)</p>
          <p className='py-1 italic text-sm text-rose-600 font-semibold'>Data Scientist</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed and optimized 5+ LLM models for Gen AI projects, improving model performance and accuracy.
            </li>
            <li>
              Built chatbot for the sports domain using technologies such as Ollama, Llama 3, FAISS, GPT-4, and RAG agents, integrated into React Native.

            </li>
            <li>
            Managed and delivered successful AI applications to 10+ clients, from data prep to deployment, ensuring user satisfaction.


            </li>
          </ul>
          <div className="italic"><span className="font-bold font-cors">SKILLS: </span> LLM, VLM, OpenAI, Azure, React Native, MongoDB, Python, NumPy, Pandas, Matplotlib, </div>
        </div>

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
            <li>Inferenced 3+ LLM models using over 10 million data points from fintech stock data, optimizing strategies for 200+ clients.</li>
            <li>Applied advanced machine learning techniques, including Regression, Classification, Decision Trees, Anomaly Detection, and Feature Engineering, analyzing over 500,000 financial data entries to uncover emerging market trends, achieving a 17% increase in predictive accuracy.</li>
            <li>Conducted statistical analysis using probability theory, A/B testing, KPIs, and statistical inference to inform targeted content marketing strategies, achieving a gain of 100K+ monthly active users through customer segmentation.</li>
            <li>Implemented 20+ interactive dashboards using Tableau, providing real-time insights for marketing, analytics, and sales teams.</li>

          </ul>
          <div className="italic"><span className="font-bold font-cors">SKILLS: </span>LLM, Machine Learning, Tableau, Python, MySQL, NumPy, Pandas, Matplotlib, Seaborn</div>
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
            <li>Managed development and deployment of pipelines for large ML and Neural Network models on an AWS backend to identify potential churn among annual pass holders, and automated credit card failure reports, resulting in a 63% increase in business intelligence.
            </li><li>Increased profits by $50,000 by training clustering algorithms with 1M+ Disneyland visitor data, splitting visitors on their purchase patterns.
            </li><li>Collaborated with global cross-functional Walt Disney teams and business stakeholders to build a face recognition system to optimize online ticketing and mitigate fraud detection using ANN and CNNs, migrating on-prem servers to AWS EC2 instances to achieve business objectives.
            </li><li>Developed an analytical dashboard using Python libraries (NumPy, Pandas, Matplotlib, Scikit-Learn, Seaborn), generating 70% more revenue in peak seasons.</li>
          </ul>
          <div className="italic"><span className="font-bold font-cors">SKILLS: </span> React, Python, Javascript, MySQL, Face Recognition, Service Now, Splunk, AWS, Jira, Confluence, Rest API </div>
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
            <li>Applied advanced analytics algorithms to scrutinize data, evaluated precision, recall, F1-Score, and ROC-AUC, identifying 10 significant trends & patterns.
            </li><li>Negotiated client contracts, prioritizing interests and building effective relationships, resulting in a 50% increase in revenue.
            </li><li>Managed and analyzed a database of 10,000+ client records in accounts, audits, and tax departments using tools like MS Excel, SQL, and Zoho Books, increasing client engagement and retention rates by 10%.
            </li><li>Ensured 100% compliance with legal and regulatory requirements by preparing and submitting regulatory filings and reports.</li>

          </ul>
          <div className="italic"><span className="font-bold font-cors">SKILLS: </span> MySQL, ZohoBooks, MS Excel, Mathematics, Data Analytics</div>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>

        {/* Education */}
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
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Executive Post Graduate Diploma in Data Science</span>
            <span className='px-2'>|</span>International Institute of Information Technology (IIIT)
          </p>
          <p className='py-1 italic'>Bangaluru, India</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed various projects in supervised as well as unsupervised learning using various Machine Learning algorithms like Linear Regression, Logistic Regression, K-Means Clustering, Decision Trees, Neural Networks etc.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
