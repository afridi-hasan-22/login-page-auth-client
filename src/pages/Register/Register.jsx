import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email,password).then(result => {
      toast.success('Registration Succesfull')
      form.reset()
    }).catch(error => {
      console.log(error);
      toast.error('Email Already Exist, Please Login')
    })
  }
  return (
    <div>
      <div className='flex justify-center mt-20 '>
        <form onSubmit={handleSubmit} className='w-full max-w-sm'>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-700 text-sm font-bold mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Enter your password'
              required
            />
          </div>
          <p className='py-4'>Already have an Account ? please <span className='text-blue-500'><Link to='/login'>Login</Link></span></p>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Register
            </button>
            {/* Add forgot password or other links here */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;