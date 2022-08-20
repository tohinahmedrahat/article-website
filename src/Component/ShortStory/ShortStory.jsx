import React from 'react';

import girl from '../../imges/girl.png'
import gentalmen from '../../imges/men.png'
import icon from '../../imges/icon.png'


const ShortStory = () => {
    return (
        // short story section
        <div className='w-3/4 mx-auto mb-5'>
            <div className='flex mt-5 p-3 bg-white shadow rounded'>
                <div className='w-3/4   p-4'>
                    <h1 className='text-3xl font-medium w-[80%]'>This text is for our article title, sometime it should be long as like this</h1>
                    <div className='mt-4 flex justify-between mb-2'>
                        <span className='flex items-center'>
                            <img src={gentalmen} className='bg-slate-600 rounded-full h-12 w-12' alt="" />
                            <p className='font-semibold ml-3'>Michael Scott </p>
                        </span>
                        <span className='flex items-center'>
                            <img src={icon} alt="" />
                            <p className='font-semibold ml-3'>Travel for explore</p>
                        </span>
                    </div>
                    <hr className='bg-slate-300 h-[2px] my-3' />

                    <p  className='mt-4 font-semibold text-slate-500'>Nov 4, 2019 | 2 min read #Website  #Design  #Dev_Web  #Adobe….</p>
                </div>
                <div className='w-1/4 '>
                    <img className='w-full h-full rounded-tr-[50px]' src={girl} alt="" />

                </div>
            </div>
        </div>
    );
};

export default ShortStory;