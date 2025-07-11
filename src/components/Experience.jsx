import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BiArrowToRight } from 'react-icons/bi';
import CapgeminiImage from '../../public/assets/Capgemini.png';
import OptiontoolsImage from '../../public/assets/Optiontools.png';
import ZSAnalyticsImage from '../../public/assets/ZSAnalytics.png';
// Add this import for Afamodo - replace with your actual image path
// import AfamodoImage from '../../public/assets/Afamodo.png';

const Experience = () => {
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

  const experiences = [
    {
      id: 'afamodo',
      company: 'Afamodo Lifestyle',
      position: 'Founder & CEO',
      type: 'Entrepreneurship',
      duration: '2023 - Present',
      image: ZSAnalyticsImage, // Replace with AfamodoImage when available
      gradient: 'from-purple-500/20 to-pink-500/20',
      description: 'Building innovative lifestyle solutions and leading product development initiatives.',
      highlights: ['Product Strategy', 'Team Leadership', 'Market Research', 'Business Development']
    },
    {
      id: 'zs',
      company: 'ZS Analytics',
      position: 'Gen AI Engineer',
      type: 'Internship',
      duration: '2024 - 2024',
      image: ZSAnalyticsImage,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      description: 'Developed and implemented generative AI solutions for advanced analytics.',
      highlights: ['Generative AI', 'Machine Learning', 'Data Analysis', 'Model Development']
    },
    {
      id: 'optiontools',
      company: 'Optiontools',
      position: 'Data Scientist',
      type: 'Full-Time',
      duration: '2022 - 2023',
      image: OptiontoolsImage,
      gradient: 'from-green-500/20 to-teal-500/20',
      description: 'Led data science initiatives and developed predictive models for financial markets.',
      highlights: ['Predictive Modeling', 'Statistical Analysis', 'Data Visualization', 'Financial Analytics']
    },
    {
      id: 'capgemini',
      company: 'Capgemini',
      position: 'Software Developer',
      type: 'Full-Time',
      duration: '2020 - 2022',
      image: CapgeminiImage,
      gradient: 'from-orange-500/20 to-red-500/20',
      description: 'Developed enterprise software solutions and maintained large-scale applications.',
      highlights: ['Full-Stack Development', 'Enterprise Solutions', 'Agile Methodology', 'Code Optimization']
    }
  ];

  return (
    <section id='experience' className='relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div ref={sectionRef} className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20'>
        
        {/* Header Section */}
        <div className={`text-center mb-12 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg mb-6">
            <HiOutlineBriefcase className="text-gray-700 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 tracking-wider uppercase">
              Professional Journey
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            What I&apos;ve{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Done
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 to-gray-600"></div>
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey through innovation, leadership, and technical excellence across diverse industries
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 h-full rounded-full"></div>

          {/* Experience Cards */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(exp.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Timeline Dot - Hidden on mobile */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-6 h-6 bg-white border-4 border-gray-900 rounded-full shadow-lg z-10"></div>

                {/* Experience Card */}
                <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="group relative">
                      {/* Card Background with Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-110`}></div>
                      
                      {/* Main Card */}
                      <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl lg:rounded-3xl shadow-xl group-hover:shadow-2xl p-6 lg:p-8 transform group-hover:-translate-y-2 transition-all duration-500">
                        
                        {/* Card Header */}
                        <div className={`flex items-center gap-4 lg:gap-6 mb-6 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gray-200 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="relative bg-white p-3 lg:p-4 rounded-2xl shadow-lg border border-gray-100 transform group-hover:scale-110 transition-transform duration-300 w-16 h-16 lg:w-20 lg:h-20">
                              <Image 
                                src={exp.image} 
                                alt={`${exp.company} logo`}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-1">
                              {exp.company}
                            </h3>
                            <p className="text-lg font-semibold text-gray-700 mb-2">{exp.position}</p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
                              <div className="flex items-center gap-1">
                                <HiOutlineOfficeBuilding className="w-4 h-4" />
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  exp.type === 'Entrepreneurship' ? 'bg-purple-100 text-purple-700' :
                                  exp.type === 'Full-Time' ? 'bg-green-100 text-green-700' : 
                                  'bg-blue-100 text-blue-700'
                                }`}>
                                  {exp.type}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <HiOutlineCalendar className="w-4 h-4" />
                                <span>{exp.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Key Highlights</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Hover Indicator */}
                        <div className={`absolute top-4 ${index % 2 === 0 ? 'lg:left-4' : 'lg:right-4'} right-4 lg:right-auto w-3 h-3 rounded-full transition-all duration-300 ${
                          hoveredCard === exp.id ? 'bg-gray-900 scale-100' : 'bg-gray-300 scale-75'
                        }`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for timeline layout */}
                  <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className={`mt-12 lg:mt-16 text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">4+</div>
                <div className="text-sm lg:text-base text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">4</div>
                <div className="text-sm lg:text-base text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">3</div>
                <div className="text-sm lg:text-base text-gray-600">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">1</div>
                <div className="text-sm lg:text-base text-gray-600">Company Founded</div>
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

export default Experience;