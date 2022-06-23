import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaPinterest, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { GrMailOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div className=' md:flex'>
        <div className='md:w-1/3 footer-left p-5 flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-2xl'> WAVE </h1>
            <p className='my-5'> A vivid representation in words of someone or something
                we immediately recognized the man from our cousin's description of him</p>
            <div className='flex items-center'>
               <div className='social-icon text-white bg-blue-700'>
                    <FaFacebookSquare/>
                </div> 
                <div className='social-icon text-white bg-red-400'>
                    <FaInstagram className=''/>
                </div> 
                <div className='social-icon text-white bg-blue-400'>
                    <FaTwitter className=''/>
                </div> 
                <div className='social-icon text-white bg-red-700'>
                    <FaPinterest className=''/>
                </div> 
            </div>
        </div>
        <div className='md:w-1/3 center p-5'>
            <h1 className='mb-7 text-2xl font-semibold'>Useful Links</h1>
            <ul className='list-none flex flex-wrap'>
                <li className='footer-list-item'>Home</li>
                <li className='footer-list-item'>Cart</li>
                <li className='footer-list-item'>Men</li>
                <li className='footer-list-item'>Women</li>
                <li className='footer-list-item'>Accessories</li>
                <li className='footer-list-item'>My Account</li>
                <li className='footer-list-item'>Order Tracking</li>
                <li className='footer-list-item'>Wishlist</li>
                <li className='footer-list-item'>Terms</li>
            </ul>
        </div>
        <div className='bg-black text-white md:bg-white md:text-black md:w-1/3 footer-right p-5'>
            <h1 className='text-2xl mb-5 font-semibold'>Contact</h1>
            <div className='flex items-center mb-5'>
                <IoLocationSharp className='mx-2'/>
                <p>2815, Pembina highway, Winnipeg, Manitoba</p>
            </div>
            <div className='flex items-center mb-5'>
                <FaPhoneAlt className='mx-2'/>
                <p>+1 431 758 6794</p>
            </div>
            <div className='flex items-center mb-5 overflow-x-clip'>
                <GrMailOption className='mx-2'/>
                <p>clothingwave@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer