import React from 'react';
import "../hojas-de-estilo/Galeria.css";
import imgppal from "../images/image-product-1.jpg";
import min1 from "../images/image-product-1-thumbnail.jpg";
import min2 from "../images/image-product-2-thumbnail.jpg";
import min3 from "../images/image-product-3-thumbnail.jpg";
import min4 from "../images/image-product-4-thumbnail.jpg";

function Galeria(){
    return(
        <div>
            <div className='img_principal'>
                <img onClick={abrir} src={imgppal} alt="imagen_principal" />
            </div>
            <div className='miniaturas'>
                <div className='seleccionado1' onClick={abrir} ><img  src={min1} alt="miniatura1" /></div>
                <div onClick={abrir} ><img src={min2} alt="miniatura2" /></div>
                <div onClick={abrir} ><img src={min3} alt="miniatura3" /></div>
                <div onClick={abrir} ><img src={min4} alt="miniatura4" /></div>
            </div>
        </div>
    );
}

function abrir(){
  document.getElementById("flotante").style.display="flex" ;
}

export default Galeria;