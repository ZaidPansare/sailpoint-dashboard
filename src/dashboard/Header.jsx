import React from 'react'
import  './Header.css'
import { FaHome,FaPen} from "react-icons/fa";

const Header = () => {
  return (
    <div>
        <section className='bg-gray-100'>
        <div className="h-left flex">
        <FaHome className='mr-3' />Home
        </div>
        <div className="h-right ">
            <button className='flex items-center px-2 text-xs bg-white text-gray border-solid border border-gray-50 h-8 rounded'>< FaPen className='mr-3' />Edit</button>
        </div>
        </section>

    </div>
  )
}

export default Header