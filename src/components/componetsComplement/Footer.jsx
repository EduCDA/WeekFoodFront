import React from 'react';
import imgCertificado from '../../img/certificado.png';
import imgInstragram from '../../img/instagram-logo.png';
import imgTelf from '../../img/mobile.png';
const Footer = () => {
  return (
    <div>
        <div id='footer' className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1 className='titleFooter'>WEEKFOOD</h1>
                </div>
                <div className="col-7"></div>
                <div id='imgFooter' className="col">
                  <a href="/contactanos"><img className='imgFooter' src={imgTelf} alt='telf'/></a>
                  <a href="https://www.instagram.com/weekfood.day/"><img className='imgInstFooter' src={imgInstragram} alt='instagram'/></a>
                  <img className='imgFooter' src={imgCertificado} alt='certificado'/>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer