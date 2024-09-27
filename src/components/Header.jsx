import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  
  return (
    <div className='bg-gray-100'>
      <div className="max-w-screen-2xl mx-auto px-[30px] flex justify-between items-center h-[60px]">
        <div>
        <Link to={"/"}>
        <h1>Hello Company</h1>
        </Link>

        </div>

        <div>
          <Link to={"/login"}>
          <button className='px-4 py-2 bg-purple-100 text-purple-600 rounded mr-4'>Login</button>
          </Link>
          <Link to={"/create-blog"}>
          <button className='px-4 py-2 bg-purple-600 text-white rounded'>Blog +</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header