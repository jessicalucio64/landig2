import React from 'react'
import "./Landing.css";
import fondo from '../media/iconografia-hacienda-valbuena-escritorio.webp';

const Landing = () => {
  return (
    <div className='container__landing'>
        <img src={fondo} className='fondo__img' alt=""/>
        <div className='titulo__container'>
          <h1><span className='titulo'>HV</span><span className='titulo1'>HACIENDA VALBUENA</span></h1>
        </div>
        <div className='subtitulo__container'>
          <h2>$i SE PUEDE VIVIR CON LUJO</h2>
        </div>
    </div>
  )
}

export default Landing