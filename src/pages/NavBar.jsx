import React from 'react';
import Navbtn from '../components/Navbtn';
import LogoImg from '../Assets/Logo.svg';
import './NavBar.css'

const NavBar = () => {
    return ( 
        <nav className='NavBar'>
            <img className='LogoImg' src={LogoImg} alt="" />
            <div className='NavBtns'>
            <Navbtn />
            <Navbtn />
            <Navbtn />
            <Navbtn />
            </div>
        </nav>
     );
}
 
export default NavBar;