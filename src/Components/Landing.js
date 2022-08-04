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
import baños from '../media/iconos/baños-hacienda-valbuena.svg';
import balcon from '../media/iconos/balcon-hacienda-valbuena.svg';
import cocina from '../media/Granada/cocina-hacienda-valbuena-granada.webp';
import comedor from '../media/Granada/comedor-hacienda-valbuena-granada.webp';
import cuarto2 from '../media/Granada/cuarto-dos-hacienda-valbuena-granada.webp';
import cuarto3 from '../media/Granada/cuarto-tres-hacienda-valbuena-granada.webp';
import hall from '../media/iconos/hall-de-tv-hacienda-valbuena.svg';
import terraza from '../media/iconos/terraza-hacienda-valbuena.svg';

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
      
      <div className='container__fraccionamiento'>
        <div className='fraccionamiento__container'>
          <div className='siider__fraccionamiento'>

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
          <div className='container__fraccionamiento'>
          <div className='container__fraccionamiento__texto'>
            <h3 className='titulo__fraccionamiento'>Granada</h3>
            <div className='especificaciones__fraccionamiento'>
              <img src={terreno} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>m<sup>2</sup> de terreno:</p>
                <p className='especificaciones__texto__subtitulo'>140 m<sup>2</sup></p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={metros} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>m<sup>2</sup> de construcción:</p>
                <p className='especificaciones__texto__subtitulo'>117 m<sup>2</sup></p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={dormitorios} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Dormitorios:</p>
                <p className='especificaciones__texto__subtitulo'>3</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={baños} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Baños:</p>
                <p className='especificaciones__texto__subtitulo'>3</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={balcon} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
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
        
       
        
      </div>

      <div className='decoracionrec'>
          <div className='decoracionrec__dorado'></div>
          <div className='decoracionrec__verde'></div>
         
      </div>

      <div className='container__fraccionamiento1'>
        <div className='fraccionamiento__container1'>
        <div className='container__fraccionamiento1'>
          <div className='container__fraccionamiento__texto1'>
            <h3 className='titulo__fraccionamiento1'>BILBAO</h3>
            <div className='especificaciones__fraccionamiento1'>
              <img src={terreno} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>m<sup>2</sup> de terreno:</p>
                <p className='especificaciones__texto__subtitulo1'>160 m<sup>2</sup></p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1'>
              <img src={metros} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>m<sup>2</sup> de construcción:</p>
                <p className='especificaciones__texto__subtitulo1'>138.5 m<sup>2</sup></p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1'>
              <img src={dormitorios} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Dormitorios::</p>
                <p className='especificaciones__texto__subtitulo1'>3</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1'>
              <img src={baños} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Baños:</p>
                <p className='especificaciones__texto__subtitulo1'>3</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1'>
              <img src={balcon} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Balcón:</p>
                <p className='especificaciones__texto__subtitulo1'>1</p>
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
          <div className='siider__fraccionamiento1'>

            <div class="container">
            <ul class="slides">
              <li id="slide11"><img src={granada} className='' alt=""/></li>
              <li id="slide12"><img src={cocina} className='' alt=""/></li>
              <li id="slide13"><img src={comedor} className='' alt=""/></li>
              <li id="slide14"><img src={cuarto2} className='' alt=""/></li>
              <li id="slide15"><img src={cuarto3} className='' alt=""/></li>
            </ul>

            <ul class="thumbnails">
              <li><a href="#slide11"><img src={granada} className='' alt=""/></a></li>
              <li><a href="#slide12"><img src={cocina} className='' alt=""/></a></li>
              <li><a href="#slide13"><img src={comedor} className='' alt=""/></a></li>
              <li><a href="#slide14"><img src={cuarto2} className='' alt=""/></a></li>
              <li><a href="#slide15"><img src={cuarto3} className='' alt=""/></a></li>
            </ul>
            </div>

          </div>

        </div>
        
      </div>

      <div className='container__fraccionamiento2'>
        <div className='fraccionamiento__container'>
          <div className='siider__fraccionamiento'>

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
          <div className='container__fraccionamiento'>
          <div className='container__fraccionamiento__texto'>
            <h3 className='titulo__fraccionamiento'>MALLORCA</h3>
            <div className='especificaciones__fraccionamiento'>
              <img src={terreno} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo1'>m<sup>2</sup> de terreno:</p>
                <p className='especificaciones__texto__subtitulo'>140 m<sup>2</sup></p>
              </div>
              <img src={balcon} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Balón:</p>
                <p className='especificaciones__texto__subtitulo'>1</p>
              </div>
              
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={metros} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>m<sup>2</sup> de construcción:</p>
                <p className='especificaciones__texto__subtitulo'>145 m<sup>2</sup></p>
              </div>
              <img src={hall} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>m<sup>2</sup> de construcción:</p>
                <p className='especificaciones__texto__subtitulo'>145 m<sup>2</sup></p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={dormitorios} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Dormitorios:</p>
                <p className='especificaciones__texto__subtitulo'>3</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={baños} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Baños:</p>
                <p className='especificaciones__texto__subtitulo'>2.5</p>
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

      <div className='decoracionrec'>
          <div className='decoracionrec__dorado2'></div>
         
      </div>

      <div className='container__fraccionamiento3'>
        <div className='fraccionamiento__container1'>
        <div className='container__fraccionamiento1'>
          <div className='container__fraccionamiento__texto1'>
            <h3 className='titulo__fraccionamiento1'>SEVILLA</h3>
            <div className='especificaciones__fraccionamiento1'>
              <img src={terreno} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo2'>m<sup>2</sup> de terreno:</p>
                <p className='especificaciones__texto__subtitulo1'>160 m<sup>2</sup></p>
              </div>
              <img src={balcon} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Balcón:</p>
                <p className='especificaciones__texto__subtitulo1'>1</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1'>
              <img src={metros} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>m<sup>2</sup> de construcción:</p>
                <p className='especificaciones__texto__subtitulo1'>138.5 m<sup>2</sup></p>
              </div>
              <img src={hall} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Hall de tv:</p>
                <p className='especificaciones__texto__subtitulo1'>1</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1'>
              <img src={dormitorios} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Dormitorios::</p>
                <p className='especificaciones__texto__subtitulo1'>3</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1'>
              <img src={baños} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Baños:</p>
                <p className='especificaciones__texto__subtitulo1'>3</p>
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
          <div className='siider__fraccionamiento1'>

            <div class="container">
            <ul class="slides">
              <li id="slide31"><img src={granada} className='' alt=""/></li>
              <li id="slide32"><img src={cocina} className='' alt=""/></li>
              <li id="slide33"><img src={comedor} className='' alt=""/></li>
              <li id="slide34"><img src={cuarto2} className='' alt=""/></li>
              <li id="slide35"><img src={cuarto3} className='' alt=""/></li>
            </ul>

            <ul class="thumbnails">
              <li><a href="#slide31"><img src={granada} className='' alt=""/></a></li>
              <li><a href="#slide32"><img src={cocina} className='' alt=""/></a></li>
              <li><a href="#slide33"><img src={comedor} className='' alt=""/></a></li>
              <li><a href="#slide34"><img src={cuarto2} className='' alt=""/></a></li>
              <li><a href="#slide35"><img src={cuarto3} className='' alt=""/></a></li>
            </ul>
            </div>

          </div>

        </div>
        
      </div>
      <div className='decoracionrec1'>
          <div className='decoracionrec__dorado3'></div>
         
      </div>
      
      <div className='container__fraccionamiento4'>
        <div className='fraccionamiento__container'>
          <div className='siider__fraccionamiento'>

            <div class="container">
            <ul class="slides">
              <li id="slide41"><img src={granada} className='' alt=""/></li>
              <li id="slide42"><img src={cocina} className='' alt=""/></li>
              <li id="slide43"><img src={comedor} className='' alt=""/></li>
              <li id="slide44"><img src={cuarto2} className='' alt=""/></li>
              <li id="slide45"><img src={cuarto3} className='' alt=""/></li>
            </ul>

            <ul class="thumbnails">
              <li><a href="#slide41"><img src={granada} className='' alt=""/></a></li>
              <li><a href="#slide42"><img src={cocina} className='' alt=""/></a></li>
              <li><a href="#slide43"><img src={comedor} className='' alt=""/></a></li>
              <li><a href="#slide44"><img src={cuarto2} className='' alt=""/></a></li>
              <li><a href="#slide45"><img src={cuarto3} className='' alt=""/></a></li>
            </ul>
            </div>

          </div>
          <div className='container__fraccionamiento'>
          <div className='container__fraccionamiento__texto'>
            <h3 className='titulo__fraccionamiento'>VALENCIA</h3>
            <div className='especificaciones__fraccionamiento'>
              <img src={terreno} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo1'>m<sup>2</sup> de terreno:</p>
                <p className='especificaciones__texto__subtitulo'>160 m<sup>2</sup></p>
              </div>
              <img src={balcon} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Balón:</p>
                <p className='especificaciones__texto__subtitulo'>1</p>
              </div>
              
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={metros} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>m<sup>2</sup> de construcción:</p>
                <p className='especificaciones__texto__subtitulo'>181 m<sup>2</sup></p>
              </div>
              <img src={hall} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Hall de tv:</p>
                <p className='especificaciones__texto__subtitulo'>1</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={dormitorios} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Dormitorios:</p>
                <p className='especificaciones__texto__subtitulo'>3</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={baños} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Baños:</p>
                <p className='especificaciones__texto__subtitulo'>2.5</p>
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
      <div className='decoracionrec2'>
          <div className='decoracionrec__dorado'></div>
          <div className='decoracionrec__verde'></div>
         
      </div>

      <div className='container__fraccionamiento5'>
        <div className='fraccionamiento__container1'>
        <div className='container__fraccionamiento1'>
          <div className='container__fraccionamiento__texto1'>
            <h3 className='titulo__fraccionamiento1'>BARCELONA</h3>
            <div className='especificaciones__fraccionamiento1'>
              <img src={terreno} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo2'>m<sup>2</sup> de terreno:</p>
                <p className='especificaciones__texto__subtitulo1'>200 m<sup>2</sup></p>
              </div>
              <img src={balcon} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Balcón:</p>
                <p className='especificaciones__texto__subtitulo1'>1</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1'>
              <img src={metros} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>m<sup>2</sup> de construcción:</p>
                <p className='especificaciones__texto__subtitulo1'>205.5 m<sup>2</sup></p>
              </div>
              <img src={hall} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Hall de tv:</p>
                <p className='especificaciones__texto__subtitulo1'>1</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1'>
              <img src={dormitorios} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Dormitorios::</p>
                <p className='especificaciones__texto__subtitulo1'>3</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1'>
              <img src={baños} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Baños:</p>
                <p className='especificaciones__texto__subtitulo1'>2.5</p>
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
          <div className='siider__fraccionamiento1'>

            <div class="container">
            <ul class="slides">
              <li id="slide51"><img src={granada} className='' alt=""/></li>
              <li id="slide52"><img src={cocina} className='' alt=""/></li>
              <li id="slide53"><img src={comedor} className='' alt=""/></li>
              <li id="slide54"><img src={cuarto2} className='' alt=""/></li>
              <li id="slide55"><img src={cuarto3} className='' alt=""/></li>
            </ul>

            <ul class="thumbnails">
              <li><a href="#slide51"><img src={granada} className='' alt=""/></a></li>
              <li><a href="#slide52"><img src={cocina} className='' alt=""/></a></li>
              <li><a href="#slide53"><img src={comedor} className='' alt=""/></a></li>
              <li><a href="#slide54"><img src={cuarto2} className='' alt=""/></a></li>
              <li><a href="#slide55"><img src={cuarto3} className='' alt=""/></a></li>
            </ul>
            </div>

          </div>

        </div>
        
      </div>
      <div className='decoracionrec3'>
          <div className='decoracionrec__verde'></div>
          <div className='decoracionrec__dorado'></div>
         
         
      </div>

      <div className='container__fraccionamiento6'>
        <div className='fraccionamiento__container'>
          <div className='siider__fraccionamiento'>

            <div class="container">
            <ul class="slides">
              <li id="slide61"><img src={granada} className='' alt=""/></li>
              <li id="slide62"><img src={cocina} className='' alt=""/></li>
              <li id="slide63"><img src={comedor} className='' alt=""/></li>
              <li id="slide64"><img src={cuarto2} className='' alt=""/></li>
              <li id="slide65"><img src={cuarto3} className='' alt=""/></li>
            </ul>

            <ul class="thumbnails">
              <li><a href="#slide61"><img src={granada} className='' alt=""/></a></li>
              <li><a href="#slide62"><img src={cocina} className='' alt=""/></a></li>
              <li><a href="#slide63"><img src={comedor} className='' alt=""/></a></li>
              <li><a href="#slide64"><img src={cuarto2} className='' alt=""/></a></li>
              <li><a href="#slide65"><img src={cuarto3} className='' alt=""/></a></li>
            </ul>
            </div>

          </div>
          <div className='container__fraccionamiento'>
          <div className='container__fraccionamiento__texto'>
            <h3 className='titulo__fraccionamiento'>MADRID</h3>
            <div className='especificaciones__fraccionamiento'>
              <img src={terreno} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo1'>m<sup>2</sup> de terreno:</p>
                <p className='especificaciones__texto__subtitulo'>200 m<sup>2</sup></p>
              </div>
              <img src={balcon} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Balón:</p>
                <p className='especificaciones__texto__subtitulo'>1</p>
              </div>
              
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={metros} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>m<sup>2</sup> de construcción:</p>
                <p className='especificaciones__texto__subtitulo'>234.5 m<sup>2</sup></p>
              </div>
              <img src={hall} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Hall de tv:</p>
                <p className='especificaciones__texto__subtitulo'>145 m<sup>2</sup></p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={dormitorios} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo2'>Dormitorios:</p>
                <p className='especificaciones__texto__subtitulo'>3</p>
              </div>
              <img src={terraza} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Terraza:</p>
                <p className='especificaciones__texto__subtitulo'>Si</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento'>
              <img src={baños} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo'>Baños:</p>
                <p className='especificaciones__texto__subtitulo'>4.5</p>
              </div>
            </div>      
          
            <button href="#" className='boton__visita2'>
              <div className='container__visita'>
                <img src={whatsapp} className='img__visita' alt=""/>
                <p className='texto__visita'>Agendar Visita</p>
              </div>
            </button>
          
          </div>
  
          </div>

        </div>
        
       
        
      </div>

      <div className='footer'>
        <div className='footer1'>
          <div className='footer__text'>
            <h2>HV</h2>
          </div>
          <div className='footer__text2'>
            <h2 className='titulo'>HACIENDA VALBUENA</h2>
            <h3 className='subtitulo'>$i SE PUEDE VIVIR CON LUJO</h3>
          </div>

        </div>
        
        <div className='footer__terminos'>
          <div className='terminos'>
            <p>TËRMINOS Y CONDICIONES</p>
          </div>
          <div className='politica'>
            <p>POLÎTICA DE PRIVACIDAD </p>
          </div>
        </div>

      </div>
      <div className='footer__drop'>
        <div className='drop'>
          <p className='sub'>Powered by</p> 
          <p className='sub1'>Drop Intelligence Business</p>
        </div>
      </div>
    

    </div>
  )
}

export default Landing