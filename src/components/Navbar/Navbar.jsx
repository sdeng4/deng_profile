import { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/SDlogo.png'

function Navbar() {
  return (
    <>
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="SD logo"/>
      </div>

      <nav className="navbar-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="https://github.com/sdeng4" target="_blank">
          GitHub
        </a>
        <a href="">Other</a>
      </nav>
    </header>
    </>
  )
}

export default Navbar