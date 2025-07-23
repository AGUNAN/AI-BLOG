import React from 'react';
import { assets } from '../asset/assets.js';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer ">
      <img
        onClick={() => {
          navigate('/');
        }}
        src={assets.logo}
        alt=" logo"
        className="w-32  cursor-pointer sm:w-44"
      />
      <button
        onClick={() => {
          navigate('/admin');
        }}
        className="flex items-center gap-2 rounded-full text-md  cursor-pointer bg-primary px-10 py-2.5"
      >
        Login
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </div>
  );
};

export default NavBar;
