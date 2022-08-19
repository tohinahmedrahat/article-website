import React from 'react';
import gentalmen from '../../imges/men.png'
import icon from '../../imges/icon.png'

const ShorTitle = () => {
    return (
        <div>
            <div className='w-3/4 mx-auto mb-5'>
            <div className='mt-5 p-3 bg-white shadow rounded'>
                <div className=' p-4'>
                    <h1 className='text-xl font-medium'>This text is for our article title, sometime it should be long as like this but also can be a one liner instead of 2 lines. This is an example of long story without cover</h1>
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
            </div>
        </div>
        </div>
    );
};

export default ShorTitle;