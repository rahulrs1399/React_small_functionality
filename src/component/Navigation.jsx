import React from 'react'
import { Link } from "react-router-dom";
import './homestyle.css'

const Navigation = () => {
  return (

    <nav className=' flex justify-center m-4'>
        <h1 className=' pr-[400px] flex text-center align-middle font-bold text-3xl text-green-400'>Funtionality Store</h1>
        <div className=' pr-[700px]'>
        <Link className='linkTab' to={"/"}>Home</Link>
        </div>
    </nav>
    );
};

export default Navigation;