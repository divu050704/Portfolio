import './App.css'
import "boxicons"
import { useState } from 'react'
import Skills from './components/Skills'
import gif from "./assets/giphy.gif"
import Projects from './components/Projects'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="main" >
      <nav className='navbar'>
        <div className='section--selected'>
          <h4 >
            Home
          </h4>
        </div>
        <div className='seciton--unselected'>
          <h4 >
            About
          </h4>
        </div>
        <div className='section--unselected'>
          <h4 >
            Skills
          </h4>
        </div>
        <div className='section--unselected'>
          <h4 >
            Projects
          </h4>
        </div>
        <div className='section--unselected'>
          <h4 >
            Contacts
          </h4>
        </div>
      </nav>
      <div id="home" className='Home'>

        <nav className='navbar--mobile' onClick={() => setMenuOpen(prev => !prev)}>
          <box-icon name='menu' color='#928a97' ></box-icon>
          {menuOpen &&
            <ul className='navbar--mobile-data'>
              <li className='navbar--mobile-selected'>Home</li>
              <li className='navbar--mobile-unselected'>About</li>
              <li className='navbar--mobile-unselected'>Skills</li>
              <li className='navbar--mobile-unselected'>Projects</li>
            </ul>
          }
        </nav>
        <p className='name'>
          Divyanshu Sharma
        </p>
        <p className='info'>
          Full Stack Developer
        </p>
        <div className='icons'>
          <box-icon name='github' type='logo' color='#928a97' animation="tada-hover" size="md"></box-icon> &emsp;
          <box-icon name='linkedin-square' type='logo' color='#928a97' animation="tada-hover" size="md"></box-icon>
        </div>
      </div>
      <div id="about" className='About'>

        <div className='gif' >
          <img src={gif} />
        </div>
        <div className='about--card'>
          <div>
            <p className='about--card--head'>About Me</p>
            <p className='about--card-content'>As a passionate and versatile full stack developer, I thrive on turning innovative ideas into functional and engaging digital experiences. With a deep-rooted love for technology and a knack for problem-solving, I have embarked on a journey that constantly fuels my curiosity and drive to create impactful solutions.</p>
          </div>

        </div>
      </div>
      <div className='Skills' id="skills">
        <p className='Skills--head' >Skills</p>
        <div className="Skills--card">
          <Skills />
        </div>
      </div>
      <div className='Projects' id="projetcs">
        <p className='Projects--head'>Projects</p>
        <Projects />
      </div>
    </div>
    
  )
}

export default App
