import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  FaGithub,
  FaLinkedinIn,
  FaPrint,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from "react-icons/hi";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Add your download logic here
    console.log("Download resume");
  };

  const skills = {
    technical: [
      "Python",
      "PyTorch",
      "R",
      "Machine Learning",
      "Data Structures",
      "Data Visualization",
      "Tableau",
      "PowerBI",
      "AWS",
      "HTML/CSS",
      "JavaScript",
      "React",
      "Next.js",
      "SQL",
      "MongoDB",
      "Redux",
      "Tailwind",
      "Firebase",
      "RestAPI",
    ],
    competencies: [
      "Leadership",
      "Active Listening",
      "Problem Solving",
      "Public Speaking",
      "Adaptability",
      "Verbal Proficiency",
      "Persuasion",
    ],
    certifications: [
      "Google Advanced Data Analytics Professional",
      "Capgemini Appreciation Certificate",
      "Deep Learning Certification (deeplearning.ai)",
      "Advanced Java Star Performer",
      "Machine Learning Stanford",
    ],
  };

  const experiences = [
    {
      company: "Alfamodo Lifestyle",
      location: "New York, NY",
      position: "Lead AI Engineer",
      duration: "Dec 2024 - Present",
      role: "Data Scientist",
      website: "https://www.alfamodo.com/",
      achievements: [
        "Engineered an autonomous fitness coaching platform with multi-agent LLM-powered workflows on Cloudflare, using Google Gemini models.",
        "Implemented caching and memory management, enabling real-time workout generation and reducing response times by 90% to 200ms.",
        "Integrated an AI usage-based subscription model by calculating per-user costs (AFR) to ensure application profitability.",
        "Converted AI-developed features into a sustainable revenue stream, achieving a 60% profit margin on AI usage.",
      ],
      skills:
        "Claude, LLM, OpenAI, Azure, React Native, Firebase, Sentry, Clerk",
    },
    {
      company: "ZS Analytics",
      location: "New York, NY",
      position: "Generative AI Intern",
      duration: "Jan 2024 - Dec 2024",
      role: "Data Scientist",
      website: "https://zsanalytics.com/",
      achievements: [
        "Optimized LLM Models for intelligent document retrieval in customer service, leveraging RAG and Azure, increasing query accuracy by 30%.",
        "Built predictive models for sales trends and inventory management, reducing delivery downtime by 20% via demand forecasting.",
        "Enhanced CVR by 50% using personalized recommendation chatbots, streamlining instant data access and cutting manual workload.",
      ],
      skills:
        "LLM, VLM, OpenAI, Azure, React Native, MongoDB, Python, NumPy, Pandas, Matplotlib",
    },
    {
      company: "Option Tools",
      location: "Noida, IN",
      position: "Financial Visualization Specialist",
      duration: "Dec 2022 - Aug 2023",
      role: "Associate Data Scientist",
      website: "https://www.optiontools.in",
      achievements: [
        "Implemented RAG-based LLM models for a finance options trading chatbot, improving premium client satisfaction by 50% through efficient backtesting retrieval.",
        "Designed regression models with 50K+ FinTech data points to predict market patterns, improving accuracy by 17%.",
        "Conducted A/B testing and advanced data modeling to analyze historical trends, boosting SEO reach and social media campaigns, resulting in 100K+ active users.",
        "Built dashboards using Tableau and Google Analytics to monitor user activity, producing ad-hoc insights, and improving engagement by 80%.",
      ],
      skills:
        "LLM, Machine Learning, Tableau, Python, MySQL, NumPy, Pandas, Matplotlib, Seaborn",
    },
    {
      company: "Capgemini",
      location: "Mumbai, IN",
      position: "Associate Software Engineer",
      duration: "Dec 2020 - Dec 2022",
      role: "Analyst",
      website: "https://www.capgemini.com",
      achievements: [
        "Led the end-to-end development of ML models such as Random Forest and GBM on Amazon AWS SageMaker to analyze annual pass holder churn rates and automate credit card failure reporting, resulting in a 63% increase in business performance.",
        "Developed an optimized face recognition system using CNNs to validate guest authentication and secure access, while collaborating with cross-functional teams, resulting in reduced false positives by 40%.",
        "Analyzed over 1 million Disneyland visitor records using clustering algorithms for data visualization to uncover customer purchase patterns, leading to implementation of targeted personalization strategies that increased profits by $50,000.",
        "Developed dashboards to visualize 70% more profits during peak season to communicate seasonal trends and make future campaigns.",
      ],
      skills:
        "React, Python, JavaScript, MySQL, Face Recognition, Service Now, Splunk, AWS, Jira, Confluence, Rest API",
    },
    {
      company: "Iconseair Management Solutions",
      location: "Moradabad, IN",
      position: "Technical Intern",
      duration: "July 2020 - Sept 2020",
      role: "Data Analyst",
      website:
        "https://economictimes.indiatimes.com/company/iconseair-management-solutions-private-limited/U74120UP2011PTC047057",
      achievements: [
        "Applied descriptive analysis to assess risk severity metrics in clients' accounts, identifying 10+ critical insights and potential compliance issues.",
        "Customized software integrations like MS Excel and MySQL to reduce manual data entry, resulting in a 100% increase in accuracy and productivity.",
        "Segmented over 10,000 client records in accounts units, to conduct error rate analysis to identify anomalies, enhancing retention rates by 10%.",
      ],
      skills: "MySQL, ZohoBooks, MS Excel, Mathematics, Data Analytics",
    },
  ];

  const education = [
    {
      degree: "Masters in Artificial Intelligence",
      institution: "Yeshiva University",
      location: "Manhattan, New York",
      status: "Present",
      achievements: [
        "Ensured proper implementation of various Image processing projects like Cow stall number, Lung Cancer Segmentation, Brain Tumor Detection using PyTorch, Python, Transfer Learning, CNN with publications of project papers on Research Gate.",
        "Oversaw comprehensive understanding, operations in Data Visualization and Acquisition by developing various dashboards, plotting graphs and predictive modelling on financial historical datasets of trending stocks.",
      ],
    },
    {
      degree: "Executive Post Graduate Diploma in Data Science",
      institution: "International Institute of Information Technology (IIIT)",
      location: "Bangalore, India",
      status: "Completed",
      achievements: [
        "Developed various projects in supervised as well as unsupervised learning using various Machine Learning algorithms like Linear Regression, Logistic Regression, K-Means Clustering, Decision Trees, Neural Networks etc.",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Shikshit Gupta | Resume</title>
        <meta
          name="description"
          content="AI Product Developer and Data Scientist specializing in machine learning, data analytics, and innovative AI solutions."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Header */}
          <div
            className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-xl p-6 lg:p-8 mb-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mb-6">
            
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FaPrint className="w-4 h-4" />
                <span className="hidden sm:inline">Print</span>
              </button>
            </div>

            {/* Main Header */}
            <div className="text-center mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                Shikshit Gupta
              </h1>
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
                AI Product Developer | Data Scientist
              </h2>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <HiOutlineMail className="w-4 h-4" />
                  <span className="text-sm lg:text-base">
                    shikshit17@hotmail.com
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker className="w-4 h-4" />
                  <span className="text-sm lg:text-base">New York, NY</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/shikshit-gupta-52794913a/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/ALFAMODO?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-800 text-gray-700 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-gray-700 leading-relaxed text-center lg:text-left">
                Analytical, innovative, and motivated data scientist with
                experience in data analysis, statistical modeling, and machine
                learning techniques. Proficient in customer data insights,
                predictive analytics, and data-driven decision-making. Adept at
                developing strategies for extracting valuable insights from
                complex datasets and driving data-driven solutions.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-xl p-6 lg:p-8 mb-8 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <HiOutlineBadgeCheck className="w-6 h-6 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900">
                Skills & Expertise
              </h3>
            </div>

            <div className="space-y-6">
              {/* Technical Skills */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Competencies */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.competencies.map((competency, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200"
                    >
                      {competency}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Certifications
                </h4>
                <div className="grid gap-2">
                  {skills.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <HiOutlineBadgeCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div
            className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-xl p-6 lg:p-8 mb-8 transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <HiOutlineBriefcase className="w-6 h-6 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {index < experiences.length - 1 && (
                    <div className="absolute left-4 top-16 w-0.5 h-full bg-gray-200"></div>
                  )}

                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-xl font-bold text-gray-900">
                              {exp.company}
                            </h4>
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noreferrer"
                              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                            >
                              <FaExternalLinkAlt className="w-4 h-4" />
                            </a>
                          </div>
                          <p className="text-lg font-semibold text-gray-700">
                            {exp.position}
                          </p>
                          <p className="text-sm text-gray-600">
                            {exp.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-600">
                            {exp.duration}
                          </p>
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded mt-1">
                            {exp.role}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                          Skills:{" "}
                        </span>
                        <span className="text-sm text-gray-700">
                          {exp.skills}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div
            className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-xl p-6 lg:p-8 transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <HiOutlineAcademicCap className="w-6 h-6 text-gray-700" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-gray-700">{edu.institution}</p>
                      <p className="text-sm text-gray-600">{edu.location}</p>
                    </div>
                    <span
                      className={`inline-block px-3 py-1 text-sm font-medium rounded-lg mt-2 lg:mt-0 ${
                        edu.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          body {
            background: white !important;
          }

          .bg-gradient-to-br {
            background: white !important;
          }

          .shadow-xl {
            box-shadow: none !important;
          }

          .border {
            border: 1px solid #e5e7eb !important;
          }

          button {
            display: none !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .flex-wrap {
            gap: 0.5rem;
          }

          .text-4xl {
            font-size: 2rem;
          }

          .text-2xl {
            font-size: 1.5rem;
          }

          .p-6 {
            padding: 1rem;
          }

          .lg\\:p-8 {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Resume;
