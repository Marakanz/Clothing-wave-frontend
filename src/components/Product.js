import React from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
    return (
        <div className='product-item w-full md:w-60 md:h-72 my-2 flex justify-center items-center relative bg-slate-50'>
            <div className='w-48 h-48 rounded-full bg-white absolute'>

            </div>
            <img src={item.img} className="h-full object-cover object-top w-full z-20" />
            <div className='product-icon'>
                <div className='product-info'>
                    <AiOutlineShopping />
                </div>
                <div className='product-info'>
                    <Link to={`/product/${item._id}`}>
                        <FaSearch />
                    </Link>
                </div>
                <div className='product-info'>
                    <FaRegHeart />
                </div>
            </div>
        </div>
    )
}

export default Product;