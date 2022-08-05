import React from 'react';
import "./Landing.css";
import "./Landing.scss";
import "./Granada.scss";
import "./Granada.js";
import fondo from '../media/iconografia-hacienda-valbuena-escritorio.webp';
import whatsapp from '../media/whatsapp-hacienda-valbuena.svg';
import fondo2 from '../media/fondo-maps-escritorio.webp';
import mapa from '../media/localizacion-hacienda-valbuena.svg';

import terreno from '../media/iconos/terreno-hacienda-valbuena.svg';
import metros from '../media/iconos/metros-de-construccion-hacienda-valbuena.svg';
import dormitorios from '../media/iconos/dormitorios-hacienda-valbuena.svg';
import baños from '../media/iconos/baños-hacienda-valbuena.svg';
import balcon from '../media/iconos/balcon-hacienda-valbuena.svg';

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

          <div id="css-carousel" >
  <div className="main-img-cont">
    <input id="img-1-radio" type="radio" name="selected-img" checked/>
    <input id="img-2-radio" type="radio" name="selected-img"/>
    <input id="img-3-radio" type="radio" name="selected-img"/>
    <input id="img-4-radio" type="radio" name="selected-img"/>
    <input id="img-5-radio" type="radio" name="selected-img"/>
    <input id="img-6-radio" type="radio" name="selected-img"/>
    <input id="img-7-radio" type="radio" name="selected-img"/>
    <input id="img-8-radio" type="radio" name="selected-img"/>
    <input id="img-9-radio" type="radio" name="selected-img"/>
    <div id="img-1" className="main-img img-1"></div>
    <div id="img-2" className="main-img img-2"></div>
    <div id="img-3" className="main-img img-3"></div>
    <div id="img-4" className="main-img img-4"></div>
    <div id="img-5" className="main-img img-5"></div>
    <div id="img-6" className="main-img img-6"></div>
    <div id="img-7" className="main-img img-7"></div>
    <div id="img-8" className="main-img img-8"></div>
    <div id="img-9" className="main-img img-9"></div>
  </div>
  <div className="img-thumbnails">
    <label htmlFor="img-1-radio"><div className="img-thumb img-1"></div></label>
    <label htmlFor="img-2-radio"><div className="img-thumb img-2"></div></label>
    <label htmlFor="img-3-radio"><div className="img-thumb img-3"></div></label>
    <label htmlFor="img-4-radio"><div className="img-thumb img-4"></div></label>
    <label htmlFor="img-5-radio"><div className="img-thumb img-5"></div></label>
    <label htmlFor="img-6-radio"><div className="img-thumb img-6"></div></label>
    <label htmlFor="img-7-radio"><div className="img-thumb img-7"></div></label>
    <label htmlFor="img-8-radio"><div className="img-thumb img-8"></div></label>
    <label htmlFor="img-9-radio"><div className="img-thumb img-9"></div></label>
  </div>
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
            <div className='especificaciones__fraccionamiento especificaciones__fraccionamiento1'>
              <img src={baños} className='icono__fraccionamiento' alt=""/>
              <div className='especificaciones__texto_fraccionamiento'>
                <p className='especificaciones__texto__titulo '>Baños:</p>
                <p className='especificaciones__texto__subtitulo'>3</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento especificaciones__fraccionamiento2'>
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
        <div className='container__fraccionamiento1 container__fraccionamiento1_'>
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
            <div className='especificaciones__fraccionamiento1 especificaciones__fraccionamiento2'>
              <img src={baños} className='icono__fraccionamiento1' alt=""/>
              <div className='especificaciones__texto_fraccionamiento1'>
                <p className='especificaciones__texto__titulo1'>Baños:</p>
                <p className='especificaciones__texto__subtitulo1'>3</p>
              </div>
            </div>
            <div className='especificaciones__fraccionamiento1 especificaciones__fraccionamiento3'>
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
          <div className='siider__fraccionamiento'>

          <div id="css-carousel1" >
  <div className="main-img-cont1">
    <input id="img-1-radio1" type="radio" name="selected-img1" checked/>
    <input id="img-2-radio1" type="radio" name="selected-img1"/>
    <input id="img-3-radio1" type="radio" name="selected-img1"/>
    <input id="img-4-radio1" type="radio" name="selected-img1"/>
    <input id="img-5-radio1" type="radio" name="selected-img1"/>
    <input id="img-6-radio1" type="radio" name="selected-img1"/>
    <input id="img-7-radio1" type="radio" name="selected-img1"/>
   
    <div id="img-11" className="main-img1 img-11"></div>
    <div id="img-21" className="main-img1 img-21"></div>
    <div id="img-31" className="main-img1 img-31"></div>
    <div id="img-41" className="main-img1 img-41"></div>
    <div id="img-51" className="main-img1 img-51"></div>
    <div id="img-61" className="main-img1 img-61"></div>
    <div id="img-71" className="main-img1 img-71"></div>
   
  </div>
  <div className="img-thumbnails1">
    <label htmlFor="img-1-radio1"><div className="img-thumb1 img-11"></div></label>
    <label htmlFor="img-2-radio1"><div className="img-thumb1 img-21"></div></label>
    <label htmlFor="img-3-radio1"><div className="img-thumb1 img-31"></div></label>
    <label htmlFor="img-4-radio1"><div className="img-thumb1 img-41"></div></label>
    <label htmlFor="img-5-radio1"><div className="img-thumb1 img-51"></div></label>
    <label htmlFor="img-6-radio1"><div className="img-thumb1 img-61"></div></label>
    <label htmlFor="img-7-radio1"><div className="img-thumb1 img-71"></div></label>
    
  </div>
      </div>

          </div>

        </div>
        
      </div>

      <div className='container__fraccionamiento2'>
        <div className='fraccionamiento__container'>
          <div className='siider__fraccionamiento'>

          <div id="css-carousel2" >
  <div className="main-img-cont2">
    <input id="img-1-radio2" type="radio" name="selected-img2" checked/>
    <input id="img-2-radio2" type="radio" name="selected-img2"/>
    <input id="img-3-radio2" type="radio" name="selected-img2"/>
    <input id="img-4-radio2" type="radio" name="selected-img2"/>
    <input id="img-5-radio2" type="radio" name="selected-img2"/>
    <input id="img-6-radio2" type="radio" name="selected-img2"/>
    <input id="img-7-radio2" type="radio" name="selected-img2"/>
    <input id="img-8-radio2" type="radio" name="selected-img2"/>
   
    <div id="img-12" className="main-img2 img-12"></div>
    <div id="img-22" className="main-img2 img-22"></div>
    <div id="img-32" className="main-img2 img-32"></div>
    <div id="img-42" className="main-img2 img-42"></div>
    <div id="img-52" className="main-img2 img-52"></div>
    <div id="img-62" className="main-img2 img-62"></div>
    <div id="img-72" className="main-img2 img-72"></div>
    <div id="img-82" className="main-img2 img-82"></div>
   
  </div>
  <div className="img-thumbnails2">
    <label htmlFor="img-1-radio2"><div className="img-thumb2 img-12"></div></label>
    <label htmlFor="img-2-radio2"><div className="img-thumb2 img-22"></div></label>
    <label htmlFor="img-3-radio2"><div className="img-thumb2 img-32"></div></label>
    <label htmlFor="img-4-radio2"><div className="img-thumb2 img-42"></div></label>
    <label htmlFor="img-5-radio2"><div className="img-thumb2 img-52"></div></label>
    <label htmlFor="img-6-radio2"><div className="img-thumb2 img-62"></div></label>
    <label htmlFor="img-7-radio2"><div className="img-thumb2 img-72"></div></label>
    <label htmlFor="img-8-radio2"><div className="img-thumb2 img-82"></div></label>
    
  </div>
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

          <div id="css-carousel3" >
  <div className="main-img-cont3">
    <input id="img-1-radio3" type="radio" name="selected-img3" checked/>
    <input id="img-2-radio3" type="radio" name="selected-img3"/>
    <input id="img-3-radio3" type="radio" name="selected-img3"/>
    <input id="img-4-radio3" type="radio" name="selected-img3"/>
    <input id="img-5-radio3" type="radio" name="selected-img3"/>
    <input id="img-6-radio3" type="radio" name="selected-img3"/>
    
   
    <div id="img-13" className="main-img3 img-13"></div>
    <div id="img-23" className="main-img3 img-23"></div>
    <div id="img-33" className="main-img3 img-33"></div>
    <div id="img-43" className="main-img3 img-43"></div>
    <div id="img-53" className="main-img3 img-53"></div>
    <div id="img-63" className="main-img3 img-63"></div>
   
   
  </div>
  <div className="img-thumbnails3">
    <label htmlFor="img-1-radio3"><div className="img-thumb3 img-13"></div></label>
    <label htmlFor="img-2-radio3"><div className="img-thumb3 img-23"></div></label>
    <label htmlFor="img-3-radio3"><div className="img-thumb3 img-33"></div></label>
    <label htmlFor="img-4-radio3"><div className="img-thumb3 img-43"></div></label>
    <label htmlFor="img-5-radio3"><div className="img-thumb3 img-53"></div></label>
    <label htmlFor="img-6-radio3"><div className="img-thumb3 img-63"></div></label>
    
    
  </div>
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

          <div id="css-carousel4" >
  <div className="main-img-cont4">
    <input id="img-1-radio4" type="radio" name="selected-img4" checked/>
    <input id="img-2-radio4" type="radio" name="selected-img4"/>
    <input id="img-3-radio4" type="radio" name="selected-img4"/>
    <input id="img-4-radio4" type="radio" name="selected-img4"/>
    <input id="img-5-radio4" type="radio" name="selected-img4"/>
    <input id="img-6-radio4" type="radio" name="selected-img4"/>
    <input id="img-7-radio4" type="radio" name="selected-img4"/>
    <input id="img-8-radio4" type="radio" name="selected-img4"/>
    
    <div id="img-14" className="main-img4 img-14"></div>
    <div id="img-24" className="main-img4 img-24"></div>
    <div id="img-34" className="main-img4 img-34"></div>
    <div id="img-44" className="main-img4 img-44"></div>
    <div id="img-54" className="main-img4 img-54"></div>
    <div id="img-64" className="main-img4 img-64"></div>
    <div id="img-74" className="main-img4 img-74"></div>
    <div id="img-84" className="main-img4 img-84"></div>
    
  </div>
  <div className="img-thumbnails4">
    <label htmlFor="img-1-radio4"><div className="img-thumb4 img-14"></div></label>
    <label htmlFor="img-2-radio4"><div className="img-thumb4 img-24"></div></label>
    <label htmlFor="img-3-radio4"><div className="img-thumb4 img-34"></div></label>
    <label htmlFor="img-4-radio4"><div className="img-thumb4 img-44"></div></label>
    <label htmlFor="img-5-radio4"><div className="img-thumb4 img-54"></div></label>
    <label htmlFor="img-6-radio4"><div className="img-thumb4 img-64"></div></label>
    <label htmlFor="img-7-radio4"><div className="img-thumb4 img-74"></div></label>
    <label htmlFor="img-8-radio4"><div className="img-thumb4 img-84"></div></label>
    
  </div>
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

          <div id="css-carousel5" >
  <div className="main-img-cont5">
    <input id="img-1-radio5" type="radio" name="selected-img5" checked/>
    <input id="img-2-radio5" type="radio" name="selected-img5"/>
    <input id="img-3-radio5" type="radio" name="selected-img5"/>
    <input id="img-4-radio5" type="radio" name="selected-img5"/>
    <input id="img-5-radio5" type="radio" name="selected-img5"/>
    <input id="img-6-radio5" type="radio" name="selected-img5"/>
    <input id="img-7-radio5" type="radio" name="selected-img5"/>
   
    <div id="img-15" className="main-img5 img-15"></div>
    <div id="img-25" className="main-img5 img-25"></div>
    <div id="img-35" className="main-img5 img-35"></div>
    <div id="img-45" className="main-img5 img-45"></div>
    <div id="img-55" className="main-img5 img-55"></div>
    <div id="img-65" className="main-img5 img-65"></div>
    <div id="img-75" className="main-img5 img-75"></div>
   
  </div>
  <div className="img-thumbnails5">
    <label htmlFor="img-1-radio5"><div className="img-thumb5 img-15"></div></label>
    <label htmlFor="img-2-radio5"><div className="img-thumb5 img-25"></div></label>
    <label htmlFor="img-3-radio5"><div className="img-thumb5 img-35"></div></label>
    <label htmlFor="img-4-radio5"><div className="img-thumb5 img-45"></div></label>
    <label htmlFor="img-5-radio5"><div className="img-thumb5 img-55"></div></label>
    <label htmlFor="img-6-radio5"><div className="img-thumb5 img-65"></div></label>
    <label htmlFor="img-7-radio5"><div className="img-thumb5 img-75"></div></label>
    
  </div>
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

          <div id="css-carousel6" >
  <div className="main-img-cont6">
    <input id="img-1-radio6" type="radio" name="selected-img6" checked/>
    <input id="img-2-radio6" type="radio" name="selected-img6"/>
    <input id="img-3-radio6" type="radio" name="selected-img6"/>
    <input id="img-4-radio6" type="radio" name="selected-img6"/>
    <input id="img-5-radio6" type="radio" name="selected-img6"/>
    <input id="img-6-radio6" type="radio" name="selected-img6"/>
    <input id="img-7-radio6" type="radio" name="selected-img6"/>
    <input id="img-8-radio6" type="radio" name="selected-img6"/>
    <input id="img-9-radio6" type="radio" name="selected-img6"/>
    <input id="img-10-radio6" type="radio" name="selected-img6"/>
    <input id="img-11-radio6" type="radio" name="selected-img6"/>
    <input id="img-12-radio6" type="radio" name="selected-img6"/>
    
   
    <div id="img-16" className="main-img6 img-16"></div>
    <div id="img-26" className="main-img6 img-26"></div>
    <div id="img-36" className="main-img6 img-36"></div>
    <div id="img-46" className="main-img6 img-46"></div>
    <div id="img-56" className="main-img6 img-56"></div>
    <div id="img-66" className="main-img6 img-66"></div>
    <div id="img-76" className="main-img6 img-76"></div>
    <div id="img-86" className="main-img6 img-86"></div>
    <div id="img-96" className="main-img6 img-96"></div>
    <div id="img-106" className="main-img6 img-106"></div>
    <div id="img-116" className="main-img6 img-116"></div>
    <div id="img-126" className="main-img6 img-126"></div>
   
  </div>
  <div className="img-thumbnails6">
    <label htmlFor="img-1-radio6"><div className="img-thumb6 img-16"></div></label>
    <label htmlFor="img-2-radio6"><div className="img-thumb6 img-26"></div></label>
    <label htmlFor="img-3-radio6"><div className="img-thumb6 img-36"></div></label>
    <label htmlFor="img-4-radio6"><div className="img-thumb6 img-46"></div></label>
    <label htmlFor="img-5-radio6"><div className="img-thumb6 img-56"></div></label>
    <label htmlFor="img-6-radio6"><div className="img-thumb6 img-66"></div></label>
    <label htmlFor="img-7-radio6"><div className="img-thumb6 img-76"></div></label>
    <label htmlFor="img-8-radio6"><div className="img-thumb6 img-86"></div></label>
    <label htmlFor="img-9-radio6"><div className="img-thumb6 img-96"></div></label>
    <label htmlFor="img-10-radio6"><div className="img-thumb6 img-106"></div></label>
    <label htmlFor="img-11-radio6"><div className="img-thumb6 img-116"></div></label>
    <label htmlFor="img-12-radio6"><div className="img-thumb6 img-126"></div></label>
    
    
  </div>
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