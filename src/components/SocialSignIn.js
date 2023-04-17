import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebas.init';
const SocialSignIn = () => {
  const [signInWithGoogle, googleUser, googleUserLoading, googleUserError] = useSignInWithGoogle(auth);
  const navigate =useNavigate();
  let errorElement;
  if(googleUser){
    navigate("/dashboard")
  }
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