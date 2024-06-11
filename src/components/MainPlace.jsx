import React from 'react';
import imgPresent from "../img/presentacion.jpg";
import imgCheck from "../img/check.png";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import arrozpollo from '../img/Arroz-con-pollo.jpg';
import carbonara from '../img/salsa-carbonara.jpg';
import dumplings from '../img/dumplins.jpg';
import calendario  from '../img/calendario.png';
import Navbard from './componetsComplement/Navbard';
import Footer from './componetsComplement/Footer';
const MainPlace = () => {
    return (
        <div>
            <Navbard/>
            <div className="container-fluid">
                <div id='topMain' className="row">
                    <div className="col-1"></div>
                    <div id='lMain' className="col">
                        <h3 className='titleMain'>Personaliza tu plan semanal para comer rico y sano.</h3>
                        <p> <img className='imgCkeck' src={imgCheck} alt="check" /> Organizate mejor.</p>
                        <p><img className='imgCkeck' src={imgCheck} alt="check" /> Compra lo necesario.</p>
                        <p><img className='imgCkeck' src={imgCheck} alt="check" /> Mira recetas variadas.</p>
                        <p><img className='imgCkeck' src={imgCheck} alt="check" />Escoge qué platos te interesan.</p>
                        <button className='buttonMain primary'><a href="/registro" className='loginLetter'>¡Registrate ya!</a></button>
                    </div>
                    <div id='rMain' className="col">
                        <Image className='imgPresent' src={imgPresent} alt='imgPresent' />
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            <div id='midMain' className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col">
                        <h3 id="titleMid">Menú  variado</h3>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div id='CardCol' className="col-1"></div>
                    <div className="col">
                        <div id='itemsMain' className="d-flex justify-content-around">
                            <Card id="imgItem" style={{ width: '18rem' }}>
                                <Card.Img id="imgItem" variant="top" src={arrozpollo} />
                                <Card.Body>
                                    <Card.Title >Arroz con pollo</Card.Title>
                                    <Card.Text>
                                        El arroz con pollo es un plato tradicional de la cocina latinoamericana que combina arroz cocido con trozos de pollo tierno y sazonado, acompañados
                                        de una variedad de vegetales zanahorias y pimientos.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col">
                        <div id='itemsMain' className="d-flex justify-content-around">
                            <Card id="imgItem" style={{ width: '18rem' }}>
                                <Card.Img id="imgItem" variant="top" src={carbonara} />
                                <Card.Body>
                                    <Card.Title>Pasta a la carbonara</Card.Title>
                                    <Card.Text>
                                        La pasta a la carbonara es un plato clásico de la cocina italiana con una salsa tradicional.
                                        El resultado es un plato rico en sabor y textura, con la combinación
                                        perfecta de salado y cremoso que deleita los paladares más exigentes.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col">
                        <div id='itemsMain' className="d-flex justify-content-around">
                            <Card id="imgItem" style={{ width: '18rem' }}>
                                <Card.Img id="imgItem" variant="top" src={dumplings} />
                                <Card.Body>
                                    <Card.Title> Dumplings de Cerdo y Camarón</Card.Title>
                                    <Card.Text>
                                    Los dumplings de cerdo y camarón,es un elemento icónico del dim sum en la cocina cantonesa. 
                                    Estos dumplings abiertos al vapor combinan la jugosidad del cerdo y la frescura del camarón.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div id="CardCol" className="col-1"></div>
                </div>
            </div>
            <div id='mainBott' className="container-fluid">
                <div className="row">
                    <div className="col-1" ></div>
                    <div id='rMain' className="col">
                        <Image className='imgBotton' src={calendario} alt='imgPresent' />
                    </div>
                    <div id='colEx' className="col">
                        <h3 className="titlexplain">Organiza tu semana</h3>
                        <p>
                            Esta página web encontrarás las maneras para poder organizarte mejor tu semana.
                            Déjate llevar por nuestras recomendaciones o edita tu menú semanal a tu gusto. Elige los platos 
                            según tus gustos. Dejarás de comerte la cabeza con preguntas como, que voy a comer hoy y que alimentos se han puesto malos. 
                        </p>
                        <p>
                            Cada semana te pondremos un menú de la comida y la cena, en la que tendrás 
                            los ingredientes y un video de YouTube de cada una de las recetas. Si no te gusta algún plato 
                            o tienes alguna alergia, puedes quitarlo con un solo clic y editarlo. Si te sobran alimentos y quieres hacer un plato
                            no te preocupes, tenemos una herramienta que te recomienda platos que contengan esos alimentos.
                        </p>
                    </div>
                    <div className="col-1"></div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default MainPlace