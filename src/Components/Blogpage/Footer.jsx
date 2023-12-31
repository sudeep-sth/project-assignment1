import React from 'react'
import group from '../../assets/blog/Group.png'
import rectangle from '../../assets/blog/Rectangle 22.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center '>
            <div className='flex flex-col items-center justify-center '>
                <div className='text-[50px] pt-52'>
                    Let’s Build Something <br />Awesome Together!
                </div>
                <p className='pt-[20px] text-[14px]'>Try us risk free for 7 days, if you don’t love us, get your money back.</p>
                <div className='pt-[39px]'>
                    <button className='py-5 px-16 bg-[#FF734F] rounded-2xl text-white text-[15px] font-bold'>Get Started</button>
                </div>
                <div className='relative pt-[54px]'>
                    <img src={group} alt="" className='' />
                    <img src={rectangle} alt="" className='absolute bottom-0  w-[1500px]' />
                </div>

            </div>

            <div className='relative'>
                <div className='flex justify-around  bg-[#292526] w-[100vw] h-[550px] items-center  text-white  '>
                    <div>
                        <div className='flex justify-center text-[60px] font-bold leading-[44px] p-4'>the design project</div>
                        <div className='flex gap-8 justify-center'>
                            <div>hello@designproject.io</div>
                            <div>@designproject.io</div>
                            <div>The Design Project</div>
                        </div>
                    </div>
                    <div className='flex justify-center flex-col gap-[21px] py-[181px]'>
                        <a href="">How it works</a>
                        <a href="">About </a>
                        <a href="">Our work</a>
                        <a href="">Blog</a>
                        <a href="">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer