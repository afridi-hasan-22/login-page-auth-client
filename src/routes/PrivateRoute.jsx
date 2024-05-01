import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import LoadingSpinner from '../pages/shared/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {loading,user} = useContext(AuthContext);
  const location = useLocation()
  console.log(location);
  if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }
  if(user){
    return children
  }
  return <Navigate to='/login' state={{form : location}} replace></Navigate>
};

export default PrivateRoute;