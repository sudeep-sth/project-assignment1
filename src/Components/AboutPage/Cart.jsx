import React from 'react'

const Cart = ({ icon, name, discription }) => {
    return (
        <div className='sm:flex sm:justify-center sm:items-center  sm:mt-[23px] hidden'>

            <div className=' flex flex-col justify-center items-center '>
                <div className='w-[150px] h-28  '>{icon}</div>
                <div className='w-80 h-10  font-bold text-center mt-[23px] font-Montserrat'>{name}</div>
                <div className='w-96 h-28  text-center flex-wrap text-[16px] mt-[13px] font-Montserrat'>{discription}</div>
            </div>
        </div>
    )
}

export default Cart