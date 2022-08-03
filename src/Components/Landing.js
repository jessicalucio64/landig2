import React from 'react'
import "./Landing.css";
import "./Landing.scss";
import "./Granada.scss";
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
import cocina from '../media/Granada/cocina-hacienda-valbuena-granada.webp';
import comedor from '../media/Granada/comedor-hacienda-valbuena-granada.webp';
import cuarto2 from '../media/Granada/cuarto-dos-hacienda-valbuena-granada.webp';
import cuarto3 from '../media/Granada/cuarto-tres-hacienda-valbuena-granada.webp';

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
        <button href="#" className='boton__whatsapp'>
          <div className='container__whatsapp'>
            <img src={whatsapp} className='img__whatsapp' alt=""/>
            <p className='texto__whatsapp'>Enviar WhatsApp</p>
          </div>
        </button>
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

        <button href="#" className='boton__mapa'>
          <div className='container__mapa'>
            <img src={mapa} className='img__mapa' alt=""/>
            <p className='texto__mapa'>Enviar WhatsApp</p>
          </div>
        </button>

      </div>
      <div className='slider'>

        <div class="container">
        <ul class="slides">
          <li id="slide1"><img src={granada} className='' alt=""/></li>
          <li id="slide2"><img src={cocina} className='' alt=""/></li>
          <li id="slide3"><img src={comedor} className='' alt=""/></li>
          <li id="slide4"><img src={cuarto2} className='' alt=""/></li>
          <li id="slide5"><img src={cuarto3} className='' alt=""/></li>
        </ul>

        <ul class="thumbnails">
          <li><a href="#slide1"><img src={granada} className='' alt=""/></a></li>
          <li><a href="#slide2"><img src={cocina} className='' alt=""/></a></li>
          <li><a href="#slide3"><img src={comedor} className='' alt=""/></a></li>
          <li><a href="#slide4"><img src={cuarto2} className='' alt=""/></a></li>
          <li><a href="#slide5"><img src={cuarto3} className='' alt=""/></a></li>
        </ul>
      </div>

      </div>
      <div className='container__granada'>
        
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
          <button href="#" className='boton__visita'>
            <div className='container__visita'>
              <img src={whatsapp} className='img__visita' alt=""/>
              <p className='texto__visita'>Agendar Visita</p>
            </div>
          </button>
          
        </div>
        
        
        
      </div>
      <div className='slider2'>

        <div class="container">
        <ul class="slides">
          <li id="slide11"><img src={granada} className='' alt=""/></li>
          <li id="slide12"><img src={cocina} className='' alt=""/></li>
          <li id="slide13"><img src={comedor} className='' alt=""/></li>
          <li id="slide14"><img src={cuarto2} className='' alt=""/></li>
          <li id="slide15"><img src={cuarto3} className='' alt=""/></li>
        </ul>

        <ul class="thumbnails1">
          <li><a href="#slide11"><img src={granada} className='' alt=""/></a></li>
          <li><a href="#slide12"><img src={cocina} className='' alt=""/></a></li>
          <li><a href="#slide13"><img src={comedor} className='' alt=""/></a></li>
          <li><a href="#slide14"><img src={cuarto2} className='' alt=""/></a></li>
          <li><a href="#slide15"><img src={cuarto3} className='' alt=""/></a></li>
        </ul>
      </div>

      </div>
      <div className='container__bilbao'>
        
        <div className='container__bilbao__texto'>
          <h3 className='titulo__granada'>BILBAO</h3>
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
          <button href="#" className='boton__visita'>
            <div className='container__visita'>
              <img src={whatsapp} className='img__visita' alt=""/>
              <p className='texto__visita'>Agendar Visita</p>
            </div>
          </button>
          
        </div>
        
        
        
      </div>
      <div className='fondo__verde'>
      <div className='slider3'>

        <div class="container">
        <ul class="slides">
          <li id="slide21"><img src={granada} className='' alt=""/></li>
          <li id="slide22"><img src={cocina} className='' alt=""/></li>
          <li id="slide23"><img src={comedor} className='' alt=""/></li>
          <li id="slide24"><img src={cuarto2} className='' alt=""/></li>
          <li id="slide25"><img src={cuarto3} className='' alt=""/></li>
        </ul>

        <ul class="thumbnails">
          <li><a href="#slide21"><img src={granada} className='' alt=""/></a></li>
          <li><a href="#slide22"><img src={cocina} className='' alt=""/></a></li>
          <li><a href="#slide23"><img src={comedor} className='' alt=""/></a></li>
          <li><a href="#slide24"><img src={cuarto2} className='' alt=""/></a></li>
          <li><a href="#slide25"><img src={cuarto3} className='' alt=""/></a></li>
        </ul>
        </div>

      </div>
      <div className='container__mallorca'>

      <div className='container__granada__texto'>
      <h3 className='titulo__granada'>MALLORCA</h3>
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
      <button href="#" className='boton__visita'>
        <div className='container__visita'>
          <img src={whatsapp} className='img__visita' alt=""/>
          <p className='texto__visita'>Agendar Visita</p>
        </div>
      </button>

      </div>



      </div>

        
      </div>
      <div className='container__valencia'>
        <div className='valencia__container'>
          <div className='siider__valencia'>

  <div class="container">
  <ul class="slides">
    <li id="slide1"><img src={granada} className='' alt=""/></li>
    <li id="slide2"><img src={cocina} className='' alt=""/></li>
    <li id="slide3"><img src={comedor} className='' alt=""/></li>
    <li id="slide4"><img src={cuarto2} className='' alt=""/></li>
    <li id="slide5"><img src={cuarto3} className='' alt=""/></li>
  </ul>

  <ul class="thumbnails">
    <li><a href="#slide1"><img src={granada} className='' alt=""/></a></li>
    <li><a href="#slide2"><img src={cocina} className='' alt=""/></a></li>
    <li><a href="#slide3"><img src={comedor} className='' alt=""/></a></li>
    <li><a href="#slide4"><img src={cuarto2} className='' alt=""/></a></li>
    <li><a href="#slide5"><img src={cuarto3} className='' alt=""/></a></li>
  </ul>
  </div>

          </div>
          <div className='container__valencia'>
          <div className='container__valencia__texto'>
          <h3 className='titulo__valencia'>BILBAO</h3>
          <div className='especificaciones__valencia'>
            <img src={terreno} className='icono__valencia' alt=""/>
            <div className='especificaciones__texto_valencia'>
              <p className='especificaciones__texto__titulo'>m2 de terreno:</p>
              <p className='especificaciones__texto__subtitulo'>140 ms</p>
            </div>
          </div>
          <div className='especificaciones__valencia'>
            <img src={terreno} className='icono__valencia' alt=""/>
            <div className='especificaciones__texto_valencia'>
              <p className='especificaciones__texto__titulo'>m2 de terreno:</p>
              <p className='especificaciones__texto__subtitulo'>140 ms</p>
            </div>
          </div>
          <div className='especificaciones__valencia'>
            <img src={terreno} className='icono__valencia' alt=""/>
            <div className='especificaciones__texto_valencia'>
              <p className='especificaciones__texto__titulo'>m2 de terreno:</p>
              <p className='especificaciones__texto__subtitulo'>140 ms</p>
            </div>
          </div>
          <div className='especificaciones__valencia'>
            <img src={terreno} className='icono__valencia' alt=""/>
            <div className='especificaciones__texto_valencia'>
              <p className='especificaciones__texto__titulo'>m2 de terreno:</p>
              <p className='especificaciones__texto__subtitulo'>140 ms</p>
            </div>
          </div>
          <div className='especificaciones__valencia'>
            <img src={terreno} className='icono__valencia' alt=""/>
            <div className='especificaciones__texto_valencia'>
              <p className='especificaciones__texto__titulo'>m2 de terreno:</p>
              <p className='especificaciones__texto__subtitulo'>140 ms</p>
            </div>
          </div>
          
         
          
         
          <button href="#" className='boton__visita'>
            <div className='container__visita'>
              <img src={whatsapp} className='img__visita' alt=""/>
              <p className='texto__visita'>Agendar Visita</p>
            </div>
          </button>
          
          </div>
  
          </div>

        </div>
        
      </div>
      
      
    

    </div>
  )
}

export default Landing