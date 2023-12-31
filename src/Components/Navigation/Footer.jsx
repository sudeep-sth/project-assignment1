import React from 'react'
import footerdata from './Footer_data'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='flex justify-center flex-col bg-[#292526] w-[100vw] sm:h-[200px] h-[250px] absolute top-[94%] text-white'>
            <div className='flex justify-center text-[38px] font-bold leading-[44px] font-Montserrat'>We helped our customers raise <span className='text-[#FF734F]'> $1B+</span> </div>


            <div className='flex flex-col justify-center sm:hidden'>
                {

                    footerdata.map((e) => {
                        return (
                            <Link
                                to={e.path}
                            >
                                <div className='font-bold flex  w-20'>{e.name}</div>
                            </Link>
                        )
                    })
                }
            </div>

            <div className='sm:flex sm:justify-center sm:gap-10 hidden '>
                {

                    footerdata.map((e) => {
                        return (
                            <Link
                                to={e.path}
                            >
                                <div className='font-bold flex items-center justify-center'>{e.name}{e.line}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer



