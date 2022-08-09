import React, { useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import './Header.css'

export default function Header() {
    const [header, setHeader] = useState(false)
    const hamRef = useRef(null);
    const menuRef = useRef(null);

    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        if (window.scrollY > 50) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    })

    const handleHamburgerClick = (event) => {
        let activeItem = document.querySelector(".dropdown--active")
        event.target.classList.toggle("hamburger-home--active")
        menuRef.current.classList.toggle('btns-wrapper--active')
        if(activeItem){
          activeItem.classList.remove("dropdown--active")
        }
      }
    return (
        <header className={'main-header container-padding' + (header ? " main-header--active" : '')}>
            <Link to="/">
                <img src={logo} className='logo-img' alt="" />
            </Link>
            <div className="btns-wrapper" ref={menuRef}>
                <Link to="/login" className='btn-primary btn-login'>Login</Link>
                <Link to="/signup" className='btn-primary'>Create My Resume</Link>
            </div>
            <ul className="hamburger-home" ref={hamRef} onClick={handleHamburgerClick}>
                <li className="layer"></li>
                <li className="layer"></li>
                <li className="layer"></li>
            </ul>
        </header>
    )
}
