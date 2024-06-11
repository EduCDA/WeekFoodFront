import { useState, useEffect } from 'react';
import React, { useContext } from 'react';
import NavUser from '../componetsComplement/NavUser';
import Footer from '../componetsComplement/Footer';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
const AddDish = () => {
    const [foodUser, setAddFood] = useState([]);
    var { user } = useContext(UserContext);
    const URI = `http://localhost:8000/foods/addDishMode/${user.id}`;
    const URIMenu = `http://localhost:8000/userMenu/`;
    useEffect(() => {
        getDishAdd();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //Procedimiento para mostrar todas las comidas.
    const getDishAdd = async () => {
        const res = await axios.get(URI);
        setAddFood(res.data);
    }
    //Añadimos al menu un nuevo plato a nuestro menuUsuario.
    const addDishMenu = async (id_plato) => {
        await axios.post(URIMenu, { id_usuario: user.id, id_plato: id_plato });
        getDishAdd();
        alert('Plato añadido de tu menu');
        window.location.reload();
    }
    return (
        <div>
            <NavUser />
            <h3 className='titleMenuUser'>Añadir plato a tu menu </h3>
            <div id='menuContainer' className="container-fluid">
                <div className="row">
                    {foodUser.map((food) => (
                        <Card className='cardMenu' key={food.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food.imagen} />
                            <Card.Body className='bodyMenu'>
                                <Card.Title>{food.nombrePlato}</Card.Title>
                                <Link className='buttonMenuUser' onClick={() => addDishMenu(food.id)}>Añadir</Link>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <div className='footerPosition'>
                <Footer/>
            </div>

        </div>
    )
}

export default AddDish