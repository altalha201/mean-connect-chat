import React, { useState } from 'react'

import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const { loading, signup } = useSignUp()

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up
          <span className='text-blue-400 font-serif'> ConnectChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder="Jhoh Root" className="input input-bordered w-full max-w-xs"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder="jhohroot123" className="input input-bordered w-full max-w-xs"
              value={inputs.userName}
              onChange={(e) => setInputs({ ...inputs, userName: e.target.value })} />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder="Reenter Password" className="input input-bordered w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
          </div>

          {/* Check Box for gender */}
          <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-4 ml-1 inline-block'>
            Already have an account? Login.
          </Link>
          <div>
            <button className='btn btn-block btn-md mt-2'
              disabled={loading}>
              {loading ? <span className="loading loading-spinner" /> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp