import React from 'react'

const Register  = () => {
  return (
    <div className='home register'>
        <div className='w-4/5 md:w-2/5 bg-gray-200 p-5'>
            <h1 className='text-2xl text-center font-medium'>CREATE AN ACCOUNT</h1>
            <form className='flex mt-5 flex-col items-center'>
                <input className='form-input' placeholder='Full name'/>
                <input className='form-input' placeholder='Username'/>
                <input className='form-input' type="email" placeholder='Email'/>
                <input className='form-input' type="password" placeholder='password'/>
                <h1 className='my-5 text-sm'> By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </h1>
                <button className='px-4 py-2 w-4/6 bg-teal-600 text-white'>SIGN UP</button>
            </form>
        </div>
    </div>
  )
}

export default Register;