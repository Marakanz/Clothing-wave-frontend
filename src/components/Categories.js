import React from 'react'
import Catergoryitem from './Catergoryitem';
import { Catergory } from './data';

const Categories = () => {
  return (
    <div className='md:flex md:p-5 justify-between bg-red-200'>
        { Catergory.map((item)=> (
            <Catergoryitem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default Categories;