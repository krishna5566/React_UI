import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-4'>
        <div className="max-w-[1240px] md:flex mx-auto justify-between py-[50px]">
             <div className="m-3">
                <h1 className='text-[20px] md:text-[40px] font-bold text-white'> Want to learn latest I.T. skills?</h1>
                <span className='text-white'>
                    Sign up to our NewsLetter and stay up to date.
                </span>
             </div>
             <div className=" m-3">
                <input type="text" className='sm:w-full rounded mb-2 p-3 mr-2 text-slate-600' placeholder="Email" />
                <button className='bg-black text-white p-3 rounded '>Get Started</button>
                <br />
                <p className='text-white'>
                    We care about the protection of your data.<br />  Read our <a href="" className='text-black'>privacy policy</a>.
                </p>
             </div>

        </div>        
    </div>
  )
}
