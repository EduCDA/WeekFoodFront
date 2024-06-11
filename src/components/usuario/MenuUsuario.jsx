import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import NavUser from '../componetsComplement/NavUser';
import Footer from '../componetsComplement/Footer';
import Card from 'react-bootstrap/Card';
//Añadimos el componente del botón.
import ButtonAdd from '../componetsComplement/ButtonAdd'
const MenuUsuario = () => {
  var { user } = useContext(UserContext);
  //Me saca los datos de cada plato del menu.
  const URI = `http://localhost:8000/foods/userDish/${user.id}`;//id al pulsar
  //Sacamos el menu del usuario que esta logeado.
  const URIDish = `http://localhost:8000/userMenu/${user.id}`;

  const [dish, setdish] = useState([]);
  const [foodUser, setFoodTabla] = useState([]);
  useEffect(() => {
    getFoods();
    getDish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //Procedimiento para mostrar todas las comidas.
  const getFoods = async () => {
    const res = await axios.get(URI);
    setFoodTabla(res.data);
  }

  const getDish = async () => {
    const res = await axios.get(URIDish);
    setdish(res.data);
  }
  //Funcion que permite eliminar los platos del usuario.
  const deleteDishMenu = async (id) => {
    var i = 0;
    const cond = 7;

    while (dish.length > i) {
      if (dish[i].id_plato === id) {
        if (cond < dish.length) {
          //Elimina plato.
          const idResult = dish[i].id;
          const URIFOODUSER = `http://localhost:8000/userMenu/${idResult}`;
          await axios.delete(URIFOODUSER);
          getFoods();
          alert('Plato eliminado de tu menu' );
          window.location.reload();
        }
        else {
          alert('No puedes borrar mas platos el minimo es  ' + cond);
        }
      }
      i++;
    }
  }
  console.log(foodUser);
  return (
    <div>
      <NavUser />
      <h3 className='titleMenuUser'>Menú de {user.nombre} </h3>
      <div id='menuContainer' className="container-fluid">
        <div className="row">
          {/* Obtenemos las comidas.*/}
          {foodUser.map((food) => (
            <Card className='cardMenu' key={food.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={food.imagen} />
              <Card.Body className='bodyMenu'>
                <Card.Title>{food.nombrePlato}</Card.Title>
                <Link className='buttonMenuUser' to={`/plato/${food.id}`}>Ver plato</Link>
              </Card.Body>
              <Link className='buttonDelete' onClick={() => deleteDishMenu(food.id)}>Eliminar</Link>
            </Card>
          ))}
          <div id='positionButton' >
            <div className='row'>
              <div className='col-10'></div>
              <div className='col'>
                {/* El botón para añadir platos. */}
                <ButtonAdd />
              </div>
              <div className='col'></div>
            </div>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default MenuUsuario