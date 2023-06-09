import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebas.init';

const RequireAuth = ({children}) => {
  const [user,loading]=useAuthState(auth);
  const location=useLocation();
  if(loading){
    return <h1>Loading ...</h1>
  }
  if(!user){
    return <Navigate to="/sign-in" state={{from:location}}replace/>
  }
  return children;
};

export default RequireAuth;