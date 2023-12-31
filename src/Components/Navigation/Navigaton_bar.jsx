import React, { useState } from 'react'
import data from './Navigation_path'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
const Navigaton_bar = () => {

    const [open, setOpen] = useState(false)

    const togglehandel = () => {
        setOpen(true)
        console.log('hi')
    }

    return (
        <div className=' bg-[#E0EAF3] flex justify-center items-center py-8 h-[19px]'>
            <div className='sm:hidden fixed'><button onClick={togglehandel}><FaBars className=' block  sm:hidden m-4 cursor-pointer ' /></button>
                <div className={`${open ? "block border border-red-700 w-[375px] text-center bg-blue-300" : "hidden"} `}>
                    {
                        data.map((e) => {
                            return (

                                <Link

                                    to={e.path}

                                >
                                    <div className='text-[14px] font-bold  hover:text-[#FF734F] font-Montserrat'>{e.name}</div>


                                </Link>



                            )
                        })
                    }
                </div>
            </div>

            <div className='sm:flex sm:justify-center sm:items-center sm:gap-14 sm:py-8 sm:h-[19px]  hidden'>
                {
                    data.map((e) => {
                        return (

                            <Link

                                to={e.path}

                            >
                                <div className='text-[14px] font-bold  hover:text-[#FF734F] font-Montserrat'>{e.name}</div>


                            </Link>



                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navigaton_bar