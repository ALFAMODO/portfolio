import Image from 'next/image';
import React from 'react';
import CapgeminiImage from '../../public/assets/Capgemini.png';
import OptiontoolsImage from '../../public/assets/Optiontools.png';
import ZSAnalyticsImage from '../../public/assets/ZSAnalytics.png';

const Experience = () => {
    return (
        <div id='experience' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] p-6 md:p-0 mx-auto justify-center pt-10 md:pt-28'>
                <p className='text-xl tracking-widest uppercase text-teal-700 font-bold font-prata'>
                    Experience
                </p>
                <h2 className='py-2 md:py-4 text-lg md:text-2xl lg:text-4xl font-prata'>What I&apos;ve Done</h2>
            </div>
            <div className="relative">
                <div className="education-cards-container">
                    <div className="card">
                        <div className="image-container">
                            <Image src={ZSAnalyticsImage} alt="ZS Analytics logo" layout="fill" objectFit="contain" />
                        </div>
                        <div className="card-details">
                            <h3 className='font-robert'>ZSAnalytics</h3>
                            <p>Gen AI Engineer</p>
                            <p className="italic font-sm">Internship</p>
                            <p>2024 - 2024</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container">
                            <Image src={OptiontoolsImage} alt="Optiontools logo" layout="fill" objectFit="contain" />
                        </div>
                        <div className="card-details">
                            <h3 className='font-robert'>Optiontools</h3>
                            <p>Data Scientist</p>
                            <p className="italic font-sm">Full-Time</p>
                            <p>2022 - 2023</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-container">
                            <Image src={CapgeminiImage} alt="Capgemini logo" layout="fill" objectFit="contain" />
                        </div>
                        <div className="card-details">
                            <h3 className='font-robert'>Capgemini</h3>
                            <p>Software Developer</p>
                            <p className="italic font-sm">Full-Time</p>
                            <p>2020 - 2022</p>
                        </div>
                    </div>

                    <style jsx>{`
                        .education-cards-container {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-evenly;
                            flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
                            padding: 20px; /* Reduced padding for mobile */
                            background-color: #f5f5f5;
                        }

                        .card {
                            background-color: white;
                            border-radius: 12px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            padding: 20px;
                            width: 280px; /* Set a fixed width for cards */
                            height: auto; /* Allow height to adjust based on content */
                            margin: 10px;
                            transition: transform 0.3s ease-in-out;
                        }

                        @media (max-width: 640px) {
                            .card {
                                width: 90%; /* Make cards wider on small screens */
                                margin: 10px auto; /* Center cards */
                            }
                        }

                        .card:hover {
                            transform: translateY(-10px); /* Optional: Adds a slight lift effect on hover */
                        }

                        .image-container {
                            position: relative;
                            width: 100%;
                            height: 150px; /* Reduced height for mobile */
                            overflow: hidden; /* Ensures the image doesn't exceed the container */
                        }

                        .image-container:hover img {
                            transform: scale(1.2); /* Make the image 20% bigger on hover */
                        }

                        .image-container img {
                            transition: transform 0.3s ease-in-out;
                            object-fit: contain;
                        }

                        .card-details {
                            text-align: center;
                            padding-top: 10px;
                        }

                        h3 {
                            font-size: 1.5rem;
                            color: #000;
                            margin-bottom: 0.5rem;
                        }

                        p {
                            color: #555;
                            margin: 0.2rem 0;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    );
};

export default Experience;
