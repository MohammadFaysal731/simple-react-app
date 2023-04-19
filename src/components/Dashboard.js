import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebas.init';

const Dashboard = () => {
  const [user]=useAuthState(auth);
  return (
    <div>
      <h3 className='text-center m-4'>Welcome to dashboard </h3>
     {user && <h1 className='text-center m-4'>Hello World</h1>}
    </div>
  );
};

export default Dashboard;