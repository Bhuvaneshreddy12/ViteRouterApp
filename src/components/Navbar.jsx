import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='' width='100px'/>
      <ul>
        <li>Home</li>
        <li>products</li>
        <li>contact</li>
        <li>about</li>
      </ul>
      <button>Get started</button>
    </div>
  )
}

export default Navbar
