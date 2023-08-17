import React from 'react';
import "../hojas-de-estilo/GaleriaFlotante.css";
import { useState } from 'react';
import min1 from "../images/image-product-1-thumbnail.jpg";
import min2 from "../images/image-product-2-thumbnail.jpg";
import min3 from "../images/image-product-3-thumbnail.jpg";
import min4 from "../images/image-product-4-thumbnail.jpg";


function GaleriaFlotante(){
  
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

  

  
  return(
    <div className='flotante' id='flotante'>
      <div className='contenedor_flo'>
      <Carrousel images={images}/>
      </div>
    </div>
  );
  
}

const Carrousel = ({images}) =>{
  
  const [indice,setIndice] = useState(0);
  
  return(
    <div>
      <div className='direc'>
          <div className='cerrar' onClick={cierre}>
          <svg width="21" height="22" xmlns="http://www.w3.org/2000/svg">
            <path className='color' d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" 
            fillRule="evenodd"/></svg>
          </div>
      </div>
      <div className='img_principal'>
        <div className='izq' onClick={back}>
        <span><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path className='colordir' d="M11 1 3 9l8 8"  strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
          </span>
        </div>
        <div className='der' onClick={next}>
          <span><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path className='colorder' d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
          </span>
        </div>
      <img src={images[indice].url} alt={images[indice].title} />
          
      </div>
      <div className='miniaturas'>
          <div onClick={()=>setIndice(0)} className={
              indice===0 ? 'seleccionado' : 'noseleccionado'}>
                <img className={
            indice===0 ? 'opac' : 'noopac'} src={min1} alt="miniatura1" /></div>
          <div onClick={()=>setIndice(1)} className={
              indice===1 ? 'seleccionado' : 'noseleccionado'}>
                <img className={
            indice===1 ? 'opac' : 'noopac'} src={min2} alt="miniatura2" /></div>
          <div onClick={()=>setIndice(2)} className={
              indice===2 ? 'seleccionado' : 'noseleccionado'}>
                <img className={
            indice===2 ? 'opac' : 'noopac'} src={min3} alt="miniatura3" /></div>
          <div onClick={()=>setIndice(3)} className={
              indice===3 ? 'seleccionado' : 'noseleccionado'}>
                <img className={
            indice===3 ? 'opac' : 'noopac'} src={min4} alt="miniatura4" /></div>
          {}
      </div>
    </div>
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

function cierre(){
  document.getElementById("flotante").style.display="none" ;
}



export default GaleriaFlotante;