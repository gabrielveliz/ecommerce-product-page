import React from 'react';
import "../hojas-de-estilo/ProductoDetalle.css";
import imgMenos from "../images/icon-minus.svg";
import imgMas from "../images/icon-plus.svg";
import carrito from "../images/icon-cartwh.svg";
import { useState } from 'react';



function ProductoDetalle({total, setTotal}){

  const [cantidad, setCantidad] = useState(0);

    return(
        <div className='detalle'>
          <div className='titulo_com'><span>Sneaker Company</span></div>
          <div className='titulo_prod'><span>Fall Limited Edition Sneakers</span></div>
          <div className='these'><span>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</span></div>
          <div className='cont_valor'>
            <div className='valor'>
              <div className='valorbold'><span>$125.00</span></div>
              <div className='descuento'><span>50%</span></div>
            </div>
            <div className='valorlight'><span>$250.00</span></div>
          </div>
          <div className='cont_agregar'>
            <div className='agregar'>
              <div onClick={restar} className='restar'><img src={imgMenos} alt="menos" /></div>
              <div className='cantidad'><span>{cantidad}</span></div>
              
              <div onClick={sumar} className='aumentar'><img src={imgMas} alt="mas" /></div>
            </div>
            <div onClick={agregar} className='boton'><img src={carrito} alt="" /><span>Add to cart</span></div>
          </div>
          
          
        </div>
    );
    function restar(){
      if(cantidad>0){
        setCantidad(cantidad - 1)
      }
      
    }
    function sumar(){  
      setCantidad(cantidad + 1)

    }
    function agregar(){
      if(cantidad>0){
        setTotal(total + cantidad)
      }
    }
}



export default ProductoDetalle;