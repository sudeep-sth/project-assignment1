import React, { useState } from 'react'
import pricedata from './Monthlydata'
import arrow from '../../assets/price/Arrow.svg'
import Pricecart from './Pricecart'
const Price = () => {

    const [toggle, setToggle] = useState('monthly')

    return (
        <div>

            <div className='flex justify-center items-center gap-10  flex-col bg-[#F6F6F6]'>
                <div className=' relative top-3 flex gap-4'>
                    <div className=''></div>
                    <div className=' font-Montserrat'>save 10%</div>
                    <div className='font-Montserrat'>save 15%</div>
                </div>
                <div className='border rounded-2xl '>
                    <button className={` border p-2 rounded-s-2xl font-Montserrat ${toggle === "monthly" && "bg-gray-400"}`} onClick={() => setToggle("monthly")} value='monthly'>Monthly</button>
                    <button className={`border p-2 font-Montserrat ${toggle === "quaterly" && "bg-gray-400"}`} onClick={() => setToggle("quaterly")} value='quaterly' >Quaterly</button>
                    <button onClick={() => setToggle("yearly")} className={`font-Montserrat border p-2 rounded-e-2xl ${toggle === "yearly" && "bg-gray-400"}`} value='yearly '>Yearly</button>
                </div>
                <div className=''>
                    {/* {
                        pricedata.map((items) => {
                            return (
                                <div className='border border-red-900 border-2 flex flex-col   w-[387px] h-[887px] p-12 rounded-md '>
                                    <div className='text-[29px] font-bold text-center '>{items.title}</div>
                                    <div className='text-center text-[14px] font-normal h-[10px]   pt-2'>{items.text}</div>
                                    <div className='text-[40px] font-bold text-[#FF734F] text-center pt-[74px] pb-[34px]'>{items.price}</div>
                                    <hr className='border border-red-900' />
                                    <div className='text-left pt-[38px] text-[15px] font-bold'>Whats included:</div>
                                    <div className='text-justify pl-[27px] pt-[12px] h-[160px] text-[14px] '>{items.includes}</div>
                                    <h1 className='pt-[70px] text-[15px] font-bold'>Design team</h1>
                                    <div className='text-justify pl-[27px] pt-[12px] h-[80px] text-[14px] '>{items.designes}</div>
                                    <div className='border border-red-800 py-[23px] px-[93px] rounded-lg text-[14px] font-bold text-center mt-[70px]'>{items.buttons}</div>

                                </div>
                            )

                        })
                    }
                     */}

                    <div className='flex gap-10 mb-[158px]'>

                        <Pricecart
                            title='Essentials'
                            text='Great for basic UI/UX design needs'
                            price={<div>{toggle === "monthly" ? '$2000' : toggle === "quaterly" ? "$3500 " : "$4500"}<p className="text-[16px] font-Montserrat">per month</p></div>}
                            includes={
                                <div>
                                    {toggle === "monthly" ?

                                        <ul>
                                            <li className='font-Montserrat'>UI execution</li>
                                            <li className='font-Montserrat'>Connect on Slack</li>
                                            <li className='font-Montserrat'>One 30 minute meeting a week</li>
                                        </ul>
                                        :
                                        toggle === "quaterly" ?
                                            <ul>
                                                <li>UI execution</li>
                                                <li>Connect on Slack</li>
                                                <li>One 30 minute meeting a week</li>
                                                <li>1+</li>

                                            </ul>
                                            :
                                            <ul>
                                                <li>UI execution</li>
                                                <li>Connect on Slack</li>
                                                <li>One 30 minute meeting a week</li>
                                                <li>1+</li>
                                                <li>2+</li>
                                            </ul>

                                    }
                                </div>}
                            designes={<ul>
                                <li>1 designer working with 4-5 other customers at the same time</li>
                            </ul>}
                            buttons={<button>Try Free</button>
                            }
                        />


                        <Pricecart
                            classname={'!bg-[#FF734F] !'}
                            titalcolor={'!text-black'}
                            title='Pro'
                            text='Great for end-to-end product design'
                            price={<div>$3,595 <p className="text-[16px]">per month</p></div>}
                            includes={<ul>
                                <li>Everything in Essential</li>
                                <li>Full UI/UX design and research</li>
                                <li>Dev ready Figma files</li>
                                <li>Dev ready Figma files</li>
                            </ul>}
                            designes={<ul>
                                <li>1 design lead</li>
                                <li>1 designer working on 2-3 other customers at the same time</li>
                            </ul>}
                            buttons={<button>Try Free</button>}
                        />

                        <Pricecart
                            title='Turbo'
                            text='Great for products that require more design horsepower and tight timelines'
                            price={<div>$5,200 <p className="text-[16px]">per month</p></div>}
                            includes={<ul>
                                <li>Everything in Essential and Pro</li>
                                <li>User Testing</li>
                                <li>Figma Prototypes</li>
                                <li>Flexible meetings</li>
                                <li>Custom workflows to speed up delivery</li>
                            </ul>}
                            designes={<ul>
                                <li>1 design lead</li>
                                <li>1 designer working on 1 other customer at the same time</li>
                            </ul>}
                            buttons={<button>Try Free</button>}
                        />


                    </div>
                </div >

                <div className='flex flex-col items-center'>
                    <div className='text-[18px] font-bold text-center'>Hey! Need a custom plan? Contact us!</div>
                    <p className='text-[14px]  text-center mt-[13px]'>Try us risk free for 7 days, if you don’t love us, get your money back.</p>

                    <button className='border px-16 py-6 rounded-2xl bg-[#FF734F] text-white mt-[42px]'>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Price