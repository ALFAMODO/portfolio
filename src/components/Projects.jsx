import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineCode, HiOutlineExternalLink, HiOutlineEye, HiOutlineClock, HiOutlineCheckCircle, HiOutlineFilter } from 'react-icons/hi';
import { BiArrowToRight } from 'react-icons/bi';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
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

  const projectsData = [
    {
      id: 'geofacial-app',
      title: 'Geo-Facial Attendance App',
      description: 'I developed an automated attendance management app using geolocation and facial recognition technologies to streamline student attendance tracking. Built with React Native, PyTorch, and Firebase, the app enhances efficiency and accuracy by automating the process for both students and faculty.',
      focus: 'iOS/Android App Development',
      technologies: ['React Native', 'PyTorch', 'Firebase', 'Facial Recognition'],
      status: 'completed',
      projectUrl: '/project/geofacial-app',
      websiteUrl: '',
      hasWebsite: false,
      category: 'mobile',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'fitness-app',
      title: 'Fitness Tracking App',
      description: 'I created a comprehensive fitness tracking app that monitors workouts, diet, and body metrics while offering real-time analytics and personalized insights. The app also includes a SaaS platform for fitness trainers and an AI-powered chatbot for tailored fitness recommendations.',
      focus: 'Data Analytics and iOS App',
      technologies: ['React Native', 'Node.js', 'AI/ML', 'Analytics'],
      status: 'completed',
      projectUrl: '/project/fitnessapp',
      websiteUrl: '',
      hasWebsite: false,
      category: 'mobile',
      gradient: 'from-green-500/20 to-teal-500/20'
    },
    {
      id: 'ecommerce',
      title: 'Clothing Ecommerce Brand',
      description: 'I have engineered a user-friendly interface that enhances customer experience, complemented by a robust backend system ensuring smooth transactional flow. My focus has been on integrating detailed product descriptions, expert reviews, and personalized recommendations.',
      focus: 'Software Development',
      technologies: ['React', 'Node.js', 'E-commerce', 'Payment Integration'],
      status: 'completed',
      projectUrl: '/project/ecommerce',
      websiteUrl: 'https://www.alfamodo.com/',
      hasWebsite: true,
      category: 'web',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 'olympics-analysis',
      title: 'Olympics Analysis',
      description: 'This application meticulously gathers and processes extensive datasets from various Olympic events, offering insightful and interactive visual representations of athletes\' performances, medal tallies, and historical trends.',
      focus: 'Data Visualization',
      technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
      status: 'completed',
      projectUrl: '/project/olympics-analysis',
      websiteUrl: 'https://olympics-analysis-project.streamlit.app',
      hasWebsite: true,
      category: 'data-science',
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      id: 'ai-workout-tool',
      title: 'AI Workout Plan Generator',
      description: 'Introducing the AI-Powered Workout Plan Generator— fitness app built with OpenAI\'s advanced technology. This app simplifies fitness planning by creating personalized workout routines tailored to your goals and fitness level.',
      focus: 'Artificial Intelligence',
      technologies: ['OpenAI', 'React', 'Python', 'AI/ML'],
      status: 'completed',
      projectUrl: '/project/ai-workout-tool',
      websiteUrl: 'https://www.alfamodo.com/fitness/ai-tools/workout',
      hasWebsite: true,
      category: 'ai',
      gradient: 'from-indigo-500/20 to-purple-500/20'
    },
    {
      id: 'fraud-detection',
      title: 'Healthcare Fraud Anomaly Detection',
      description: 'Incorporating state-of-the-art Machine Learning techniques, including Principal Component Analysis (PCA) for dimensionality reduction and the K-Nearest Neighbors (KNN) algorithm, our project revolutionized fraud detection.',
      focus: 'Machine Learning',
      technologies: ['Python', 'PCA', 'KNN', 'Scikit-learn'],
      status: 'completed',
      projectUrl: '/project/fraud-detection',
      websiteUrl: 'https://github.com/ALFAMODO/Fraud-Detection',
      hasWebsite: true,
      category: 'machine-learning',
      gradient: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      id: 'sentiment-analysis',
      title: 'Sentiment Analysis',
      description: 'Explored the emotional tones behind various text sources using advanced natural language processing (NLP) techniques. Leveraging VADER for quick, rule-based analysis and RoBERTa for deeper, context-aware insights.',
      focus: 'NLP',
      technologies: ['Python', 'VADER', 'RoBERTa', 'NLP'],
      status: 'completed',
      projectUrl: '/project/sentiment-analysis',
      websiteUrl: 'https://github.com/ALFAMODO/Sentiment-Analysis-using-Roberta-Model',
      hasWebsite: true,
      category: 'ai',
      gradient: 'from-teal-500/20 to-blue-500/20'
    },
    {
      id: 'langchain-youtube',
      title: 'Langchain Youtube Video QNA',
      description: 'Automated YouTube video transcription and analysis. By providing a YouTube video URL, this project can automatically download and transcribe the content, enabling quick access to the video\'s text.',
      focus: 'Artificial Intelligence',
      technologies: ['Langchain', 'Python', 'YouTube API', 'NLP'],
      status: 'completed',
      projectUrl: '/project/langchain-youtube-query',
      websiteUrl: 'https://github.com/ALFAMODO/Workout-Generator-youtube-video',
      hasWebsite: true,
      category: 'ai',
      gradient: 'from-pink-500/20 to-red-500/20'
    },
    {
      id: 'customer-support-bot',
      title: 'Chatbot for Customer Support',
      description: 'Advanced AI-powered customer support chatbot with natural language understanding and multi-platform integration capabilities.',
      focus: 'Deep Learning',
      technologies: ['Python', 'Transformers', 'FastAPI', 'Docker'],
      status: 'in-progress',
      projectUrl: '',
      websiteUrl: '',
      hasWebsite: false,
      category: 'ai',
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 'fitness-dashboard',
      title: 'Fitness Tracker Dashboard',
      description: 'Comprehensive analytics dashboard for fitness tracking with real-time data visualization and performance metrics.',
      focus: 'Data Analytics',
      technologies: ['React', 'D3.js', 'Python', 'MongoDB'],
      status: 'planning',
      projectUrl: '',
      websiteUrl: '',
      hasWebsite: false,
      category: 'data-science',
      gradient: 'from-emerald-500/20 to-green-500/20'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'ai', name: 'AI & ML', icon: '🤖' },
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
    { id: 'data-science', name: 'Data Science', icon: '📊' },
    { id: 'machine-learning', name: 'Machine Learning', icon: '🔬' }
  ];

  const statusConfig = {
    completed: { 
      label: 'Completed', 
      icon: HiOutlineCheckCircle, 
      color: 'text-green-600 bg-green-100',
      dotColor: 'bg-green-500'
    },
    'in-progress': { 
      label: 'In Progress', 
      icon: HiOutlineClock, 
      color: 'text-orange-600 bg-orange-100',
      dotColor: 'bg-orange-500'
    },
    planning: { 
      label: 'Planning', 
      icon: HiOutlineClock, 
      color: 'text-blue-600 bg-blue-100',
      dotColor: 'bg-blue-500'
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const completedProjects = projectsData.filter(p => p.status === 'completed');
  const upcomingProjects = projectsData.filter(p => p.status !== 'completed');

  return (
    <section id='projects' className='relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div ref={sectionRef} className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20'>
        
        {/* Header Section */}
        <div className={`text-center mb-8 lg:mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg mb-4 lg:mb-6">
            <HiOutlineCode className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700 animate-pulse" />
            <span className="text-xs lg:text-sm font-semibold text-gray-700 tracking-wider uppercase">
              Portfolio Showcase
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-3 lg:mb-4 px-4">
            What I&apos;ve{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Built
              </span>
              <div className="absolute -bottom-1 lg:-bottom-2 left-0 right-0 h-0.5 lg:h-1 bg-gradient-to-r from-gray-900 to-gray-600"></div>
            </span>
          </h2>
          
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 mb-6">
            A showcase of innovative projects spanning AI, web development, mobile apps, and data science
          </p>

          {/* Project Stats */}
          <div className="flex justify-center gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">{completedProjects.length}</div>
              <div className="text-xs lg:text-sm text-gray-600">Completed</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">{upcomingProjects.length}</div>
              <div className="text-xs lg:text-sm text-gray-600">In Progress</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-gray-900">{categories.length - 1}</div>
              <div className="text-xs lg:text-sm text-gray-600">Categories</div>
            </div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className={`mb-8 lg:mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <HiOutlineFilter className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-semibold text-gray-700">Filter by Category</span>
          </div>
          
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 transform hover:-translate-y-0.5 ${
                  activeFilter === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white/80 text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="text-base lg:text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const StatusIcon = statusConfig[project.status].icon;
            
            return (
              <div
                key={project.id}
                className={`group relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Background with Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl lg:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-110`}></div>
                
                {/* Main Project Card */}
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl lg:rounded-3xl shadow-xl group-hover:shadow-2xl p-4 lg:p-6 transform group-hover:-translate-y-2 transition-all duration-500 h-full">
                  
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <StatusIcon className={`w-4 h-4 lg:w-5 lg:h-5 ${statusConfig[project.status].color.split(' ')[0]}`} />
                        <span className={`px-2 py-1 text-xs font-medium rounded-lg ${statusConfig[project.status].color}`}>
                          {statusConfig[project.status].label}
                        </span>
                      </div>
                      
                      <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-2 leading-tight">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-2 h-2 rounded-full ${statusConfig[project.status].dotColor}`}></div>
                        <span className="text-sm font-medium text-gray-600">{project.focus}</span>
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-2">
                      {project.projectUrl && (
                        <Link href={project.projectUrl}>
                          <button className="p-2 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-300">
                            <HiOutlineEye className="w-4 h-4 lg:w-5 lg:h-5" />
                          </button>
                        </Link>
                      )}
                      {project.hasWebsite && project.websiteUrl && (
                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                          <button className="p-2 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-300">
                            <HiOutlineExternalLink className="w-4 h-4 lg:w-5 lg:h-5" />
                          </button>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 lg:px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs lg:text-sm font-medium rounded-lg transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${statusConfig[project.status].dotColor} animate-pulse`}></div>
                      <span className="text-xs lg:text-sm text-gray-500">
                        {project.status === 'completed' ? 'Live Project' : 'In Development'}
                      </span>
                    </div>
                    
                    {(project.projectUrl || project.hasWebsite) && (
                      <div className="flex items-center gap-1 text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        <span className="text-xs lg:text-sm font-medium">View Project</span>
                        <BiArrowToRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    )}
                  </div>

                  {/* Hover Indicator */}
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
                    hoveredProject === project.id ? 'bg-gray-900 scale-100' : 'bg-gray-300 scale-75'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        /* Line clamp for descriptions */
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

        /* Enhanced transitions */
        .transform {
          will-change: transform;
        }
        
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Projects;