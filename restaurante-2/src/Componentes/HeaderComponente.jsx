
import headerImg from '../Media/inti-wasi-header.png';
import globalImg from '../Media/Global.png'; 
import './HeaderComponente.css'
import {Link} from "react-router-dom";





export default function Header() {
  return (
    <header>
    <div className='contenedor'>
      <div className='contenedor-header' >
        <a className='logo' href="#">
            <img src={headerImg} alt="Logo Inti Wasi blanco"></img>
        </a>
        <nav>
          <ul className='menu' >
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/historia">Historia</Link></li>
            <li><Link to="/reservas">Reservas</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><img className='global' src={globalImg} alt="Cambiar idioma"></img></li>
          </ul>
        </nav>
      </div>
  </div>
  </header>
  )
}
