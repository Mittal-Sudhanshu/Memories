import React, { useState,useEffect } from 'react'
import logo from '../../images/logobar.png'
import './Navbar.css'
import {Link,useLocation} from 'react-router-dom'

const Navbar = () => {

  let location = useLocation();

  const [click,setClick] = useState(false)
  const handleClick = ()=>{
    setClick(!click)
    console.log('click');
  }

  useEffect(()=>{
    console.log(location)
  },[location])

  return (
    <div className='nav'>
      <nav className='navigation'>
        <div className="logo">
          <img src={logo} alt="" />
          <h1>IIIT RANCHI</h1>
        </div>

        <div className={click ? 'menu-close' : 'menu-open'}>
          <ul>
            <li><Link  className={location.pathname === '/' ? 'click' : 'unclick'} to='/'>Home</Link></li>
            <li><Link  className={location.pathname === '/about' ? 'click' : 'unclick'} to='/about'>Team</Link></li>
            <li><Link  className={location.pathname === '/videos' ? 'click' : 'unclick'} to='/videos'>Videos</Link></li>
            <li><Link  className={location.pathname === '/gallery' ? 'click' : 'unclick'} to='/gallery'>Gallery</Link></li>
          </ul>
        </div>

          <i class="fa-solid fa-bars menu" onClick={handleClick}></i>
      </nav>
    </div>
  )
}

export default Navbar