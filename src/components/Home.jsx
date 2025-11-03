import React from 'react'
import { Link } from 'react-scroll'


const Home = () => {
  return (
    <>
    <nav className='items-center justify-center text-2xl p-4 sticky top-0 z-50'>
      <ul className='flex items-center justify-center cursor-pointer divide-x divide-gray-500'>
        <li className='px-4'><Link activeClass="active" to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='px-4'><Link activeClass="active" to="about" smooth={true} duration={500}>About</Link></li>
        <li className='px-4'><Link activeClass="active" to="education" smooth={true} duration={500}>Education</Link></li>
        <li className='px-4'><Link activeClass="active" to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li className='px-4'><Link activeClass="active" to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
    <div className="home min-h-screen flex flex-col items-center justify-center p-8">
      <p className="text-8xl chetta m-8">Sumeet Chauhan</p>
    </div>
    </>
  )
}

export default Home