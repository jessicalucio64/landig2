import React from 'react'
import "./Landing.css";
import fondo from '../media/iconografia-hacienda-valbuena-escritorio.webp';
import whatsapp from '../media/whatsapp-hacienda-valbuena.svg';
import fondo2 from '../media/fondo-maps-escritorio.webp';
import mapa from '../media/localizacion-hacienda-valbuena.svg';
import granada from '../media/frente-hacienda-valbuena-granada.webp';
import terreno from '../media/iconos/terreno-hacienda-valbuena.svg';
import metros from '../media/iconos/metros-de-construccion-hacienda-valbuena.svg';
import dormitorios from '../media/iconos/dormitorios-hacienda-valbuena.svg';
import baños from '../media/iconos/dormitorios-hacienda-valbuena.svg';
import balcon from '../media/iconos/dormitorios-hacienda-valbuena.svg';


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
        <a href="#" className='boton__whatsapp'>
          <div className='container__whatsapp'>
            <img src={whatsapp} className='img__whatsapp' alt=""/>
            <p className='texto__whatsapp'>Enviar WhatsApp</p>
          </div>
        </a>
      </div>
      <div className='decoracion'>
        <div className='decoracion__verde'></div>
        <div className='decoracion__dorado'></div>
      </div>

      <div className='container2'>
        <img src={fondo2} className='fondo__img' alt=""/>
        <div className='subtitulo__fraccionamiento'>
          <h2> Fraccionamiento <span className='span__verde'>TIPO HACIENDA</span> ubicada en la Florida S.L.P</h2>
        </div>

        <a href="#" className='boton__mapa'>
          <div className='container__mapa'>
            <img src={mapa} className='img__mapa' alt=""/>
            <p className='texto__mapa'>Enviar WhatsApp</p>
          </div>
        </a>

      </div>
      <div className='container__granada'>
        <img src={granada} className='granada__img' alt=""/>
        <div className='container__granada__texto'>
          <h3 className='titulo__granada'>GRANADA</h3>
          <div className='especificaciones__granada'>
            <img src={terreno} className='icono__granada' alt=""/>
            <div className='especificaciones__texto'>
              <p className='especificaciones__texto__titulo'>m2 de terreno:</p>
              <p className='especificaciones__texto__subtitulo'>140 ms</p>
            </div>
          </div>
          <div className='especificaciones__granada'>
            <img src={metros} className='icono__granada' alt=""/>
            <div className='especificaciones__texto'>
              <p className='especificaciones__texto__titulo'>m2 de construccion:</p>
              <p className='especificaciones__texto__subtitulo'>117 ms</p>
            </div>
          </div>
          <div className='especificaciones__granada'>
            <img src={dormitorios} className='icono__granada' alt=""/>
            <div className='especificaciones__texto'>
              <p className='especificaciones__texto__titulo'>Dormitorios:</p>
              <p className='especificaciones__texto__subtitulo'>3</p>
            </div>
          </div>
          <div className='especificaciones__granada'>
            <img src={baños} className='icono__granada' alt=""/>
            <div className='especificaciones__texto'>
              <p className='especificaciones__texto__titulo'>Baños:</p>
              <p className='especificaciones__texto__subtitulo'>3</p>
            </div>
          </div>
          <div className='especificaciones__granada'>
            <img src={balcon} className='icono__granada' alt=""/>
            <div className='especificaciones__texto'>
              <p className='especificaciones__texto__titulo'>Balcón:</p>
              <p className='especificaciones__texto__subtitulo'>1</p>
            </div>
          </div>
          <a href="#" className='boton__visita'>
            <div className='container__visita'>
              <img src={whatsapp} className='img__visita' alt=""/>
              <p className='texto__visita'>Agendar Visita</p>
            </div>
          </a>
          
        </div>
        
        
        
      </div>


    </div>
  )
}

export default Landing