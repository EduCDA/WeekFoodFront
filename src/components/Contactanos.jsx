import React from 'react'
import Image from 'react-bootstrap/Image';
import instagramImg from '../img/instagramImg.jpg';
import correoImg from '../img/correoImg.jpg';
import Navbard from './componetsComplement/Navbard';
import Footer from './componetsComplement/Footer';
const Contactanos = () => {
    return (
        <div>
            <Navbard/>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-1'></div>
                    <div className='col'><h3 className='title'>Contáctanos</h3></div>
                    <div className='col-1'></div>
                </div>
                <div id='caseContact' className="row">
                    <div className='col-1'></div>
                    <div className='col' id='imgInstragram' ><Image id='imgContactTop' src={instagramImg} alt='instagram' /></div>
                    <div className='col' id='parrafTop' ><p> Puedes visitar nuestra cuenta de Instagram donde subiremos contenido de las novedades de la web.
                        Mantente informado de nuestras novedades, podrás recibir sorteos exclusivos y merchandising. Podrás poner sugerencias en los comentarios de las publicaciones, no dudes.
                        Poner sugerencias y novedades esperadas.
                        Síguenos en <b>weekfood.day</b> ya, ¿a qué estás esperando? </p></div>
                    <div className='col-1'></div>
                </div>
                <div id='caseContact' className="row">
                    <div className='col-1'></div>
                    <div className='col' id='parrafBoot'> <p>
                        No dudes en poner tus sugerencias por correo, ya que nos ayudarías bastante.
                        Lo importante es que esta web te ayude a organizarte y que comas más variado cada semana.
                        Sabemos que eres un pilar fundamental para que esta web salga a delante y mejore. Por eso te agradeceríamos que compartieras la web.
                        Y que nos escribas por correo de alguna novedad que quieras implementar, valoraremos todo. Escríbenos por <b>weekfood.day@gmail.com</b> a qué esperas.
                    </p></div>
                    <div className='col' id='imgCorreo' ><Image id='imgContactBoot' src={correoImg} alt='correo' /></div>
                    <div className='col-1'></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contactanos