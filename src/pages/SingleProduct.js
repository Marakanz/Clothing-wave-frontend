import React, { useEffect, useState } from 'react'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { FaPlus, FaMinus } from "react-icons/fa";
import { useLocation } from 'react-router';
import axios from 'axios';
import { BASE_URL } from '../utilities/util';
import { addProduct } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';



const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const [ size, setSize ] = useState("");
    const [color, setColor ] = useState('');
    const [quantity, setQuantity] = useState(1);
    const location = useLocation();
    const dispatch = useDispatch();
    const ID = location.pathname.split("/")[2];
    const handleQuantity = (sign) => {
        if(sign === "inc"){
            setQuantity(quantity+1)
        } else {
            setQuantity(quantity-1);
        }
    }

    const handleClick = () => {
        //update cart
        product.size = size;
        product.color = color;
        dispatch(
            addProduct({ ...product, quantity })
        )
    }
    useEffect(()=> {
        const fetchProduct = async() => {
            try{
                const res = await (await axios.get(`${BASE_URL}/products/${ID}`)).data;
                console.log(res);
                setProduct(res);
            } catch(error){
                console.log(error)
            }
        }
        fetchProduct();
    },[])
    return (
        <div className='home'>
            <Navbar />
            <Announcement />
            <div className='p-5 md:p-12 flex flex-col md:flex-row'>
                <div className='md:w-1/2'>
                    <img src={product.img} className="w-full object-contain h-96" />
                </div>
                <div className='md:w-1/2 md:px-12 text-center md:text-left'>
                    <h1 className='text-2xl'>{product.title}</h1>
                    <p className='my-5'>{product.desc}</p>
                    <span className='text-2xl'>${product.price}</span>
                    <div className='flex my-7 justify-between'>
                        <div className='flex items-center'>
                            <h1 className='text-xl'>Color:</h1>
                            {product.color?.map((c , index)=> (
                                <div key={index} onClick={()=>setColor(c)} className={`color-options bg-${c}-400`}></div>
                            ))}
                        </div>
                        <select onChange={(e) => setSize(e.target.value)} defaultValue={"Size"} className='border hover:border-3 hover:border-black p-1 ml-2.5'>
                            <option disabled>Size</option>
                            { product.size?.map((s, index) => (
                                <option key={index}>{s}</option>
                            ))}
                        </select>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center'>
                            <FaMinus onClick={() => handleQuantity("dec")}/>
                            <div className='mx-3 border border-teal-700 rounded-lg w-7 h-7 flex justify-center items-center font-bold'>
                                {quantity}
                            </div>
                            <FaPlus onClick={() => handleQuantity("inc")}/>
                        </div>
                        <button onClick={handleClick} className='border text-sm p-3 bg-gray-100  hover:bg-teal-600 hover:text-white cursor-pointer'>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div> 
            <Newsletter />
            <Footer />
        </div>
    )
}

export default SingleProduct;