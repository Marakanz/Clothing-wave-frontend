import React, { useState } from 'react'
import { useLocation } from 'react-router'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value
        })
    }
    console.log(filters);
    console.log(sort);

  return (
    <div className='product-page'>
        <Navbar/>
        <Announcement/>
        <h1 className='font-semibold my-5 px-4 text-2xl'>{cat}</h1>
        <div className='flex justify-between'>
            <div className='m-5 flex flex-col md:flex-row md:items-center'>
                <h1 className='text-xl mr-3 font-semibold'>Filter Items:</h1>
                <select className='filter my-3' defaultValue={"Color"} name="color" onChange={handleFilters}>
                    <option disabled>Color</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Pink</option>
                    <option>Black</option>
                    <option>Sand</option>
                </select>
                <select className='filter' defaultValue={"Size"} name="size" onChange={handleFilters}>
                    <option disabled>Size</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
            </div>
            <div className='m-5 flex flex-col md:flex-row md:items-center'>
                <h1 className='text-xl mr-3 font-semibold'>Sort Products:</h1>
                <select className='filter my-3' onChange={(e)=> setSort(e.target.value)} defaultValue={"newest"}>
                    <option value={"newest"}> Newest </option>
                    <option value={"asc"}>price (asc)</option>
                    <option value={"dsc"}>price (desc)</option>
                </select>
            </div>
        </div>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductList