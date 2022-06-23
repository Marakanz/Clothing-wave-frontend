import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BASE_URL } from '../utilities/util';
import Product from './Product';

const Products = ({ sort, filters, cat}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=> {
    const getProducts = async() => {
      try{
        const res = await axios.get(
          cat ? 
          `${BASE_URL}/products?category=${cat}` :
          `${BASE_URL}/products`
        );
        console.log(res.data);
        setProducts(res.data);
        setFilteredProducts(res.data);
      } catch(error){
        console.log(error)
      }
      
    }
    getProducts();
  },[cat])

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter((item) => 
      Object.entries(filters).every(([key, value]) => 
      item[key].includes(value)
      ))
    );
  },[products, cat, filters])

  useEffect(()=> {
    if(sort==="newest"){
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.createdAt - b.createdAt) 
        )
    } else if(sort==="asc"){
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.price - b.price) 
        )
    } else {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => b.price - a.price) 
        )
    }
  },[sort])
  
  return (
    <div className='flex flex-wrap justify-around py-12 px-4 bg-slate-100 items-center'>
        { cat ? filteredProducts.map((item)=>(
            <Product key={item._id} item={item}/>
        )) : 
        products.slice(0,8).map((item) => (
          <Product key={item._id} item={item}/>
        ))}
    </div>
  )
}

export default Products;