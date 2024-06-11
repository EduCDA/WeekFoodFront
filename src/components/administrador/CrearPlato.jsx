import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavAdmin from '../componetsComplement/NavAdmin';
import Footer from '../componetsComplement/Footer';
const URI = "http://localhost:8000/foods/";

const CrearPlato = () => {
//Se insertan los datos para luego enviarlos a la base de datos.
  const [nPlato, setNombrePlato] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [enlace, setEnlace] = useState('');
  const [imagen, setImgen] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [detallada, setDetallada] = useState('');
  const navigate = useNavigate();
  //Procedimiento de guardar 
  const createDish = async (e) => {
    e.preventDefault();
    await axios.post(URI, { nombrePlato: nPlato, ingredientes: ingredientes, enlace: enlace, imagen: imagen, descripcion: descripcion, detallada: detallada })
    alert('Plato creado correctamente');
    navigate('/administrador');
  }
  return (
    <div>
      <NavAdmin />
      <div id='registerContent' className="container-fluid">
        <h3 className='titleRes'>Añadir plato</h3><br />
        <form className='formularioRegis' onSubmit={createDish}>
          <div>
            <label className='labelRes' htmlFor="firstName">Nombre del plato:</label><br />
            <input
              required
              id='caseInput'
              type="text"
              value={nPlato}
              onChange={(e) => setNombrePlato(e.target.value)}
              placeholder='macarrones'
            />
          </div>
          <div>
            <label className='labelRes' htmlFor="lastName">Ingredientes básicos:</label><br />
            <input
              required
              id='caseInput'
              type="text"
              value={ingredientes}
              onChange={(e) => setIngredientes(e.target.value)}
              placeholder='tomate,pan,patata'
            />
          </div>
          <div>
            <label className='labelRes' htmlFor="email">Enlace del video:</label><br />
            <input
              required
              type="text"
              id='caseInput'
              value={enlace}
              onChange={(e) => setEnlace(e.target.value)}
              placeholder='https://cdn7.kiwilimon.com/recetaimagen/36468/45199.jpg'
              className='caseEamil'
            />
          </div>
          <div>
            <label className='labelRes' htmlFor="password">Enlace de la imagen:</label><br />
            <input
               required
               id='caseInput'
               type="text"
               placeholder='https://cdn7.kiwilimon.com/recetaimagen/36468/45199.jpg'
               value={imagen}
               onChange={(e) => setImgen(e.target.value)}
            />
          </div>
          <div>
            <label className='labelRes' htmlFor="password">Descripción de los ingredientes:</label><br />
            <textarea 
               required
               id='caseInput'
               type="text"
               value={descripcion}
               onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div>
            <label className='labelRes' htmlFor="password">Descripción detallada de la preparación</label><br />
            <textarea 
               required
               id='caseInput'
               type="text"
               value={detallada}
               onChange={(e) => setDetallada(e.target.value)}
            />
          </div>
          <button id='buttonRegister' type="submit">Enviar</button>
        </form>
      </div>
      
      <Footer />
    </div>
  )
}

export default CrearPlato