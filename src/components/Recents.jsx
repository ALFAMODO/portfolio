import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFire } from "react-icons/bs";
import image from "../../public/assets/transformers.png"

const Recents = () => {
    return (
        <div id='projects' className='p-6 md:p-2 w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <div className='max-w-[1240px] mx-auto justify-center pt-10 md:pt-28'>
                    <p className='text-xl tracking-widest uppercase text-teal-700 font-bold font-prata'>
                        Current
                    </p>
                    <h2 className='py-4 text-lg md:text-2xl lg:text-4xl font-prata flex items-center gap-1'> Hot Project <BsFire className="text-yellow-500" /></h2>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="flex items-center">
                        <section>
                            <h1 className='font-bold italic font-cors tracking-wide text-xl'>Visual Question Answering Model</h1>
                            <div>
                                <h1 className="font-semibold pt-4 pb-1">Description:</h1>
                                <p>Our Visual Question Answering (VQA) project represents an exciting endeavor at the intersection of computer vision and natural language processing (NLP). The aim of this project is to develop an advanced AI model capable of understanding and answering questions about visual content depicted in images.
                                </p>
                                <h1 className="font-semibold pt-4 pb-1">Objective:</h1>
                                <p>The primary objective of our VQA project is to bridge the gap between visual information and natural language understanding, enabling the AI model to comprehend the content of images and respond to related questions in a human-like manner. By combining state-of-the-art techniques in computer vision and NLP, we seek to create a sophisticated VQA system that can analyze images, interpret questions posed in natural language, and generate accurate textual descriptions or answers.
                                </p>
                            </div>
                            <div>
                            <h1 className="font-semibold pt-4 pb-1">Technologies Used:</h1>
                            

                            <p>Deep Learning: Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Attention Mechanisms</p>
                            <p>Frameworks: TensorFlow, PyTorch</p>
                            <p>Libraries: OpenCV, NLTK, Transformers</p>
                            <p>Languages: Python</p>
                            </div>
                            <p className="italic text-sm pt-4"><span className="font-semibold">Note: </span> This project is currently in progress</p>
                        </section>
                    </div>
                    <Image
                        src={image}
                        alt='transformers.png'
                        className="hidden md:flex"
                    />

                </div>
                <div>
                <Image
                        src={image}
                        alt='transformers.png'
                        className="flex md:hidden"
                    />
                </div>
            </div>

        </div>
    );
};

export default Recents;