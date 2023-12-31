import React from 'react'
import Firstdata from './Aboutdata'
import { Link } from 'react-router-dom'
import seconddata from './Seconddata'
import ellips from '../../assets/about/Ellipse 6.png'
import rectangle from '../../assets/blog/Rectangle 22.png'
import Cart from './Cart'

import frame from '../../assets/about/Frame.svg'
import frame2 from '../../assets/about/Frame2.svg'
import frame3 from '../../assets/about/Frame3.svg'
const About = () => {
    return (
        <div className='bg-[#F6F6F6] flex justify-center items-center flex-col pt-[10px] p-5  sm:p-0'>
            <div className='flex flex-col justify-center items-center '>
                <div className='sm:text-[40px] font-bold  text-[20px] sm:p-0 text-justify sm:text-center capitalize font-Montserrat'>A diverse team of passionate UX nerds who are <br />here to help your startup succeed</div>
                <div className='text-[16px] text-justify am:text-center mt-[23px] p-5 sm:p-0 font-Montserrat'>From ideation to expansion, TDP understands the unique demands of your startup—providing you <br />with optimized design strategies and fast turnarounds for an affordable monthly subscription.</div>
            </div>

            {/* for mobile */}
            <div className='flex flex-col justify-center items-center  mt-[23px] sm:hidden p-5 sm:p-0'>
                {Firstdata.map((items) => {
                    return (
                        <div className=' flex flex-col justify-center items-center'>
                            <div className='  '>{items.icon}</div>
                            <div className='w-80 font-bold text-center mt-[23px] font-Montserrat'>{items.name}</div>
                            <div className='w-96 text-center flex-wrap text-[16px] mt-[13px] p-10 font-Montserrat'>{items.discription}</div>
                        </div>

                    )
                })}
            </div>

            {/* for desktop */}
            <div className='sm:flex sm:justify-center sm:items-center  sm:mt-[23px] hidden'>
                {/* {Firstdata.map((items) => {
                    return (
                        <div className=' flex flex-col justify-center items-center'>
                            <div className='w-20 m-0 p-0 h-10 border border-red-400'>{items.icon}</div>
                            <div className='w-80 h-10 border border-red-500 font-bold text-center mt-[23px]'>{items.name}</div>
                            <div className='w-96 text-center flex-wrap text-[16px] mt-[13px]'>{items.discription}</div>
                        </div>

                    )
                })} */}

                <Cart
                    icon={<img src={frame} alt="" />}
                    name='Costs 70% less'
                    discription='We developed highly- optimized design processes to let us work fast and deliver incredible results—and we pass those savings on to you'
                />
                <Cart
                    icon={<img src={frame2} alt="" />}
                    name='Adaptable and scalable'
                    discription='We developed highly- optimized design processes to let us work fast and deliver incredible results—and we pass those savings on to you'
                />
                <Cart
                    icon={<img src={frame3} alt="" />}
                    name='Fast turnaround times'
                    discription='TDP was built for flexibility—we quickly adapt and grow as you grow'
                />
            </div>

            <div className='flex flex-col   justify-center items-center mt-[187px]'>
                <div className='text-[38px] font-bold sm:text-center text-left p-5 sm:p-0 capitalize font-Montserrat'>How signing up with The Design Project works!?</div>
                <div><p className='text-[16px] sm:text-center text-justify sm:p-0 p-5 sm:text-center mt-[23px] font-Montserrat'>Take a minute to imagine how you’d feel watching your user count grow, and retention rates stay consistently high. When you <br /> prioritize effective UX, better retention and growth are natural consequences. Backed by countless hours of research and <br /> testing, TDP blends UX, UI, and Product design into a deliciously smooth process that fuels productivity and success.</p></div>
            </div>
            {/* for mobile */}

            <div className=' sm:hidden p-5'>
                {seconddata.map((items) => {
                    return (
                        <div className=' flex items-center flex-col  justify-center  p-5 relative'>
                            <div className='relative'><img src={ellips} alt="" /></div>
                            <div className='w-80 font-bold text-center p-5'>{items.name}</div>
                            <div className=' '>{items.icon}</div>
                            <div className='border border-green-900 '><img src={rectangle} alt="" className=' absolute  left-0 bottom-[155px]' /></div>
                            <div className='w-96 text-justify flex-wrap p-10'>{items.discription}</div>
                        </div>

                    )
                })}
            </div>

            {/* for desktop */}
            <div className='sm:flex sm:justify-center sm:mt-[69px] hidden sm:flex '>

                {seconddata.map((items, index) => {
                    return (
                        <div>
                            <div className=' flex items-center flex-col  justify-center  relative'>
                                <div className='relative'><img src={ellips} alt="" /> <p className='absolute inset-0 top-1 left-[9px] text-[34px] font-bold text-white'>{items.id}</p></div>

                                <div className='w-80 font-bold text-justify sm:text-center font-Montserrat'>{items.name}</div>
                                <div className=' '>{items.icon}</div>
                                <div className='border border-red-900 '><img src={rectangle} alt="" className=' absolute  left-0 bottom-[77px]' /></div>
                                <div className='w-96 sm:text-center flex-wrap text-justify font-Montserrat'>{items.discription}</div>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default About