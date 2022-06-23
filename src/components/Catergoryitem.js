import React from 'react'
import { Link } from 'react-router-dom';

const Catergoryitem = ({ item }) => {
  return (
    <div className='product-item flex-1 my-6 mx-2 relative'>
      <Link to={`/products/${item.cat}`}>
        <img src={item.img} className="h-full w-full object-cover" alt="products" />
        <div className='absolute h-full w-full top-0 left-0 flex items-center justify-center flex-col'>
          <h1 className='font-bold mb-4 text-white text-center text-2xl'>{item.title}</h1>
          <button className='bg-white text-sm p-2.5 hover:bg-red-300 font-semibold'>SHOP NOW </button>
        </div>
      </Link>

    </div>
  )
}

export default Catergoryitem;