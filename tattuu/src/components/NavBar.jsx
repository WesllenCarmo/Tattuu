import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/work'>Work</Link>
      <Link to='/about'>About Us</Link>
      <Link to='/services'>Services</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default NavBar