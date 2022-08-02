import React from 'react'
import "./Landing.css";
import fondo from '../media/iconografia-hacienda-valbuena-escritorio.webp';
import whatsapp from '../media/whatsapp-hacienda-valbuena.svg';
import fondo2 from '../media/fondo-maps-escritorio.webp'


const Landing = () => {
  return (
    <div className='container__landing'>
      <div className='contanier__titulos'>
        <img src={fondo} className='fondo__img' alt=""/>
        <div className='titulo__container'>
          <h1><span className='titulo'>HV</span><span className='titulo1'>HACIENDA VALBUENA</span></h1>
        </div>
        <div className='subtitulo__container'>
          <h2>$i SE PUEDE VIVIR CON LUJO</h2>
        </div>
      </div>
        
      <div className='container__textos'>
        <p>Agenda una cita para conocer tu nueva casa</p>
        <button className='boton__whatsapp'>
          <div className='container__whatsapp'>
            <img src={whatsapp} className='img__whatsapp' alt=""/>
            <p className='texto__whatsapp'>Enviar WhatsApp</p>
          </div>
        </button>
      </div>

      <div className='container2'>
        <img src={fondo2} className='fondo__img' alt=""/>

      </div>

    </div>
  )
}

export default Landing