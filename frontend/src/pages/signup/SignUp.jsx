import React from 'react'

import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          <span className='text-blue-400 font-serif'> ConnectChat</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder="Jhoh Root" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder="jhohroot123" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder="Reenter Password" className="input input-bordered w-full max-w-xs" />
          </div>

          {/* Check Box for gender */}
          <GenderCheckBox />
          <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-4 ml-1 inline-block'>
            Already have an account? Login.
          </a>
          <div>
            <button className='btn btn-block btn-md mt-2'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp