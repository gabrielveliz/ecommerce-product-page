import React from 'react';
import "../hojas-de-estilo/Menuw.css";
import imgLogo from "../images/logo.svg";

function Menuw(){
    return(
    <div className='cont_menu'>
      <div className='titulo'><img src={imgLogo} alt="logo" /></div>
      <nav className='menu'>
        <div className='opcionmenu'><span>Collections</span></div>
        <div className='opcionmenu'><span>Men</span></div>
        <div className='opcionmenu'><span>Women</span></div>
        <div className='opcionmenu'><span>About</span></div>
        <div className='opcionmenu'><span>Contact</span></div>
      </nav>
    </div>
    );
}

export default Menuw;