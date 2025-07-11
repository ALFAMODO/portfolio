import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineStar } from 'react-icons/hi';
import Html from '../../public/assets/skills/html.png';
import Css from '../../public/assets/skills/css.png';
import Javascript from '../../public/assets/skills/javascript.png';
import ReactImg from '../../public/assets/skills/react.png';
import Tailwind from '../../public/assets/skills/tailwind.png';
import Github from '../../public/assets/skills/github1.png';
import Firebase from '../../public/assets/skills/firebase.png';
import NextJS from '../../public/assets/skills/nextjs.png';
import AWS from '../../public/assets/skills/aws.png';
import DataScience from '../../public/assets/skills/DataScience.png';
import MachineLearning from '../../public/assets/skills/MachineLearning.png';
import AI from '../../public/assets/skills/AI.jpg';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
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

  const skillsData = [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      image: AI,
      gradient: 'from-blue-500/20 to-purple-500/20',
      skills: [
        { name: 'Inferencing Models', featured: false },
        { name: 'Fine tuning LLMs and VLMs', featured: true },
        { name: 'Multi-Modal RAG', featured: false },
        { name: 'Tokenization Embeddings', featured: false },
        { name: 'Transformers', featured: false }
      ]
    },
    {
      id: 'datascience',
      title: 'Data Science',
      image: DataScience,
      gradient: 'from-green-500/20 to-teal-500/20',
      skills: [
        { name: 'Exploratory Data Analysis', featured: false },
        { name: 'Data Cleaning and Visualization', featured: false },
        { name: 'Hypothesis A/B Testing', featured: true },
        { name: 'Dimensionality Reduction', featured: false },
        { name: 'Cross Validation', featured: false },
        { name: 'Statistics', featured: false },
        { name: 'Tableau', featured: false }
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      image: MachineLearning,
      gradient: 'from-orange-500/20 to-red-500/20',
      skills: [
        { name: 'Supervised/Unsupervised', featured: false },
        { name: 'Hyperparameter Tuning', featured: false },
        { name: 'Optimization Algorithms', featured: false },
        { name: 'Natural Language Processing', featured: true },
        { name: 'Computer Vision', featured: false },
        { name: 'Neural Networks (CNN, GAN)', featured: false }
      ]
    },
    {
      id: 'development',
      title: 'Software Development',
      image: ReactImg,
      gradient: 'from-indigo-500/20 to-cyan-500/20',
      skills: [
        { name: 'Python / Next.js', featured: true },
        { name: 'Data Structures', featured: false },
        { name: 'AWS Deployment', featured: false },
        { name: 'Agile Development', featured: false },
        { name: 'GitHub Version Control', featured: false },
        { name: 'Web Development (MERN Stack)', featured: false },
        { name: 'App Development (iOS/Android)', featured: false },
        { name: 'Codebase Documentation', featured: false }
      ]
    }
  ];

  return (
    <section id='skills' className='relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div ref={sectionRef} className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
        
        {/* Header Section */}
        <div className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg mb-6">
            <HiOutlineStar className="text-yellow-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
              Skills & Expertise
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            What I{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Can Do
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 to-gray-600"></div>
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leveraging cutting-edge technologies and methodologies to deliver exceptional results across multiple domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
          {skillsData.map((skillCategory, index) => (
            <div
              key={skillCategory.id}
              className={`group relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(skillCategory.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skillCategory.gradient} rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-110`}></div>
              
              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl lg:rounded-3xl shadow-xl group-hover:shadow-2xl p-6 lg:p-8 transform group-hover:-translate-y-2 transition-all duration-500">
                
                {/* Card Header */}
                <div className="flex items-center gap-4 lg:gap-6 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gray-200 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative bg-white p-3 lg:p-4 rounded-2xl shadow-lg border border-gray-100 transform group-hover:scale-110 transition-transform duration-300">
                      <Image 
                        src={skillCategory.image} 
                        width={60} 
                        height={60} 
                        alt={skillCategory.title}
                        className="w-12 h-12 lg:w-15 lg:h-15 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                      {skillCategory.title}
                    </h3>
                    <div className="w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-600 group-hover:w-full transition-all duration-500 mt-2"></div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                        skill.featured 
                          ? 'bg-gray-900 text-white shadow-lg transform hover:scale-105' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        skill.featured ? 'bg-white animate-pulse' : 'bg-gray-400'
                      }`}></div>
                      
                      <span className={`text-sm lg:text-base font-medium ${
                        skill.featured ? 'font-semibold' : ''
                      }`}>
                        {skill.name}
                      </span>
                      
                      {skill.featured && (
                        <HiOutlineStar className="w-4 h-4 text-yellow-400 ml-auto animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Card Footer - Skill Count */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {skillCategory.skills.length} Skills
                    </span>
                    <div className="flex items-center gap-1">
                      {skillCategory.skills.filter(skill => skill.featured).map((_, i) => (
                        <HiOutlineStar key={i} className="w-4 h-4 text-yellow-500" />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">Featured</span>
                    </div>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
                  hoveredCard === skillCategory.id ? 'bg-gray-900 scale-100' : 'bg-gray-300 scale-75'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className={`mt-12 lg:mt-16 text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-sm lg:text-base text-gray-600">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">4</div>
                <div className="text-sm lg:text-base text-gray-600">Core Domains</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">4+</div>
                <div className="text-sm lg:text-base text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">∞</div>
                <div className="text-sm lg:text-base text-gray-600">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Mobile touch improvements */
        @media (max-width: 768px) {
          .group:hover {
            transform: none;
          }
          
          .group:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;