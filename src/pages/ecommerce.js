import Image from 'next/image';
import React from 'react';
import netflixImg from '../../public/assets/Education.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const ecommerce = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='text-2xl font-prata py-2'>Ecommerce Marketplace</h2>
          <h3>Next JS / Mongodb / AWS Amplify</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
        <p className="text-2xl font-prata mb-5">Project Overview</p>
          <p>
          By leveraging the capabilities of Next.js, I have crafted a game-changing fitness e-commerce marketplace that aims to reshape the fitness industry. This innovative platform is meticulously designed to cater to the diverse needs of fitness enthusiasts, offering a vast array of products, including supplements, nutrition essentials, and fitness accessories.

With a keen focus on user experience and responsive design, my Next.js website ensures that customers can effortlessly browse, discover, and purchase the products they require to elevate their fitness journey. The website&apos;s performance and speed are optimized to provide users with a seamless shopping experience, ultimately setting a new standard for online fitness marketplaces.

Furthermore, my dedication to creating a difference in the fitness industry extends beyond the technical aspects. I have worked diligently to curate a selection of high-quality products from trusted brands, fostering an environment where customers can confidently make informed choices on their path to achieving their fitness goals.

In summary, my Next.js fitness e-commerce website is more than just a digital platform; it&apos;s a transformative force in the fitness industry. Through innovative technology, user-centric design, and a commitment to quality, I have paved the way for fitness enthusiasts to access the tools and products they need to succeed in their health and wellness journey.
          </p>
          <Link href="https://www.alfamodo.com"><button
                        className="flex items-center gap-2 h-10 px-6 font-semibold rounded-md bg-black text-white mt-2 hover:bg-white hover:text-black outline"
                    >
                        <span className="text-xs">
                            Website
                        </span>
                    </button></Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Reactjs/Nextjs
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AWS Amplify
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Cloudinary
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Stripe/Phonepe/Paypal
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Mongodb
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

export default ecommerce;