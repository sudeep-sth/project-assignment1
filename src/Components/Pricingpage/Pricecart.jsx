import React from 'react'

const Pricecart = ({ title, text, price, includes, designes, buttons, classname, titalcolor }) => {
    return (
        <div className={`${classname} border border-red-900 border-2 flex flex-col   w-[387px] h-[887px] p-12 rounded-md`}>
            <div className={`text-[29px] font-bold text-center `}>{title}</div>
            <div className='text-center text-[14px] font-normal h-[10px]   pt-2'>{text}</div>
            <div className={`${titalcolor} text-[40px] font-bold text-[#FF734F] text-center pt-[74px] pb-[34px]`}>{price}</div>
            <hr className='border border-red-900' />
            <div className='text-left pt-[38px] text-[15px] font-bold'>Whats included:</div>
            <div className='text-justify pl-[27px] pt-[12px] h-[160px] text-[14px] '>{includes}</div>
            <h1 className='pt-[70px] text-[15px] font-bold'>Design team</h1>
            <div className='text-justify pl-[27px] pt-[12px] h-[80px] text-[14px] '>{designes}</div>
            <div className='border border-red-800 py-[23px] px-[93px] rounded-lg text-[14px] font-bold text-center mt-[70px]'>{buttons}</div>

        </div>
    )
}

export default Pricecart