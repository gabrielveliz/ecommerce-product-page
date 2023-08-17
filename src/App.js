import './App.css';
import Menuw from './components/Menuw';
import CarroPerfil from './components/CarroPerfil';
import Galeria from './components/Galeria';
import ProductoDetalle from './components/ProductoDetalle';
import GaleriaFlotante from './components/GaleriaFlotante';
import GaleriaMobile from './components/GaleriaMobile';
import MenuMob from './components/MenuMob';
import Fot from './components/Fot';
import {useState} from "react";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div>
    <GaleriaFlotante></GaleriaFlotante>
    <div className="contenedor">

      <div className='fila1'> 
        <div className='men'>
          <Menuw></Menuw>
        </div>
        <div className='men_mob'>
          <MenuMob></MenuMob>
        </div>
        
        <CarroPerfil  total={total} setTotal={setTotal}></CarroPerfil>
      </div>

      <div className='fila2'>
        <div className='fila2_izq'>
          <div className='galmob'><GaleriaMobile/></div>
          <div className='galdes'><Galeria></Galeria></div>
          
        </div>

        <div className='fila2_der'>
          <ProductoDetalle total={total} setTotal={setTotal}></ProductoDetalle>
        </div>
      </div>
      
    </div>
    <Fot></Fot>
    </div>
  );
}

export default App;
