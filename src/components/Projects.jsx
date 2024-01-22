import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <div className='max-w-[1240px] mx-auto justify-center pt-28'>
        <p className='text-xl tracking-widest uppercase text-teal-700 font-bold font-prata'>
          Projects
        </p>
        <h2 className='py-4 text-lg md:text-2xl lg:text-4xl font-prata'>What I&apos;ve Built</h2>
    </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Ecommerce Marketplace'
            projectUrl='/ecommerce'
            description = 'I have engineered a user-friendly interface that enhances customer experience, complemented by a robust backend system ensuring smooth transactional flow. My focus has been on integrating detailed product descriptions, expert reviews, and personalized recommendations, fostering an informative shopping environment. This project not only showcases my technical prowess in e-commerce solutions but also reflects my commitment to promoting a healthier, more active lifestyle.'
            websiteUrl='https://www.alfamodo.com/'
            focus='Software Development'
            completed='true'
          />
          <ProjectItem
            title='Olympics Analysis'
            projectUrl='/olympics'
            description = "This application stands as a hallmark of my expertise in data science and programming. It meticulously gathers and processes extensive datasets from various Olympic events, offering insightful and interactive visual representations of athletes' performances, medal tallies, and historical trends. My focus has been on creating an intuitive user interface that allows users to easily navigate through a wealth of information, uncovering patterns and stories behind the data. This project not only demonstrates my proficiency in Python and data visualization but also my ability to transform complex datasets into engaging dashboard"
            websiteUrl='https://olympics-analysis-project.streamlit.app'
            focus= 'Data Visualization'
            completed='true'
          />
          <ProjectItem
            title='AI Workout Plan Generator'
            projectUrl='/workout-plan'
            description="Introducing the AI-Powered Workout Plan Generator— fitness app built with OpenAI's advanced technology. This app simplifies fitness planning by creating personalized workout routines tailored to your goals and fitness level. Enjoy a user-friendly interface, access to exercise descriptions and tutorials, and the ability to track your progress effortlessly. Whether you're looking to build muscle, lose weight, or improve endurance, this app takes the guesswork out of fitness, making it accessible and efficient for all. Elevate your fitness journey with the power of AI."
            websiteUrl='https://www.alfamodo.com/fitness/ai-tools/workout'
            focus= 'Artificial Intelligence'
            completed='true'
          />
          <ProjectItem
            title='Healthcare Fraud Anomaly Detection'
            projectUrl='/fraud-detection'
            description="Incorporating state-of-the-art Machine Learning techniques, including Principal Component Analysis (PCA) for dimensionality reduction and the K-Nearest Neighbors (KNN) algorithm, our project revolutionized fraud detection. By analyzing complex data patterns, our system not only identifies fraudulent transactions but also uncovers valuable insights into exceptional data patterns. These insights have the potential to drive significant business impact, helping organizations mitigate risks and make data-driven decisions."
            websiteUrl='https://github.com/ALFAMODO/Fraud-Detection'
            focus= 'Machine Learning'
            completed='true'
          />
        </div>
        <div className="mt-20">
        <p className='text-xl tracking-widest uppercase text-teal-700 font-bold font-prata'>
          Upcoming Projects
        </p>
        <div className='grid md:grid-cols-2 gap-8 mt-4 '>
          <ProjectItem
            title='Ecommerce Recommendation Engine'
            projectUrl=''
            //description = 'I have engineered a user-friendly interface that enhances customer experience, complemented by a robust backend system ensuring smooth transactional flow. My focus has been on integrating detailed product descriptions, expert reviews, and personalized recommendations, fostering an informative shopping environment. This project not only showcases my technical prowess in e-commerce solutions but also reflects my commitment to promoting a healthier, more active lifestyle.'
            websiteUrl=''
            focus='Neural Networks'
            completed='false'
          />
          <ProjectItem
            title='Chatbot for Customer Support'
            projectUrl=''
            //description = "This application stands as a hallmark of my expertise in data science and programming. It meticulously gathers and processes extensive datasets from various Olympic events, offering insightful and interactive visual representations of athletes' performances, medal tallies, and historical trends. My focus has been on creating an intuitive user interface that allows users to easily navigate through a wealth of information, uncovering patterns and stories behind the data. This project not only demonstrates my proficiency in Python and data visualization but also my ability to transform complex datasets into engaging dashboard"
            websiteUrl=''
            focus= 'Deep Learning'
            completed='false'
          />
          <ProjectItem
            title='Fitness Tracker Dashboard'
            projectUrl=''
            //description="Introducing the AI-Powered Workout Plan Generator— fitness app built with OpenAI's advanced technology. This app simplifies fitness planning by creating personalized workout routines tailored to your goals and fitness level. Enjoy a user-friendly interface, access to exercise descriptions and tutorials, and the ability to track your progress effortlessly. Whether you're looking to build muscle, lose weight, or improve endurance, this app takes the guesswork out of fitness, making it accessible and efficient for all. Elevate your fitness journey with the power of AI."
            websiteUrl=''
            focus= 'Data Analytics'
            completed='false'
          />
          <ProjectItem
            title='Sentiment Analysis for Product Reviews'
            projectUrl='/fraud-detection'
            //description="Incorporating state-of-the-art Machine Learning techniques, including Principal Component Analysis (PCA) for dimensionality reduction and the K-Nearest Neighbors (KNN) algorithm, our project revolutionized fraud detection. By analyzing complex data patterns, our system not only identifies fraudulent transactions but also uncovers valuable insights into exceptional data patterns. These insights have the potential to drive significant business impact, helping organizations mitigate risks and make data-driven decisions."
            websiteUrl='https://github.com/ALFAMODO/Fraud-Detection'
            focus= 'Natural Language Processing'
            completed = 'false'
          />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Projects;