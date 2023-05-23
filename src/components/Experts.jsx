import React from 'react'
import com from "../assets/image/com.png";

export default function Experts() {
  return (
    <div className='max-w[1240px] p-2  my-10 mx-10  md:grid grid-cols-2 ' >
        <div className=" col-span-1 md:w-[80%] flex justify-center">

        <img src={com} alt='' className='inline'/>
        </div>
        <div className="  col-span-1 flex flex-col justify-center">
            <h1 className='text-[#00bf9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
            <p className='my-2 text-justify'>Back in school with pleasure! I definitely would have no chance studying with experts like this if it wasn't for Learning with Experts.</p>
            <button className='w-[40%] md:w-[30%] bg-black text-white p-3 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500'>Get Started</button>
        </div>
    </div>
  )
}
