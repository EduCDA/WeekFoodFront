import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Navbard from './componetsComplement/Navbard';
import Footer from './componetsComplement/Footer';
const URI = `http://localhost:8000/foods/`;
const Plato = () => {
  //Obtenemos los platos de la base de datos según el id
  const id = useParams().id;
  const [dish, setDish] = useState([]);
  useEffect(() => {
    getDish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getDish = async () => {
    const res = await axios.get(URI + id);
    setDish(res.data);
  }
  return (
    <div>
      <Navbard/>
      <div className="container-fluid">
        <div className='row'>
          <div className='col'>
            <h3 className='titleConMenu'>{dish.nombrePlato}</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
          <p className="videoPl">
              <iframe width="560" height="315" src={dish.enlace} 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </p>
          </div>
        </div>
        <div id='contentMidDish' className='row'>
          <div id='lMidDish' className='col-4' ></div>
          <div id='midDish' className='col-4' >
            <h4 className='ingDish'>Ingredientes</h4>
            <p>{dish.descripcion}</p></div>
          <div id='rMidDish' className='col-4'></div>
        </div>
        <div id='contentDish' className='row'>
          <div id='contentIngredient' className='col' >
            <h4>Preparación</h4>
            <p>{dish.detallada}</p></div>
          <div id='contanerImg' className='col' >
            <Image className='imgDish' src={dish.imagen} alt={dish.nombrePlato} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Plato