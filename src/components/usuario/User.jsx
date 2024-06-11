import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import NavUser from '../componetsComplement/NavUser';
import novedadFood from '../../img/novedadesFood.jpg';
import calendarioNovedad from '../../img/calendarioNovedad.jpg';
import Image from 'react-bootstrap/Image';
import Footer from '../componetsComplement/Footer';
const User = () => {
    var { user } = useContext(UserContext);
    return (
        <div>
            {/* Navbar del usuario , como el footer, aunque este es igual para todos los componentes */}
            <NavUser element={user} />
            <div className="container-fluid">
                <div id='caseTop' className="row">
                    <div className='col-1'></div>
                    <div className='col'>
                        <h3 className='titleUserMain'>Bienvenido {user.nombre}</h3>
                    </div>
                    <div className='col-1'></div>
                </div>
                <div id='caseTop' className="row">
                    <div className='col-1'></div>
                    <div className='col'>
                        <h3 className='titleCon'>Novedades</h3>
                        <h5 className='titleConLit'>Tabla Semanal</h5>
                        <p>
                            Hemos implementado un menú semanal para que disfrutes de una nueva selección de platos cada 7 días.
                            Si prefieres no esperar, puedes utilizar el botón de cambio para actualizar el menú tantas veces como desees.
                            <br />
                            Si tienes alguna pregunta o encuentras algún fallo, no dudes en contactarnos en weekfood@gmail.com.
                            Tu feedback es invaluable para nosotros.
                        </p>
                        <h5 className='titleConLit'>Menu personal</h5>
                        <p>
                            Ahora puedes disfrutar de tus platos preferidos personalizando tu menú. Añade los platos que te falten o elimina aquellos que no sean de tu agrado.
                            Con un simple toque, puedes ajustar tu selección de platos en un abrir y cerrar de ojos.
                            <br /><br />
                            No dudes en aprovechar estas nuevas ventajas. Si hay un plato esencial para ti que te gustaría que incluyéramos,
                            estaremos encantados de añadirlo a nuestro catálogo.
                            Envíanos un correo a weekfood@gmail.com.
                        </p>
                    </div>
                    <div id='caseImgArboleda' className='col'>
                        <Image id='imgArboleda' src={calendarioNovedad} alt='arboleda' />
                    </div>
                    <div className='col-1'></div>
                </div>
                <div id='caseBoot' className="row">
                    <div className='col-1'></div>
                    <div id='caseImgComida' className='col'>
                        <Image id='secondImg' src={novedadFood} alt='comidaConocenos' />
                    </div>
                    <div className='col'>
                        <h3 className='titleCon'>Proximamente</h3>
                        <h5 className='titleConLit'>Funcionalidad extra</h5>
                        <p>
                            Pronto añadiremos una nueva sección donde podrás introducir los ingredientes que tienes en tu nevera.
                            <br/>
                            Esta funcionalidad te ayudará a reducir el desperdicio de alimentos y a crear comidas deliciosas con lo que ya tienes a mano. No pierdas la oportunidad de experimentar con nuevas recetas y optimizar tu cocina.
                            Mantente atento a nuestras actualizaciones y sé el primero en probar esta emocionante característica.

                        </p>
                        <h5 className='titleConLit'>Comida mediterranea</h5>
                        <p>
                            Estamos en proceso de añadir una nueva sección de platos mediterráneos para que nuestro catálogo ofrezca una gran variedad que satisfaga tus necesidades.
                            Con este lote mediterráneo, queremos que descubras y disfrutes de esta rica cultura gastronómica.
                            <br />
                            Además, añadiremos nuevos lotes de distintas partes del mundo cada tres meses, junto con platos innovadores. No te pierdas nuestras próximas novedades.
                            <br />
                            Síguenos en Instagram para estar al tanto de las actualizaciones y próximas incorporaciones.
                        </p>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default User