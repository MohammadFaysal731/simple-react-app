import React, { useEffect } from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../firebas.init';
const SocialSignIn = () => {
  const [signInWithGoogle, googleUser, googleUserLoading, googleUserError] = useSignInWithGoogle(auth);
  let errorElement;
  const navigate =useNavigate();
  const location=useLocation();
  const from = location.state?.from?.pathname || "/"
 useEffect(() => {
   if (googleUser) {
     navigate(from, { replace: true });
   }
 }, [googleUser, navigate, from]);
  if (googleUserLoading){
    return <h1>Loading ...</h1>
  }
  if(googleUserError){
    errorElement = <h1 className='text-danger'>{googleUserError?.message}</h1>
  }
    return (
      <div>
        {errorElement}
        <button onClick={() => signInWithGoogle()} className="btn btn-dark">
          Continue with Google
        </button>
      </div>
    );
};

export default SocialSignIn;