import Image from 'next/image';
import React from 'react';
import Img from '../../../public/assets/Education.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const SentimentAnalysis = () => {
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
                    <h2 className='text-2xl font-prata py-2'>Sentiment Analysis using Roberta</h2>
                    <h3>Python / NLTK / Roberta</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p className="text-2xl font-prata mb-5">Project Overview</p>
                    <p>This project is focused on sentiment analysis of Amazon reviews, utilizing advanced natural language processing (NLP) techniques to uncover insights into customer opinions. By combining VADER (Valence Aware Dictionary for sEntiment Reasoning) and RoBERTa (A Robustly Optimized BERT Approach), the project provides a robust framework for analyzing the emotional tones within a wide range of reviews.</p>

                    <p>VADER rule-based approach allows for quick and efficient sentiment detection, ideal for short and informal text, capturing sentiments from emoticons, slang, and punctuation. RoBERTa, with its deep learning capabilities, adds depth and context-awareness to the analysis, allowing for nuanced understanding of complex customer feedback.</p>
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
                                <RiRadioButtonFill className='pr-1' /> Jupyter
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> NLP
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />NLTK
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Data Visualization
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Roberta
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

export default SentimentAnalysis;