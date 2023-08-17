import React from 'react';
import "../hojas-de-estilo/MenuMob.css";
import imgLogo from "../images/logo.svg";
import icono from "../images/icon-menu.svg";
import iconocierre from "../images/icon-close.svg";

function MenuMob(){
    return(
    <>
    <div id='flotantemen' className='menuflotante'>
      <div className='menu_mob'>
        <div onClick={cierre} className='iconocierre'>
          <img src={iconocierre} alt="cierre" />
        </div>
        <nav>
          <div className='opcionmenu_mob'><span>Collections</span></div>
          <div className='opcionmenu_mob'><span>Men</span></div>
          <div className='opcionmenu_mob'><span>Women</span></div>
          <div className='opcionmenu_mob'><span>About</span></div>
          <div className='opcionmenu_mob'><span>Contact</span></div>
        </nav>
      </div>
      
      <div onClick={cierre} className='elladooscuro'>

      </div>
    </div>
    <div className='cont_menu_mob'>
      <div className='iconomenu' onClick={abrir}><img src={icono} alt="iconomenu" /></div>
      <div className='titulo'><img src={imgLogo} alt="logo" /></div>
    </div>
    
    </>
    );

    function cierre(){
      document.getElementById("flotantemen").style.display="none" ;
    }
    function abrir(){
      document.getElementById("flotantemen").style.display="grid" ;
    }
}

export default MenuMob;