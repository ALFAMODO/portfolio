import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { GiGraduateCap } from "react-icons/gi";
import { HiOutlineAcademicCap, HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineStar } from 'react-icons/hi';
import { BiArrowToRight } from 'react-icons/bi';
import EducationImage from '../../public/assets/Education.jpg';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = {
    degree: "Masters in Artificial Intelligence",
    institution: "Manhattan University",
    location: "Manhattan, New York",
    duration: "2023 - 2024",
    gpa: "3.8/4.0",
    status: "Completed",
    
    coursework: [
      "Deep Learning & Neural Networks",
      "Machine Learning Algorithms",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "AI Ethics & Responsible AI",
      "Statistical Learning Theory",
      "Advanced Data Structures"
    ],
    
    achievements: [
      { title: "Dean's List", description: "Academic Excellence Recognition", year: "2024" },
      { title: "AI Research Paper", description: "Published in IEEE Conference", year: "2024" },
      { title: "Graduate Teaching Assistant", description: "Machine Learning Course", year: "2023-2024" },
      { title: "Academic Scholarship", description: "Merit-based Financial Aid", year: "2023" }
    ],
    
    projects: [
      {
        title: "Multi-Modal RAG System",
        description: "Developed advanced retrieval-augmented generation system combining text and image understanding",
        technologies: ["Python", "Transformers", "Vector Databases", "LangChain"]
      },
      {
        title: "Computer Vision Pipeline",
        description: "Built end-to-end object detection and classification system for autonomous vehicles",
        technologies: ["PyTorch", "OpenCV", "YOLO", "AWS"]
      },
      {
        title: "NLP Sentiment Analyzer",
        description: "Created real-time sentiment analysis tool for social media monitoring",
        technologies: ["BERT", "Flask", "Docker", "MongoDB"]
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <HiOutlineAcademicCap className="w-5 h-5" /> },
    { id: 'coursework', label: 'Coursework', icon: <GiGraduateCap className="w-5 h-5" /> },
    { id: 'achievements', label: 'Achievements', icon: <HiOutlineStar className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <BiArrowToRight className="w-5 h-5" /> }
  ];

  return (
    <section id='education' className='relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div ref={sectionRef} className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
        
        {/* Header Section */}
        <div className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg mb-6">
            <HiOutlineAcademicCap className="text-gray-700 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
              Academic Journey
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            What I&apos;ve{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Studied
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 to-gray-600"></div>
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pursuing advanced knowledge in Artificial Intelligence to drive innovation and solve complex problems
          </p>
        </div>

        {/* Main Education Card */}
        <div className={`mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative group">
            {/* Hero Image Section */}
            <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <Image 
                src={EducationImage} 
                alt="Education Background" 
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <GiGraduateCap className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                    <div className="w-px h-12 lg:h-16 bg-white/50"></div>
                    <div className="text-left">
                      <div className="text-2xl lg:text-4xl font-bold tracking-wide">
                        {educationData.degree}
                      </div>
                      <div className="text-lg lg:text-xl text-gray-200 flex items-center gap-2 mt-2">
                        <HiOutlineLocationMarker className="w-5 h-5" />
                        {educationData.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Overlay */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl p-6 min-w-[300px] lg:min-w-[400px] z-10">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg lg:text-xl font-bold text-gray-900">{educationData.gpa}</div>
                  <div className="text-sm text-gray-600">GPA</div>
                </div>
                <div>
                  <div className="text-lg lg:text-xl font-bold text-gray-900">{educationData.duration.split(' - ')[1]}</div>
                  <div className="text-sm text-gray-600">Granted</div>
                </div>
                <div>
                  <div className="text-lg lg:text-xl font-bold text-gray-900">{educationData.status}</div>
                  <div className="text-sm text-gray-600">Status</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className={`mt-12 lg:mt-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden">
            
            {/* Tab Headers */}
            <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 flex items-center gap-1.5 lg:gap-2 px-4 lg:px-6 py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold transition-all duration-300 min-w-max ${
                    activeTab === index
                      ? 'text-gray-900 bg-gray-50 border-b-2 border-gray-900'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <div className="w-4 h-4 lg:w-5 lg:h-5">
                    {tab.icon}
                  </div>
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="p-4 sm:p-6 lg:p-8">
              {activeTab === 0 && (
                <div className="space-y-4 lg:space-y-6">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Program Overview</h3>
                      <div className="space-y-3 lg:space-y-4">
                        <div className="flex items-center gap-2 lg:gap-3">
                          <HiOutlineAcademicCap className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 flex-shrink-0" />
                          <span className="font-semibold text-sm lg:text-base">Institution:</span>
                          <span className="text-gray-700 text-sm lg:text-base">{educationData.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-3">
                          <HiOutlineCalendar className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 flex-shrink-0" />
                          <span className="font-semibold text-sm lg:text-base">Duration:</span>
                          <span className="text-gray-700 text-sm lg:text-base">{educationData.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 lg:gap-3">
                          <HiOutlineLocationMarker className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 flex-shrink-0" />
                          <span className="font-semibold text-sm lg:text-base">Location:</span>
                          <span className="text-gray-700 text-sm lg:text-base">{educationData.location}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">Focus Areas</h3>
                      <div className="space-y-2">
                        {['Deep Learning', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'].map((area, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm lg:text-base">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Core Coursework</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                    {educationData.coursework.map((course, idx) => (
                      <div key={idx} className="p-3 lg:p-4 bg-gray-50 rounded-lg lg:rounded-xl hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-800 font-medium text-sm lg:text-base">{course}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Academic Achievements</h3>
                  <div className="grid gap-4 lg:gap-6">
                    {educationData.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3 lg:gap-4 p-4 lg:p-6 bg-gray-50 rounded-xl lg:rounded-2xl hover:bg-gray-100 transition-colors duration-200">
                        <div className="p-2 lg:p-3 bg-gray-900 text-white rounded-lg lg:rounded-xl flex-shrink-0">
                          <HiOutlineStar className="w-4 h-4 lg:w-6 lg:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                            <h4 className="text-base lg:text-lg font-semibold text-gray-900">{achievement.title}</h4>
                            <span className="text-xs lg:text-sm text-gray-600 bg-white px-2 lg:px-3 py-1 rounded-md lg:rounded-lg flex-shrink-0 w-fit">{achievement.year}</span>
                          </div>
                          <p className="text-gray-700 text-sm lg:text-base">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">Academic Projects</h3>
                  <div className="grid gap-4 lg:gap-6">
                    {educationData.projects.map((project, idx) => (
                      <div key={idx} className="p-4 lg:p-6 bg-gray-50 rounded-xl lg:rounded-2xl hover:bg-gray-100 transition-colors duration-200">
                        <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">{project.title}</h4>
                        <p className="text-gray-700 text-sm lg:text-base mb-3 lg:mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5 lg:gap-2">
                          {project.technologies.map((tech, techIdx) => (
                            <span key={techIdx} className="px-2 lg:px-3 py-1 bg-white text-gray-700 text-xs lg:text-sm font-medium rounded-md lg:rounded-lg border border-gray-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Mobile touch improvements */
        @media (max-width: 768px) {
          .group:hover {
            transform: none;
          }
          
          .group:active {
            transform: scale(0.98);
          }
          
          /* Better touch targets */
          button {
            min-height: 44px;
          }
          
          /* Smooth scrolling for tabs */
          .scrollbar-hide {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Prevent text selection on mobile buttons */
          button {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          /* Improve tap highlight */
          button, a {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
          }
        }

        /* Enhanced mobile responsiveness */
        @media (max-width: 480px) {
          .min-w-max {
            min-width: 100px;
          }
        }

        /* Smooth transitions for better UX */
        .transform {
          will-change: transform;
        }
        
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Education;