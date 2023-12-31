import React from 'react'
import image1 from '../../assets/work/Group_386_cb42464eab.png.svg'
import image2 from '../../assets/work/Property_1_Default_2_9068fa65c4.png.svg'
import image3 from '../../assets/work/Property_1_Variant3_8a039d066b.png.svg'

const Images = () => {
    return (
        <div className=' flex justify-center flex-col items-center gap-[70px] overflow-hidden'>
            <div className='sm:max-w-[900px] bg-[#91CFD2] sm:w-full flex items-center p-5 w-[350px]'>
                <div className='sm:w-[428px] sm:h-[279px] w-[200px] h-[150px] bg-[#231F20] relative left-[28px] rounded-md '>
                    <div className='mt-14 ml-8'>
                        <div className=''><button className='text-white bg-[#FF734F] font-Montserrat'>Socure</button></div>
                        <div className='text-white text-[1px] font-Montserrat'>A predictive analytics platform for consumers digital identity verification</div>
                        <div><a href="" className='text-white border border-3 font-Montserrat'>read case study</a></div>
                    </div>
                </div>
                <div><img src={image1} alt="" /></div>
            </div>
            <div className=''><img src={image2} alt="" className='sm:w-[900px] w-[350px]' /></div>
            <div><img src={image3} alt="" className='w-[900px]' /></div>
        </div>
    )
}

export default Images