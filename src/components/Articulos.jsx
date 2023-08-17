import React from 'react';
import "../hojas-de-estilo/Articulos.css";
import imgppal from "../images/image-product-1.jpg";
import dele from "../images/icon-delete.svg";


const Articulos = ({total, setTotal}) =>{
  
  let suma = 125 * total;

  return(
    <div className='con_articulos'>
      <div className='con_articulos_titulo'>
        <span>Cart</span>
      </div>
      <div className='con_articulos_lista'>
        {total? 
        <div className='lista'>
          <div className='lleno'>
            <div className='llenoimg'><img src={imgppal} alt='imagenproduct'></img></div>
            <div className='llenotex'>
              <div><span className='gr'>Fall Limited Edition Sneakers</span></div>
              <div><span className='gr'>$125.00 x {total}  <span className='negrita'>${suma}.00 </span></span></div>
            </div>
            <div className='llenologo' onClick={borrar}><img src={dele} alt='iconotrash'></img></div>
          </div>
          <div className='botoncheck' onClick={mensaje}><span>Checkout</span></div>
        </div>
        

        :<div className='empty'><span>Your cart is empty.</span></div>
        }
        
        
        
      </div>
    </div>
  );

  function borrar(){
    setTotal(0);
  }
  function mensaje(){
    window.alert("$"+suma+ " dollars charged to your card, thank you for purchasing.");
    setTotal(0);
  }
}


export default Articulos;