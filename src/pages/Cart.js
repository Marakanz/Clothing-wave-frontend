import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Shoe from "../product-images/mark-broadhead-mP8cSogl11k-unsplash.jpg";
import { BsPlusLg, } from "react-icons/bs";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useSelector } from 'react-redux';

const Cart = () => {

  const cart = useSelector(state => state.cart);
  const [shipping, setShipping] = useState(7);
  const [discount, setDiscount] = useState(10)
  return (
    <div className='home'>
      <Navbar />
      <Announcement />
      <div className='p-2.5 md:p-5'>
        <h1 className='font-medium text-2xl text-center'>YOUR BAG</h1>
        <div className='flex px-5 justify-between items-center'>
          <button className='p-2 font-medium text-sm cursor-pointer border border-black'>CONTINUE SHOPPING</button>
          <div className='flex underline'>
            <span className='mr-3'>Shopping Bag</span>
            <span>Your wishlist</span>
          </div>
          <button className='p-2 font-medium text-sm cursor-pointer bg-black text-white'>CHECKOUT NOW</button>
        </div>
        <div className='flex flex-col md:flex-row justify-between py-3'>
          <div className='md:w-3/4'>
            {
              cart?.products.map((item) => (
                <div className='flex justify-around border-b border-gray-200'>
                  <div className='p-5 flex w-3/5'>
                    <img src={item.img} className="w-32 md:w-48 h-32 md:h-48" />
                    <div className='flex w-2/5 mx-5 flex-col text-lg justify-around'>
                      <h1><b>Product:</b>  {item.title}</h1>
                      <p><b>ID:</b> 27898080949</p>
                      <div className='h-4 w-4 md:h-8 md:w-8 rounded-full bg-black'></div>
                      <p><b>Size:</b> {item.size}</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex items-center text-sm m-3'>
                      <HiMinus />
                      <h1 className='mx-3'> {item.quantity}</h1>
                      <HiPlus />
                    </div>.
                    <h1 className='text-xl font-medium'>${item.price}</h1>
                  </div>
                </div>
              ))}
          </div>

          <div className='md:w-1/4 flex flex-col justify-center'>
            <div className='h-3/5 border-gray-200 rounded-lg shadow-md p-6'>
              <h1 className='text-3xl'>ORDER SUMMARY</h1>
              <div className='checkout-line'>
                <p>Subtotal </p>
                <p>${cart.total}</p>
              </div>
              <div className='checkout-line'>
                <p>Estimated shipping </p>
                <p>${cart.quantity === 0 ? 0 : shipping}</p>
              </div>
              <div className='checkout-line'>
                <p>Discount </p>
                <p>{discount}%</p>
              </div>
              <div className='checkout-line font-semibold text-xl'>
                <p>Total </p>
                <p>${cart.quantity === 0 ? 0 : Math.round((cart.total + shipping) * (1 - discount / 100))}</p>
              </div>
              <button className='w-full p-2.5 bg-black text-white'>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;