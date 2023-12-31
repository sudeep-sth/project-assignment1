import React, { useState } from 'react'
import data from './Tabledata'
import Toggle from './Toggle'
import Footer from './Footer'

const Blog = () => {
    const [dataTransfer, setDatas] = useState()

    const showfunction = () => {

    }
    return (
        <div className='flex flex-col items-center bg-[#background: #F6F6F6;]'>
            <div className='text-[36px] font-bold p-10 pb-20'>How to know if TDP is right for your startup</div>
            <div >
                <table className='max-w-[1000px] w-full flex flex-col gap-[34px]'>
                    <tr className='flex gap-[34px] w-full'>
                        <td className='p-5 bg-black text-white rounded-e-3xl rounded-t-3xl w-[500px]'>You want a new, innovative, and user-centered UX strategy for an existing product</td>
                        <td className='p-5 bg-[#FF734F] text-white rounded-s-3xl rounded-t-3xl w-[500px]'>You want to understand where users struggle when using your product</td>
                    </tr>
                    <tr className='flex gap-[34px] w-full'>
                        <td className='p-5 bg-black text-white rounded-e-3xl rounded-t-3xl w-[500px]'>You want to translate complex data into an easy-to-understand dashboard</td>
                        <td className='p-5 bg-black text-white rounded-s-3xl rounded-t-3xl w-[500px]'>You need additional design resources that synergize with your (already) amazing design team</td>
                    </tr>
                    <tr className='flex gap-[34px] w-full'>
                        <td className='p-5 bg-black text-white rounded-e-3xl rounded-t-3xl w-[500px]'>You‘re researching how UX can impact you business growth</td>
                        <td className='p-5 bg-black text-white rounded-s-3xl rounded-t-3xl w-[500px]'>You want to understand your users and design products that meet their needs</td>
                    </tr>
                </table>
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h1 className='text-[38px] font-bold mt-[213px]'>Our most frequently asked questions</h1>
                <div className=' w-[1000px] mt-[77px]'>
                    {
                        data.map((items) => {
                            return <Toggle datas={items} />
                        })
                    }
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Blog