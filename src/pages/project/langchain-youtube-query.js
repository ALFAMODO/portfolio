import Image from 'next/image';
import React from 'react';
import Img from '../../../public/assets/Education.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const YoutubeQuery = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={Img}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='text-2xl font-prata py-2'>Workout Plan Generator using Youtube Videos</h2>
                    <h3>Python / Streamlit / Langchain</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className="text-2xl font-prata mb-5">Project Overview</p>
                    <p>This project is designed to create personalized workout plans by leveraging YouTube videos and OpenAI technology. It allows users to enter a YouTube video URL, and the project uses a LangChain agent to interact with OpenAI to analyze the video content. By understanding the exercise routines demonstrated in the video, including key details such as exercise types, sets, and repetitions, the project can automatically generate customized workout plans.</p>

                    <p>With this technology, users can easily convert workout videos into tailored fitness plans, reducing the need to manually take notes or remember complex routines. This project brings together the power of automated video analysis and OpenAI advanced language models to provide a user-friendly solution for fitness enthusiasts. It demonstrates the potential for technology to streamline workout planning, making personalized fitness more accessible to a broader audience.</p>
                    <Link href="https://github.com/ALFAMODO/Sentiment-Analysis-using-Roberta-Model"><button
                        className="flex items-center gap-2 h-10 px-6 font-semibold rounded-md bg-black text-white mt-5 hover:bg-white hover:text-black outline"
                    >
                        <span className="text-xs">
                            Source
                        </span>
                    </button></Link>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Python
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Streamlit
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Langchain
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Faiss Vector DB
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Whisper
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> OpenAI
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
};

export default YoutubeQuery;