import React from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbard from './componetsComplement/Navbard';
import Footer from './componetsComplement/Footer';
const URI = 'http://localhost:8000/foods/';
const Menu = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    getFoods();
  }, [])
  //procedimiento para mostrar todas las comidas
  const getFoods = async () => {
    const res = await axios.get(URI);
    setFood(res.data);
  }
  return (
    <div>
      <Navbard/>
      <h3 className='titleConMenu'>Menu </h3>
      <div id='menuContainer' className="container-fluid">
        <div className="row">
          {food.map((food) => (
            <Card className='cardMenu' key={food.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={food.imagen} />
              <Card.Body className='bodyMenu'>
                <Card.Title>{food.nombrePlato}</Card.Title>
                <Link className='buttonMenu' to={`/plato/${food.id}`}>Ver plato</Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Menu