import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineBadgeCheck, HiOutlineX, HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import { BiArrowToRight } from 'react-icons/bi';
import ai1 from '../../public/assets/certifications/ai1.png';
import ai2 from '../../public/assets/certifications/ai2.png';
import ai3 from '../../public/assets/certifications/ai3.png';
import ai4 from '../../public/assets/certifications/ai4.png';
import ds1 from '../../public/assets/certifications/ds1.png';
import ds2 from '../../public/assets/certifications/ds2.png';
import ds3 from '../../public/assets/certifications/ds3.png';
import ds4 from '../../public/assets/certifications/ds4.png';
import sd1 from '../../public/assets/certifications/sd4.png';
import sd2 from '../../public/assets/certifications/sd2.png';
import sd3 from '../../public/assets/certifications/sd3.png';
import sd4 from '../../public/assets/certifications/sd1.png';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState({
    ai: false,
    ds: false,
    sd: false,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
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

  const certificationCategories = [
    {
      id: 'ai',
      title: 'Artificial Intelligence & Machine Learning',
      icon: '🤖',
      gradient: 'from-blue-500/20 to-purple-500/20',
      borderColor: 'border-blue-200',
      count: 4,
      certificates: [ai1, ai2, ai3, ai4],
      description: 'Advanced AI and ML certifications from leading tech companies'
    },
    {
      id: 'ds',
      title: 'Data Science & Analytics',
      icon: '📊',
      gradient: 'from-green-500/20 to-teal-500/20',
      borderColor: 'border-green-200',
      count: 4,
      certificates: [ds1, ds2, ds3, ds4],
      description: 'Comprehensive data science and analytics certifications'
    },
    {
      id: 'sd',
      title: 'Software Engineering & Development',
      icon: '💻',
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-200',
      count: 4,
      certificates: [sd1, sd2, sd3, sd4],
      description: 'Professional software development and engineering certifications'
    }
  ];

  const toggleShowMore = (categoryId) => {
    setShowMore((prevState) => ({
      ...prevState,
      [categoryId]: !prevState[categoryId],
    }));
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const totalCertifications = certificationCategories.reduce((sum, category) => sum + category.count, 0);

  return (
    <section id="certifications" className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div ref={sectionRef} className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20'>
        
        {/* Header Section */}
        <div className={`text-center mb-8 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg mb-4 lg:mb-6">
            <HiOutlineBadgeCheck className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700 animate-pulse" />
            <span className="text-xs lg:text-sm font-semibold text-gray-700 tracking-wider uppercase">
              Professional Certifications
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-3 lg:mb-4 px-4">
            What I&apos;ve{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Achieved
              </span>
              <div className="absolute -bottom-1 lg:-bottom-2 left-0 right-0 h-0.5 lg:h-1 bg-gradient-to-r from-gray-900 to-gray-600"></div>
            </span>
          </h2>
          
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 mb-6">
            Professional certifications showcasing expertise across multiple domains of technology
          </p>

          {/* Stats Summary */}
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">{totalCertifications}</div>
              <div className="text-xs lg:text-sm text-gray-600">Total Certifications</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">{certificationCategories.length}</div>
              <div className="text-xs lg:text-sm text-gray-600">Specializations</div>
            </div>
          </div>
        </div>

        {/* Certification Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificationCategories.map((category, index) => (
            <div
              key={category.id}
              className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="group relative">
                {/* Category Background with Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-110`}></div>
                
                {/* Main Category Card */}
                <div className={`relative bg-white/90 backdrop-blur-sm border-2 ${category.borderColor} rounded-2xl lg:rounded-3xl shadow-xl group-hover:shadow-2xl p-4 lg:p-6 transform group-hover:-translate-y-2 transition-all duration-500`}>
                  
                  {/* Category Header */}
                  <div className="text-center mb-4 lg:mb-6">
                    <div className="text-4xl lg:text-5xl mb-3">{category.icon}</div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 mb-3">
                      {category.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                      <HiOutlineBadgeCheck className="w-4 h-4 text-gray-700" />
                      <span className="text-sm font-medium text-gray-700">{category.count} Certificates</span>
                    </div>
                  </div>

                  {/* Certificate Grid */}
                  <div className="space-y-3">
                    <div className={`grid gap-3 transition-all duration-500 ${
                      showMore[category.id] 
                        ? 'grid-cols-2 sm:grid-cols-2' 
                        : 'grid-cols-1'
                    }`}>
                      {category.certificates
                        .slice(0, showMore[category.id] ? category.certificates.length : 1)
                        .map((certificate, certIndex) => (
                          <div
                            key={certIndex}
                            onClick={() => openModal(certificate)}
                            className="group/cert relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg p-3 cursor-pointer transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                          >
                            <div className="relative h-24 lg:h-28 overflow-hidden rounded-lg">
                              <Image 
                                src={certificate} 
                                alt={`${category.title} certificate ${certIndex + 1}`}
                                fill
                                className="object-contain transform group-hover/cert:scale-105 transition-transform duration-300"
                              />
                              
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">
                                  Click to view
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Show More/Less Button */}
                    <button
                      onClick={() => toggleShowMore(category.id)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 group/btn"
                    >
                      <span className="text-sm lg:text-base">
                        {showMore[category.id] ? 'Show Less' : 'View All Certificates'}
                      </span>
                      {showMore[category.id] ? (
                        <HiOutlineChevronUp className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      ) : (
                        <HiOutlineChevronDown className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover/btn:translate-y-0.5 transition-transform duration-300" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className={`mt-12 lg:mt-16 text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Continuous Learning Journey</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These certifications represent my commitment to staying current with the latest technologies and best practices in AI, data science, and software development.
            </p>
            
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-200">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Certificate Details</h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              >
                <HiOutlineX className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-4 lg:p-6">
              <div className="relative h-[50vh] lg:h-[60vh] overflow-hidden rounded-xl">
                <Image 
                  src={selectedImage} 
                  alt="Certificate Detail" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 lg:p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={closeModal}
                className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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
          button, [role="button"] {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
          }
        }

        /* Enhanced transitions */
        .transform {
          will-change: transform;
        }
        
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Modal backdrop blur */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }

        /* Smooth modal animations */
        .fixed {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Certifications;