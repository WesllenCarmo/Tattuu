import React from 'react'
import { Link } from 'react-router-dom'
import TattuuLogo from '../assets/tattuu-logo.webp'

const NavBar = () => {
  return (
    <nav className='flex w-full justify-between items-center px-12 py-3 bg-custom-dark-purple text-custom-white'>
      <div className='flex'>
        <Link to='/'>
          <img className='w-25' src={TattuuLogo} alt="Logo do Tattoo: Um desenho vector de um tatu com o texto 'Tattoo'." />
        </Link>
      </div>
      <div className='flex gap-16 text-2xl'>
        <Link to='/' className='hover:text-custom-white-modified transition duration-400'>Início</Link>
        {/* <Link to='/about' className='hover:text-custom-white-modified transition duration-400'>Sobre Nós</Link>
         */}
         <a href="/#about">Sobre Nós</a>
        <Link to='/work' className='hover:text-custom-white-modified transition duration-400'>Trabalhos</Link>
        <Link to='/services' className='hover:text-custom-white-modified transition duration-400'>Serviços</Link>
        <Link to='/contact' className='hover:text-custom-white-modified transition duration-400'>Contatos</Link>
      </div>
    </nav>
  )
}

export default NavBar