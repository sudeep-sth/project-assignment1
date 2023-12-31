import React, { useState } from 'react'
import data from './Home_mid_data'
import { Link } from 'react-router-dom'
import image from '../../assets/Group.png'
import Footer from '../Navigation/Footer'
import rectangle from '../../assets/blog/Rectangle 22.png'
const Home = () => {
    const [text, setText] = useState({
        good: 'Good',
        warning: 'Warning'
    })

    return (
        <div className='bg-[#E0EAF3] flex justify-center flex-col items-center relative'>
            <div className='sm:bg-[#E0EAF3] sm: sm:justify-center  sm:text-[50px] sm:font-bold font-Montserrat text-[20px]'>
                A UI/UX Design Subscription So <span className='text-[#FF734F]'>{text.good}</span><br />
                It Should Come With a <span className='text-[#FF734F]'>{text.warning}</span> Label
            </div>
            <div className='bg-[#E0EAF3] sm:flex sm:flex-row sm:justify-center sm:gap-[40px] p-[10px] flex flex-col gap-5'>
                {
                    data.map((items) => {
                        return (
                            <Link
                                to={items.path}
                            >

                                <div className='flex items-center'>

                                    <div>{items.icon}
                                    </div>
                                    <div className='font-bold pl-2 font-Montserrat'>
                                        {items.name}
                                    </div>
                                </div>

                            </Link>
                        )
                    })
                }
            </div>
            <div className='flex justify-center'>
                <button className='bg-[#F86642BF] text-white sm:p-[10px] sm:pr-[16px] mb-0  uppercase rounded-md font-bold p-[2px] text-[10px] sm:text-[17px]  '>Start Your Risk free trial</button>
            </div>
            <div className='flex justify-center items-center sm:w-5/12 w-11/12'>
                <img src={image} alt="" className='' />
                <img src={rectangle} alt="" className='absolute bottom-0  w-[1500px] h-[150px] sm:h-[200px]' />
            </div>
            <div className='flex justify-evenly'>
                <Footer />
            </div>

        </div >
    )
}

export default Home