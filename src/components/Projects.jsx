import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='p-6 md:p-2 w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <div className='max-w-[1240px] mx-auto justify-center pt-10 md:pt-28'>
        <p className='text-xl tracking-widest uppercase text-teal-700 font-bold font-prata'>
          Projects
        </p>
        <h2 className='py-4 text-lg md:text-2xl lg:text-4xl font-prata'>What I&apos;ve Built</h2>
    </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Geo-Facial Attendance App'
            projectUrl='/project/geofacial-app'
            description = 'I developed an automated attendance management app using geolocation and facial recognition technologies to streamline student attendance tracking. Built with React Native, PyTorch, and Firebase, the app enhances efficiency and accuracy by automating the process for both students and faculty.'
            websiteUrl=''
            focus='iOS/Android App Development'
            website='false'
            status="completed"
          />
          <ProjectItem
            title='Fitness Tracking App'
            projectUrl='/project/fitnessapp'
            description = 'I created a comprehensive fitness tracking app that monitors workouts, diet, and body metrics while offering real-time analytics and personalized insights. The app also includes a SaaS platform for fitness trainers and an AI-powered chatbot for tailored fitness recommendations.'
            websiteUrl=''
            focus='Data Analytics and iOS App'
            website='false'
            status="completed"
          />
          <ProjectItem
            title='Clothing Ecommerce Brand'
            projectUrl='/project/ecommerce'
            description = 'I have engineered a user-friendly interface that enhances customer experience, complemented by a robust backend system ensuring smooth transactional flow. My focus has been on integrating detailed product descriptions, expert reviews, and personalized recommendations, fostering an informative shopping environment. This project not only showcases my technical prowess in e-commerce solutions but also reflects my commitment to promoting a healthier, more active lifestyle.'
            websiteUrl='https://www.alfamodo.com/'
            focus='Software Development'
            website='true'
            status="completed"
          />
          <ProjectItem
            title='Olympics Analysis'
            projectUrl='/project/olympics-analysis'
            description = "This application stands as a hallmark of my expertise in data science and programming. It meticulously gathers and processes extensive datasets from various Olympic events, offering insightful and interactive visual representations of athletes' performances, medal tallies, and historical trends. My focus has been on creating an intuitive user interface that allows users to easily navigate through a wealth of information, uncovering patterns and stories behind the data. This project not only demonstrates my proficiency in Python and data visualization but also my ability to transform complex datasets into engaging dashboard"
            websiteUrl='https://olympics-analysis-project.streamlit.app'
            focus= 'Data Visualization'
            website='true'
            status="completed"
          />
          <ProjectItem
            title='AI Workout Plan Generator'
            projectUrl='/project/ai-workout-tool'
            description="Introducing the AI-Powered Workout Plan Generator— fitness app built with OpenAI's advanced technology. This app simplifies fitness planning by creating personalized workout routines tailored to your goals and fitness level. Enjoy a user-friendly interface, access to exercise descriptions and tutorials, and the ability to track your progress effortlessly. Whether you're looking to build muscle, lose weight, or improve endurance, this app takes the guesswork out of fitness, making it accessible and efficient for all. Elevate your fitness journey with the power of AI."
            websiteUrl='https://www.alfamodo.com/fitness/ai-tools/workout'
            focus= 'Artificial Intelligence'
            website='true'
            status="completed"
          />
          <ProjectItem
            title='Healthcare Fraud Anomaly Detection'
            projectUrl='/project/fraud-detection'
            description="Incorporating state-of-the-art Machine Learning techniques, including Principal Component Analysis (PCA) for dimensionality reduction and the K-Nearest Neighbors (KNN) algorithm, our project revolutionized fraud detection. By analyzing complex data patterns, our system not only identifies fraudulent transactions but also uncovers valuable insights into exceptional data patterns. These insights have the potential to drive significant business impact, helping organizations mitigate risks and make data-driven decisions."
            websiteUrl='https://github.com/ALFAMODO/Fraud-Detection'
            focus= 'Machine Learning'
            website='true'
            status="completed"
          />
          <ProjectItem
            title='Sentiment Analysis'
            projectUrl='/project/sentiment-analysis'
            description="Explored the emotional tones behind various text sources using advanced natural language processing (NLP) techniques. Leveraging VADER for quick, rule-based analysis and RoBERTa for deeper, context-aware insights, my project provides a comprehensive approach to gauging sentiment. This dual-method approach allows for accurate sentiment detection across different text types, from social media posts to customer reviews. Through this project, I aim to demonstrate the power of NLP in understanding public opinion and customer feedback, showcasing my skills in both rule-based and deep learning-based sentiment analysis. Explore my portfolio to see how sentiment analysis can drive meaningful insights and business impact."
            websiteUrl='https://github.com/ALFAMODO/Sentiment-Analysis-using-Roberta-Model'
            focus= 'NLP'
            website='true'
            status="completed"
          />
           <ProjectItem
            title='Langchain Youtube Video QNA'
            projectUrl='/project/langchain-youtube-query'
            description="Automated YouTube video transcription and analysis. By providing a YouTube video URL, this project can automatically download and transcribe the content, enabling quick access to the video's text. This opens up opportunities for deeper analysis, such as keyword extraction, sentiment analysis, and summarization. With this project, users can easily search through transcribed text and extract insights without manually watching the entire video. The goal is to simplify the process of extracting valuable information from video content, streamlining research and content curation."
            websiteUrl='https://github.com/ALFAMODO/Workout-Generator-youtube-video'
            focus= 'Artificial Intelligence'
            website='true'
            status="completed"
          />
          {
            /**<ProjectItem
            title='Langchain QNA Chatbot'
            projectUrl='/project/langchain-qna-chatbot'
            description="Incorporating state-of-the-art Machine Learning techniques, including Principal Component Analysis (PCA) for dimensionality reduction and the K-Nearest Neighbors (KNN) algorithm, our project revolutionized fraud detection. By analyzing complex data patterns, our system not only identifies fraudulent transactions but also uncovers valuable insights into exceptional data patterns. These insights have the potential to drive significant business impact, helping organizations mitigate risks and make data-driven decisions."
            websiteUrl='https://github.com/ALFAMODO/Fraud-Detection'
            focus= 'Machine Learning'
            completed='true'
            status="completed"
          />
          <ProjectItem
            title='Langchain PDF Query'
            projectUrl='/project/langchain-pdf-query'
            description="Incorporating state-of-the-art Machine Learning techniques, including Principal Component Analysis (PCA) for dimensionality reduction and the K-Nearest Neighbors (KNN) algorithm, our project revolutionized fraud detection. By analyzing complex data patterns, our system not only identifies fraudulent transactions but also uncovers valuable insights into exceptional data patterns. These insights have the potential to drive significant business impact, helping organizations mitigate risks and make data-driven decisions."
            websiteUrl='https://github.com/ALFAMODO/Fraud-Detection'
            focus= 'Machine Learning'
            completed='true'
            status="completed"
          /> */
          }
        </div>
        <div className="mt-20">
        <p className='text-xl tracking-widest uppercase text-teal-700 font-bold font-prata'>
          Upcoming Projects
        </p>
        <div className='grid md:grid-cols-2 gap-8 mt-4 '>
          <ProjectItem
            title='Chatbot for Customer Support'
            projectUrl=''
            //description = "This application stands as a hallmark of my expertise in data science and programming. It meticulously gathers and processes extensive datasets from various Olympic events, offering insightful and interactive visual representations of athletes' performances, medal tallies, and historical trends. My focus has been on creating an intuitive user interface that allows users to easily navigate through a wealth of information, uncovering patterns and stories behind the data. This project not only demonstrates my proficiency in Python and data visualization but also my ability to transform complex datasets into engaging dashboard"
            websiteUrl=''
            focus= 'Deep Learning'
            website='false'
            status="Yet to start"
          />
          <ProjectItem
            title='Fitness Tracker Dashboard'
            projectUrl=''
            //description="Introducing the AI-Powered Workout Plan Generator— fitness app built with OpenAI's advanced technology. This app simplifies fitness planning by creating personalized workout routines tailored to your goals and fitness level. Enjoy a user-friendly interface, access to exercise descriptions and tutorials, and the ability to track your progress effortlessly. Whether you're looking to build muscle, lose weight, or improve endurance, this app takes the guesswork out of fitness, making it accessible and efficient for all. Elevate your fitness journey with the power of AI."
            websiteUrl=''
            focus= 'Data Analytics'
            website='false'
            status="Yet to start"
          />

        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Projects;