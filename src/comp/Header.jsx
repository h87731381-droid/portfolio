import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Book from './Book'
import { useState } from 'react'


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <header>
        <a href="/" className='hyunju'>
          HYUN JU <img src="solar_star-ring-bold.svg" alt="" />
        </a>

        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>

          <NavLink to="/" className='HOME' onClick={() => setIsMenuOpen(false)} ><span>HOME</span></NavLink>
          <NavLink to="/about" className='ABOUT' onClick={() => setIsMenuOpen(false)} ><span>ABOUT</span></NavLink>
          <NavLink to="/skills" className='TECH_ORBIT' onClick={() => setIsMenuOpen(false)} ><span>TECH ORBIT</span></NavLink>
          <NavLink to="/project" className='PROJECT' onClick={() => setIsMenuOpen(false)} ><span>PROJECT</span></NavLink>
          <NavLink to="/book" className='GUEST_BOOK' onClick={() => setIsMenuOpen(false)} ><span>GUEST BOOK</span></NavLink>

        </nav>



        <div id="nav-icon3" className={isMenuOpen ? 'open' : ''} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/project' element={<Project />} />
          <Route path='/book' element={<Book />} />
        </Routes>
      </main>
    </Router>
  )
}

export default Header