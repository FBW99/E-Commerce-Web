import React from 'react'
import Banners from '../../assets/Banner/Banner.png';
import {GrSecure} from "react-icons/gr";
import {IoFastFood} from "react-icons/io5";
import { GiFoodTruck } from 'react-icons/gi';
import {MdSupportAgent} from 'react-icons/md';
const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div 
                data-aos="zoom-in"
                data-aos-duration="1000" className='bg-primary p-4 rounded-2xl'>
                    <img src={Banners} alt="" 
                    className='w-full max-w-[400px] h-[350px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'/>
                </div>
                <div>
                    <h1 data-aos="fade-up" data-aos-duration="1000" className='text-3xl lg:text-6xl font-bold text-primary'>Winter sale upto 50% off</h1>
                    <p data-aos="fade-up" data-aos-delay="100" className='text-gray-500 text-base mt-2 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex gap-4'>
                        <button className='bg-primary text-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 duration-300'>Shop Now</button>
                    </div>
                    <div className='flex flex-col gap-3 mt-2'>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex items-center gap-4'>
                        <GrSecure 
                        className='text-4xl h-12 w-12 shadow-sm p-4 mt-1 rounded-fill bg-violet-100 dark:bg-violet-400'/> 
                        <p>Quality Products</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex items-center gap-4'>
                        <IoFastFood
                        className='text-4xl h-12 w-12 shadow-sm p-4 mt-1 rounded-fill bg-violet-100 dark:bg-violet-400'/> 
                        <p>Fast Delivery</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex items-center gap-4'>
                        <GiFoodTruck
                        className='text-4xl h-12 w-12 shadow-sm p-4 mt-1 rounded-fill bg-violet-100 dark:bg-violet-400'/> 
                        <p>Easy Payment method</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" className='flex items-center gap-4'>
                        <MdSupportAgent
                        className='text-4xl h-12 w-12 shadow-sm p-4 mt-1 rounded-fill bg-violet-100 dark:bg-violet-400'/> 
                        <p>24/7 Online Support</p>
                    </div>
                </div>
            </div>      
        </div>
    </div>      
  </div>
  )
}

export default Banner