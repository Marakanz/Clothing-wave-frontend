import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { Slideritems } from './data';

const Slider = () => {

    const [slideIndex, setSlideindex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideindex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideindex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    const Wrapper = styled.div`
        display: flex;
        height: 100vh;
        transform: translateX(${props => props.slideIndex * -100}vw);
        transition-property: all;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
    `;

    const Slide = styled.div`
        display: flex;
        height: 100%;
        width: 100vw;
        align-items: center;

    `

    return (
        <div className='hidden md:flex h-screen items-center relative overflow-hidden'>
            <div className='slider-arrow left-2.5 bg-white opacity-50'
                onClick={() => handleClick("left")}>
                <IoIosArrowDropleftCircle className='text-xl' />
            </div>
            <Wrapper slideIndex={slideIndex}>
                {Slideritems.map((item, index) => (
                    <main className='slide' key={index} style={{backgroundColor: `${item.bg}`}}>
                        <div className='w-1/2 h-full flex items-center'>
                            <img src={item.img} className="h-full w-full" alt='ad' />
                        </div>
                        <div className='w-1/2 p-12'>
                            <h1 className='text-7xl'>{item.title}</h1>
                            <p className='my-8 text-2xl'>{item.desc}</p>
                            <button className='px-4 py-2 cursor-pointer border border-black font-semibold'>SHOP NOW</button>
                        </div>
                    </main>
                ))}
            </Wrapper>
            <div className=' right-2.5 slider-arrow bg-white opacity-50'
                onClick={() => handleClick("right")}>
                <IoIosArrowDroprightCircle className='text-xl' />
            </div>
        </div>
    )
}

export default Slider;