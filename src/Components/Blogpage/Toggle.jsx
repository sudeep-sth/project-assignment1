import React, { useState } from 'react'
import arrow from '../../assets/blog/droparrow.svg'
import upsidearrow from '../../assets/blog/upside.png'
const Toggle = (props) => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <div className='max-w-[1000px] flex-wrap w-full  flex justify-between'>

                <div className='text-[15px] text-center font-semibold p-2 mt-[45px]'>{props.datas.questions}</div>
                <div className='mt-[56px] '><button onClick={() => setShow(!show)} className='w-[17px] duration-1000'><img src={show ? upsidearrow : arrow} alt="" /></button></div>
            </div>
            <div>
                <div className='border  border-b-red-600 border-x-0 border-t-0 '>{

                    show && <div className='text-[15px] p-2 du'>{props.datas.answers}</div>
                }
                </div>

            </div>
        </div>
    )
}

export default Toggle