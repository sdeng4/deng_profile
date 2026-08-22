import { useState } from 'react'
import LoginModal from '../LoginModal/LoginModal'
import './Navbar.css'

function Navbar() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    <header className="navbar">
      <div className="navbar-logo">
        SD
      </div>

      <nav className="navbar-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="https://github.com/sdeng4" target="_blank">
          GitHub
        </a>
        <button onClick={()=>setShowLogin(true)}>Login</button>
      </nav>
    </header>

    {showLogin && (
      <LoginModal onClose={() => setShowLogin(false)} />
    )}
    </>
  )
}

export default Navbar