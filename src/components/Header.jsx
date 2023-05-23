import React, { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';

const Header = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <div className='bg-white p-4'>
        <div className="max-w-[1240px] py-[12px] flex items-center justify-between mx-auto">

            <div className='text-4xl font-bold text-[#3f3cbb]'>
                CODE.
            </div>
            {
                toggle ?
                <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-black text-2xl md:hidden block'/>
                :
                <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-black text-2xl md:hidden block' />
            }
            <ul className=' hidden md:flex  text-black gap-10'>
                <li className='hover:font-bold hover:text-gray-900'>
                    Home
                </li>
                <li className='hover:font-bold hover:text-gray-900'>
                    Company
                </li>
                <li className='hover:font-bold hover:text-gray-900'>
                    Resources
                </li>
                <li className='hover:font-bold hover:text-gray-900'>
                    About
                </li>
                <li className='hover:font-bold hover:text-gray-900'>
                    Contact
                </li>
            </ul>
            {/* Responsiove menu */}

            <ul className={`duration-300 md:hidden w-[50%]  h-screen text-white fixed bg-black left-[-100%] top-[88px] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className='p-3 '>
                    Home
                </li>
                <li className='p-3'>
                    Company
                </li>
                <li className='p-3'> 
                    Resources
                </li>
                <li className='p-3'>
                    About
                </li>
                <li className='p-3'>
                    Contact
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Header