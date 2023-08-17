import React from 'react';
import "../hojas-de-estilo/GaleriaMobile.css";
import { useState } from 'react';

function GaleriaMobile(){
  
  const images = [
    {
      title:"imagenprincipal1",
      url:require( "../images/image-product-1.jpg")
    },
    {
      title:"imagenprincipal2",
      url:require( "../images/image-product-2.jpg")
    },
    {
      title:"imagenprincipal3",
      url:require( "../images/image-product-3.jpg")
    },
    {
      title:"imagenprincipal4",
      url:require( "../images/image-product-4.jpg")
    }
  ]

  const [indice,setIndice] = useState(0);

  return(
    <>
    <div className='img_principal_mob'>
        <div className='izq_mob' onClick={back}>
        <span><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path className='colordir' d="M11 1 3 9l8 8"  strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
          </span>
        </div>
        <div className='der_mob' onClick={next}>
          <span><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path className='colorder' d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
          </span>
        </div>
      <img src={images[indice].url} alt={images[indice].title} />
          
      </div>
    </>
  );

  function next(){
    
    if(indice <images.length -1){
      setIndice(indice + 1);
    }else{
      setIndice(0)
    }
  }
  function back(){
    
    if(indice >0){
      setIndice(indice -1);
    }else{
      setIndice(3)
    }
  }
}

export default GaleriaMobile;