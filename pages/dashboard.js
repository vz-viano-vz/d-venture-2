import { router } from 'next/router';
import React from 'react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../component/Navbar';

const dashboard = () => {
  const currentUser = useAuth();
  console.log(currentUser);

  if(currentUser.value==null) {
    router.push('/login');
  }
  

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default dashboard;
