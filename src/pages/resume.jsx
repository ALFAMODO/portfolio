import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Shikshit | Resume</title>
        <meta
          name="description"
          content="I am a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center font-marcel tracking-wide text-3xl">
          RESUME
        </h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center font-cors font-bold text-3xl tracking-wide">
            Shikshit Gupta
          </h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/shikshit-gupta-52794913a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/ALFAMODO?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              <span className="px-1"></span> AI PRODUCT DEVELOPER{" "}
              <span className="px-1">|</span> DATA SCIENTIST
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Data Scientist</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated data scientist with experience
          in data analysis, statistical modeling, and machine learning
          techniques. Proficient in customer data insights, predictive
          analytics, and data-driven decision-making. Adept at developing
          strategies for extracting valuable insights from complex datasets and
          driving data-driven solutions. Skilled in team collaboration,
          hypothesis testing, and relationship building. Consummate professional
          and motivated leader with solid interpersonal abilities and a proven
          track record of critical thinking, hypothesis generation, and
          optimizing data-driven efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Python
            <span className="px-2">|</span> PyTorch
            <span className="px-2">|</span> R<span className="px-2">|</span>{" "}
            Machine Learning
            <span className="px-2">|</span> Data Structures
            <span className="px-2">|</span> Data Visualization
            <span className="px-2">|</span> Tableau
            <span className="px-2">|</span> PowerBI
            <span className="px-2">|</span> AWS
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
            <span className="px-2">|</span> RestAPI
          </p>
          <p className="py-2">
            <span className="font-bold">Competencies</span>
            <span className="px-2">|</span>Leadership
            <span className="px-2">|</span>Active Listening
            <span className="px-2">|</span>Problem Solving
            <span className="px-2">|</span>Public Speaking
            <span className="px-2">|</span>Adaptability
            <span className="px-2">|</span>Verbal Proficiency
            <span className="px-2">|</span>Persuasion
          </p>
          <p className="py-2">
            <span className="font-bold">Certifications</span>
            <span className="px-2">|</span>Google Advanced Data Analytics
            Professional (Present)
            <span className="px-2">|</span>Capgemini Appreciation Certificate
            <span className="px-2">|</span>Deep Learning Certification
            deeplearning.ai
            <span className="px-2">|</span>Advance Java Star Performer
            <span className="px-2">|</span>Machine Learning Stanford
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}

        <div className="py-6">
          <p className="flex italic">
            <span className="font-bold italic">ZSAnalytics</span>
            <span className="px-2">|</span>New York, NY
            <span className="px-2"> | </span>
            <Link href="https://zsanalytics.com/">
              <FaLink className="h-5 w-5 text-rose-500 cursor-pointer" />
            </Link>
          </p>
          <p className="py-1 italic">
            Generative AI Intern (2024 May - 2024 Aug)
          </p>
          <p className="py-1 italic text-sm text-rose-600 font-semibold">
            Data Scientist
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Optimized LLM Models for intelligent document retrieval in
              customer service, leveraging RAG and Azure, increasing query
              accuracy by 30%.
            </li>
            <li>
              Built predictive models for sales trends and inventory management,
              reducing delivery downtime by 20% via demand forecasting.
            </li>
            <li>
              Enhanced CVR by 50% using personalized recommendation chatbots,
              streamlining instant data access and cutting manual workload.
            </li>
          </ul>
          <div className="italic">
            <span className="font-bold font-cors">SKILLS: </span> LLM, VLM,
            OpenAI, Azure, React Native, MongoDB, Python, NumPy, Pandas,
            Matplotlib,{" "}
          </div>
        </div>

        <div className="py-6">
          <p className="flex italic">
            <span className="font-bold italic">Option Tools</span>
            <span className="px-2">|</span>Noida, IN
            <span className="px-2"> | </span>
            <Link href="https://www.optiontools.in">
              <FaLink className="h-5 w-5 text-rose-500 cursor-pointer" />
            </Link>
          </p>
          <p className="py-1 italic">
            Financial Visualization Specialist (2022 Dec - 2023 Aug)
          </p>
          <p className="py-1 italic text-sm text-rose-600 font-semibold">
            Data Scientist
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Implemented RAG-based LLM models for a finance options trading
              chatbot, improving premium client satisfaction by 50% through
              efficient backtesting retrieval.
            </li>
            <li>
              Designed regression models with 50K+ FinTech data points to
              predict market patterns, improving accuracy by 17%.
            </li>
            <li>
              Conducted A/B testing and advanced data modeling to analyze
              historical trends, boosting SEO reach and social media campaigns,
              resulting in 100K+ active users.
            </li>
            <li>
              Built dashboards using Tableau and Google Analytics to monitor
              user activity, producing ad-hoc insights, and improving engagement
              by 80%.
            </li>
          </ul>
          <div className="italic">
            <span className="font-bold font-cors">SKILLS: </span>LLM, Machine
            Learning, Tableau, Python, MySQL, NumPy, Pandas, Matplotlib, Seaborn
          </div>
        </div>

        <div className="py-6">
          <p className="flex italic">
            <span className="font-bold italic">Capgemini</span>
            <span className="px-2">|</span>Mumbai, IN
            <span className="px-2"> | </span>
            <Link href="https://www.capgemini.com">
              <FaLink className="h-5 w-5 text-rose-500 cursor-pointer" />
            </Link>
          </p>
          <p className="py-1 italic">
            Associate Software Engineer (2020 Dec - 2022 Dec)
          </p>
          <p className="py-1 italic text-sm text-rose-600 font-semibold">
            Analyst
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">

            <li>
              Led the end-to-end development of ML models such as Random Forest
              and GBM on Amazon AWS SageMaker to analyze annual pass holder
              churn rates and automate credit card failure reporting, resulting
              in a 63% increase in business performance and minimizing revenue
              loss.
            </li>
            <li>
              Developed an optimized face recognition system using CNNs to
              validate guest authentication and secure access, while
              collaborating with cross-functional teams, resulting in reduced
              false positives by 40%.
            </li>
            <li>
              Analyzed over 1 million Disneyland visitor records using
              clustering algorithms for data visualization to uncover customer
              purchase patterns, leading to the implementation of targeted
              personalization strategies that increased profits by $50,000.
            </li>
            <li>
              Developed dashboards to visualize 70% more profits during the peak
              season to communicate seasonal trends and make future campaigns.
            </li>
          </ul>
          <div className="italic">
            <span className="font-bold font-cors">SKILLS: </span> React, Python,
            Javascript, MySQL, Face Recognition, Service Now, Splunk, AWS, Jira,
            Confluence, Rest API{" "}
          </div>
        </div>

        <div className="py-6">
          <p className="flex italic">
            <span className="font-bold italic">
              Iconseair Management Solutions
            </span>
            <span className="px-2">|</span>Moradabad, IN
            <span className="px-2"> | </span>
            <Link href="https://economictimes.indiatimes.com/company/iconseair-management-solutions-private-limited/U74120UP2011PTC047057">
              <FaLink className="h-5 w-5 text-rose-500 cursor-pointer" />
            </Link>
          </p>
          <p className="py-1 italic">
            Technical Intern (2020 July - 2020 Sept)
          </p>
          <p className="py-1 italic text-sm text-rose-600 font-semibold">
            Data Analyst
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Applied descriptive analysis to assess risk severity metrics in
              clients’ accounts, identifying 10+ critical insights and potential
              compliance issues.
            </li>{" "}
            <li>
              Customized software integrations like MS Excel and MySQL to reduce
              manual data entry, resulting in a 100% increase in accuracy and
              productivity.
            </li>{" "}
            <li>
              Segmented over 10,000 client records in accounts units, to conduct
              error rate analysis to identify anomalies, enhancing retention
              rates by 10%.
            </li>
          </ul>
          <div className="italic">
            <span className="font-bold font-cors">SKILLS: </span> MySQL,
            ZohoBooks, MS Excel, Mathematics, Data Analytics
          </div>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        {/* Education */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
              Masters in Artificial Intelligence
            </span>
            <span className="px-2">|</span>Yeshiva University (Present)
          </p>
          <p className="py-1 italic">Manhattan, New York</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured proper implementation of various Image processing projects
              like Cow stall number, Lung Cancer Segmentation, Brain Tumor
              Detection using PyTorch, Python, Transfer Learning, CNN with
              publications of project papers on Research Gate.
            </li>
            <li>
              Oversaw comprehensive understanding, operations in Data
              Visualization and Acquisition by developing various dashboards,
              plotting graphs and predictive modelling on financial historical
              datasets of trending stocks.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
              Executive Post Graduate Diploma in Data Science
            </span>
            <span className="px-2">|</span>International Institute of
            Information Technology (IIIT)
          </p>
          <p className="py-1 italic">Bangaluru, India</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed various projects in supervised as well as unsupervised
              learning using various Machine Learning algorithms like Linear
              Regression, Logistic Regression, K-Means Clustering, Decision
              Trees, Neural Networks etc.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
