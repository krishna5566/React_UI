import React from 'react';
import {BsFacebook , BsInstagram , BsTwitter , BsLinkedin, BsYoutube, BsWifi} from 'react-icons/bs';
 import {FaCopyright} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-4 md:h-[400px] content-center '>
        <div className='font-bold text-4xl md:text-7xl text-center my-10'>
            CODE.
        </div>
        <div className=" flex gap-10 justify-center text-[40px]">
            <BsFacebook />
            <BsInstagram/>
            <BsTwitter/>
            <BsLinkedin/>
            <BsYoutube/>
            <BsWifi/>
        </div >
        <div className=' my-4'>
            <ul className='md:flex text-center md:justify-center gap-8 text-2xl text-semi-bold hover:text-bold'>
                <li>
                    About
                </li>
                <li>
                    Need Help?
                </li>
                <li>
                    content Guide
                </li>
                <li>
                    lifehacker store
                </li>
                <li>
                    Privacy
                </li>
                <li>
                    terms of use 
                </li>
                <li>
                    Advertising
                </li>
                <li>
                    Jobs
                </li>
            </ul>

        </div>
        <div className=" flex text-center justify-center gap-2  ">
                < FaCopyright  className='my-1'/>
                by KRISHNA & DIVYESH 
        </div>
    </div>
  )
}

export default Footer;