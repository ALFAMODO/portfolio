import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineCode, HiOutlineChartBar, HiOutlineLightBulb } from 'react-icons/hi';
import { BiArrowToRight } from 'react-icons/bi';
import AboutImg from '../../public/assets/About.png';

const About = () => {
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

  const skills = [
    {
      icon: <HiOutlineCode className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Large Language Models, Deep Learning, Neural Networks"
    },
    {
      icon: <HiOutlineChartBar className="w-8 h-8" />,
      title: "Data Science",
      description: "Statistical Modeling, Predictive Analytics, Data Visualization"
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Creative Problem Solving, Research, Continuous Learning"
    }
  ];

  const expertise = [
    { name: "Python & R Programming", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Data Visualization", level: 88 },
    { name: "Statistical Analysis", level: 92 },
    { name: "AI Model Development", level: 87 }
  ];

  const tabs = [
    {
      title: "Background",
      content: "I specialize in AI Large Language Models and Data Science algorithms, focusing on extracting actionable insights from complex datasets and developing data-driven solutions. I have a strong passion for continuous learning and believe in the versatility of Artificial Intelligence, recognizing that there are multiple approaches to solving language models."
    },
    {
      title: "Experience",
      content: "With a career spanning several years, I've had the privilege of working on diverse projects that have honed my analytical skills and expanded my horizons. My experience extends from exploratory data analysis and hypothesis testing to predictive modeling and data visualization."
    },
    {
      title: "Philosophy",
      content: "I firmly believe that being a proficient data scientist involves selecting the most suitable tools and techniques for each unique analytical problem. I'm adaptable and quick to grasp new technologies and methodologies as the situation demands."
    }
  ];

  return (
    <section id='about' className='relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div ref={sectionRef} className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
          
          {/* Content Side */}
          <div className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            {/* Header */}
            <div className="space-y-3 lg:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-gray-900 rounded-full animate-pulse"></div>
                <span className="text-xs lg:text-sm font-semibold text-gray-700 tracking-wider uppercase">
                  About Me
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Who I{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    Am
                  </span>
                  <div className="absolute -bottom-1 lg:-bottom-2 left-0 right-0 h-0.5 lg:h-1 bg-gradient-to-r from-gray-900 to-gray-600"></div>
                </span>
              </h2>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group p-4 lg:p-6 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-2 lg:space-y-3">
                    <div className="p-2 lg:p-3 bg-gray-100 rounded-lg lg:rounded-xl group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                      <div className="w-6 h-6 lg:w-8 lg:h-8">
                        {skill.icon}
                      </div>
                    </div>
                    <h3 className="text-sm lg:text-base font-semibold text-gray-900">{skill.title}</h3>
                    <p className="text-xs lg:text-sm text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tabbed Content */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl lg:rounded-2xl shadow-xl overflow-hidden">
              {/* Tab Headers */}
              <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-shrink-0 px-4 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm font-semibold transition-all duration-300 min-w-max ${
                      activeTab === index
                        ? 'text-gray-900 bg-gray-50 border-b-2 border-gray-900'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="p-4 lg:p-6">
                <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                  {tabs[activeTab].content}
                </p>
              </div>
            </div>

            {/* Expertise Bars */}
            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Technical Expertise</h3>
              <div className="space-y-3 lg:space-y-4">
                {expertise.map((skill, index) => (
                  <div key={index} className="space-y-1.5 lg:space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs lg:text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs lg:text-sm font-medium text-gray-900">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 lg:h-2">
                      <div
                        className="bg-gradient-to-r from-gray-900 to-gray-700 h-1.5 lg:h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${600 + index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href='/#projects' className="inline-block w-full sm:w-auto">
              <button className="group flex items-center justify-center gap-2 lg:gap-3 w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm lg:text-base font-semibold rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Explore My Projects</span>
                <BiArrowToRight className="relative z-10 text-lg lg:text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Button Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </Link>
          </div>

          {/* Image Side */}
          <div className={`relative order-first lg:order-last mb-8 lg:mb-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group">
              {/* Background Decorations */}
              <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white/90 backdrop-blur-sm p-4 lg:p-8 rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-200 transform group-hover:scale-105 transition-transform duration-500">
                <div className="relative overflow-hidden rounded-xl lg:rounded-2xl">
                  <Image 
                    src={AboutImg} 
                    className='w-full h-auto rounded-xl lg:rounded-2xl transform group-hover:scale-110 transition-transform duration-700' 
                    alt='About Shikshit Gupta - AI Product Developer'
                    priority
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl lg:rounded-2xl"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-6 h-6 lg:w-8 lg:h-8 bg-gray-900 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-4 h-4 lg:w-6 lg:h-6 bg-gray-700 rounded-full animate-bounce delay-2000"></div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl lg:rounded-2xl shadow-xl p-3 lg:p-6 transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-lg lg:text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;