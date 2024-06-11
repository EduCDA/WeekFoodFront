import React from 'react';
import arboledaImg from '../img/arboledaImg.jpg';
import comidaImgConocenos from '../img/comidaImgConocenos.jpg'
import Image from 'react-bootstrap/Image';
import Navbard from './componetsComplement/Navbard';
import Footer from './componetsComplement/Footer';
const Conocenos = () => {
    return (
        <div>
            <Navbard />
            <div className="container-fluid">
                <div id='caseTop' className="row">
                    <div className='col-1'></div>
                    <div className='col'>
                        <h3 className='titleCon'>Conócenos</h3>
                        <p>
                            Soy un estudiante de la Arboleda, que está desarrollando esta web, este es mi PFC.
                            Estoy estudiando desarrollo de aplicaciones web, estoy en el segundo año preparando mi proyecto.
                            Este proyecto lo está desarrollando Eduardo Corpa del Álamo.
                        </p>
                        <h3 className='titleCon'>Objetivos</h3>
                        <p>
                            Los objetivos de la página web son crear un calendario semanal, que se pueda editar tanto.
                            Las comidas del calendario y el menú general de tu cuenta. Con diversos modos, uno de ellos.
                            Es poder seleccionar los ingredientes sobrantes de tu nevera y poder recomendarte platos dentro de tu menú.
                        </p>
                    </div>
                    <div id='caseImgArboleda' className='col'>
                        <Image id='imgArboleda' src={arboledaImg} alt='arboleda' />
                    </div>
                    <div className='col-1'></div>
                </div>
                <div id='caseBoot' className="row">
                    <div className='col-1'></div>
                    <div id='caseImgComida' className='col'>
                        <Image id='secondImg' src={comidaImgConocenos} alt='comidaConocenos' />
                    </div>
                    <div className='col'>
                        <h3 className='titleCon'>¿Por qué decidí esta idea?</h3>
                        <p>
                            Algunas veces me toca cocinar y sé que a mucha gente joven le cuesta comer bien, organizarse con las comidas.
                            Es un trabajo tedioso para el que no es aficionado a la cocina pensar qué voy a comer hoy o cómo puedo aprovechar estos ingredientes.
                            Y así es como nació esta idea.a
                        </p>
                        <h3 className='titleCon'>Breve explicación de la funcionalidad</h3>
                        <p>
                            Esta web está diseñada para que cada semana te salgan 14 platos, dos para cada día de la semana.
                            Tú podrás editar los platos que quieras que te salgan y los platos que te salgan cada semana.
                            Si eres una persona que no te gusta o que te cuesta elegir, déjate llevar por las comidas que te salgan cada semana.
                            Que, por el contrario, te gusta organizarte y tener todo bajo control, no te preocupes, podrás editar a tu gusto.
                            Cada plato contiene un video explicativo y los ingredientes utilizados.
                        </p>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Conocenos