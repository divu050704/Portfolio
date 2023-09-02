import './App.css'
import "boxicons"
import { useState, useRef, useMemo, useEffect } from 'react'
import Skills from './components/Skills'
import gif from "./assets/giphy.gif"
import Projects from './components/Projects'
import Achievments from './components/Achievments'
function App() {
  const [menuOpen, setMenuOpen] = useState(false)  
  let section = "Home"
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const acheivmentsRef = useRef(null)

  
  if (useIsInViewport(homeRef)){
    section = "Home"
  }
  if(useIsInViewport(aboutRef)){
    section="About"
  }
  if(useIsInViewport(skillRef)){
    section = "Skills"
  }
  if (useIsInViewport(projectRef)){
    section="Projects"
  }
  if(useIsInViewport(acheivmentsRef)){
    section = "Achievments"
  }
  return (
    <div className="main" >
      <div className='glass'>
        <div className='nav--holder' >
          <nav className='navbar'>
            <a href="/#home" style={{textDecoration:"none"}}>
              <div className={section==="Home" ?'section--selected' : 'section-unselected'} onClick={() => section = ("Home")}>
                <h4 >
                  Home
                </h4>
              </div>
            </a>
            <a href="/#about"  style={{textDecoration:"none"}}>
              <div className={section==="About" ?'section--selected' : 'section-unselected'} onClick={() => section = "About"} >
                <h4 >
                  About
                </h4>
              </div>
            </a>
            <a href="/#skills" style={{textDecoration:"none"}}>
              <div className={section==="Skills" ?'section--selected' : 'section-unselected'} onClick={() => section = ("Skills")}>
                <h4 >
                  Skills
                </h4>
              </div>
            </a>
            <a href="/#projects" style={{textDecoration:"none"}}>
              <div className={section==="Projects" ?'section--selected' : 'section-unselected'} onClick={() => section = ("Projects")}>
                <h4 >
                  Projects
                </h4>
              </div>
            </a>
            <a href="/#achievments" style={{textDecoration:"none"}}>
              <div className={section==="Achievments" ?'section--selected' : 'section-unselected'} onClick={() => setSection("Achievments")}>
                <h4 >
                  Achievments
                </h4>
              </div>
            </a>
          </nav>
        </div>
        <nav className='navbar--mobile' onClick={() => setMenuOpen(prev => !prev)}>
            <box-icon name='menu' color='#928a97' ></box-icon>
            {menuOpen &&
              <ul className='navbar--mobile-data'>
                <li onClick={() => section="Home"}>< a  className={section==="Home" ? 'navbar--mobile-selected' : 'navbar--mobile-unselected'} href="/#home">Home</a></li>
                <li onClick={() => section="About"}><a className={section==="About" ? 'navbar--mobile-selected' : 'navbar--mobile-unselected'} href="/#about">About</a></li>
                <li onClick={() => section="Skills"}><a className={section==="Skills" ? 'navbar--mobile-selected' : 'navbar--mobile-unselected'} href="/#skills">Skills</a></li>
                <li onClick={() => section="Projects"}><a className={section==="Projects" ? 'navbar--mobile-selected' : 'navbar--mobile-unselected'} href="/#projects">Projects</a></li>
                <li onClick={() => section="Achievments"}><a className={section==="Achievments" ? 'navbar--mobile-selected' : 'navbar--mobile-unselected'} href="/#achievments">Achievments</a></li>

              </ul>
            }
          </nav>
        <div id="home" className='Home' ref={homeRef}>
          
          <p className='name'>
            Divyanshu Sharma
          </p>
          <p className='info'>
            Full Stack Developer
          </p>
          <div className='icons'>
            <a href="https://github.com/divu050704">
              <box-icon name='github' type='logo' color='white' animation="tada-hover" size="md"></box-icon>
            </a> &emsp;
            <a href="https://linkedin.com/in/divyanshu-sharma-849774263">
              <box-icon name='linkedin-square' type='logo' color='white' animation="tada-hover" size="md"></box-icon>
            </a>
          </div>
        </div>
        <div id="about" className='About' ref={aboutRef}>
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
        <div className='Skills' id="skills" ref={skillRef}>
          <p className='Skills--head' >Skills</p>
          <div className="Skills--card">
            <Skills />
          </div>
        </div>
        <div className='Projects' id="projects" ref={projectRef}>
          <p className='Projects--head'>Projects</p>
          <Projects />
        </div>
        <div className='Projects' id="achievments" ref={acheivmentsRef}>
          <p className='Projects--head'>Achievments</p>
          <Achievments />
        </div>
      </div>
    </div>
    
  )
  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return (isIntersecting);
  }
}

export default App
