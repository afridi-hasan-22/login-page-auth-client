import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        toast.success('Logout Succesfully');
      })
      .catch((error) => {
        console.log(error.message);
        toast.error('Something Wrong');
      });
  };
  return (
    <div className=''>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              {user ? (
                <>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to='/login'>Login</Link>
                  </li>
                  <li>
                    <Link to='/register'>Registration</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a className='btn btn-ghost text-xl'>daisyUI</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            {user ? (
              <>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
                <li>
                  <Link to='/register'>Registration</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className='navbar-end'>
         <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
