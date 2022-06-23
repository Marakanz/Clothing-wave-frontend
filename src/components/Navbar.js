import React from 'react';
import "../styles/navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  console.log(quantity);


  return (
    <section className='p-4 md:p-10 h-14 md:flex  items-center'>
      <div className='wrapper'>
        <div className='left'>
          <div className='border border-gray-300 flex text-black md:pl-3 py-1'>
            <input type="search" className='focus:outline-none w-16 md:w-48 mr-1'></input>
            <SearchIcon />
          </div>
        </div>
        <div className='center flex items-center w-1/5'>
          <h1 className='font-bold text-xl text-center'>WAVE</h1>
        </div>
        <div className='right w-3/5 md:flex justify-end items-center'>
          <div className='flex items-center justify-end'>
            <div className='font-semibold mr-1 md:mr-3'>REGISTER</div>
            <div className='font-semibold mr-2 md:mr-3.5'>SIGN IN</div>
            <Link to={"/cart"}>
              <Badge badgeContent={quantity} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Navbar;
