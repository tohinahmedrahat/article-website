import React from 'react';

import banner from '../../imges/banner.png'
import gentalmen from '../../imges/men.png'
import icon from '../../imges/icon.png'

const FullStory = () => {
    return (
        // FullStory section 
        <div className='w-3/4 mx-auto mt-5'>
            <section className='p-2 bg-white'>
                <img className='w-full' src={banner} alt="" />
                <p className='mt-5 font-semibold text-justify leading-8 px-2'>
                    Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact. Our journey began on the 7th September of 2010. Mumshad Nahiyan, Raiyaan Abdullah, Rusab Sarmun and Raiann Rahman Shuvro, a group of boys casually sitting in their classroom decided to embark on a journey to establish a tech company. We initially thought of selling Game CDs. Then we realized our team needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while needed a logo which lead us towards learning Adobe Photoshop and we Here we believe in dreaming as a team, grooming our skills and advancing towards perfection while providing quality service to our customers. All the good things in the world are simple. So we always prefer to maintain simplicity while delivering proper impact.
                </p>
                <hr className='bg-slate-300 h-[2px] my-3' />
                <div className='mt-5 flex justify-between mb-2'>
                        <span className='flex items-center'>
                            <img src={gentalmen} className='bg-slate-600 rounded-full h-12 w-12' alt="" />
                            <p className='font-semibold ml-3'>Michael Scott </p>
                        </span>
                        <span className='flex items-center'>
                            
                            <p className='font-semibold ml-3  text-slate-500'>11:22 AM, Nov 11, 2019</p>
                        </span>
                        <span className='flex items-center'>
                            <img src={icon} alt="" />
                            <p className='font-semibold ml-3'>Travel for explore</p>
                        </span>
                    </div>
            </section>
        </div>
    );
};

export default FullStory;