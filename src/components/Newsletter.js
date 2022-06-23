import React from 'react'
import { IoSend } from "react-icons/io5";

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1 className='text-5xl font-semibold mb-5'>Newsletter</h1>
        <p className='text-2xl mb-5 text-center'> Get timely updates from your favourite products. </p>
        <div className='w-3/4 md:w-1/2 flex justify-between bg-white rounded-xl'>
            <input className='w-4/5 rounded-xl pl-5 py-1 focus:outline-none' type="email" placeholder='Your email' ></input>
            <button className='w-1/5 flex justify-center items-center rounded-xl bg-teal-500 text-white'>
                <IoSend/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter