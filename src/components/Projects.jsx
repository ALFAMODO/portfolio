import React, { useState } from 'react';
import Link from 'next/link';
import { HiOutlineCode, HiOutlineEye, HiOutlineExternalLink, HiOutlineFilter, HiOutlineCheckCircle, HiOutlineClock } from 'react-icons/hi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
  ];

  const statusConfig = {
    completed: {
      label: 'Completed',
      icon: HiOutlineCheckCircle,
      badgeClass: 'text-green-700 bg-green-100',
    },
    'in-progress': {
      label: 'In Progress',
      icon: HiOutlineClock,
      badgeClass: 'text-yellow-700 bg-yellow-100',
    },
  };

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-white w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full">
            <HiOutlineCode className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">What I&apos;ve Built</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A selection of my projects in AI, mobile, and data-driven development.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 text-sm rounded-lg font-medium border ${
                activeFilter === category.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const StatusIcon = statusConfig[project.status]?.icon || HiOutlineClock;
            const badgeClass = statusConfig[project.status]?.badgeClass || 'bg-gray-100';

            return (
              <div
                key={project.id}
                className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${badgeClass}`}
                  >
                    <StatusIcon className="w-4 h-4" />
                    {statusConfig[project.status]?.label || 'Planned'}
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.projectUrl && (
                    <Link href={project.projectUrl}>
                      <p className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <HiOutlineEye className="w-4 h-4" />
                        View
                      </p>
                    </Link>
                  )}
                  {project.hasWebsite && project.websiteUrl && (
                    <Link
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <HiOutlineExternalLink className="w-4 h-4" />
                      Website
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
