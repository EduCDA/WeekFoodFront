import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import NavAdmin from '../componetsComplement/NavAdmin';
import Footer from '../componetsComplement/Footer';

const TablaUsers = () => {
  const URI = "http://localhost:8000/users/";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, [])
  const getUsers = async () => {
    const res = await axios.get(URI);
    setUsers(res.data);
  }
  const URIFOOD = "http://localhost:8000/foods/";
  const [food, setFood] = useState([]);
  useEffect(() => {
    getFood();
  }, [])
  const getFood = async () => {
    const res = await axios.get(URIFOOD);
    setFood(res.data);
  }
  return (
    <div>
      <NavAdmin />
      <div className='container-fluid'>
        <div className='row'>
          <div id='cols' className='col-1'></div>
          <div id='titleAdmind' className='col'>
            <h3 className='titleUser'>Tabla de administrador</h3>
          </div>
          <div id='cols' className='col-1'></div>
        </div>
        {/* Tabla Usuarios */}
        <div className='row'>
          <div id='cols' className='col-1'></div>
          <div className='col'>
            <h4 className='userTable'>Tabla usuarios cantidad: {users.length}</h4>
          </div>
          <div id='cols' className='col-1'></div>
        </div>
        <div className='row'>
          <div id='cols' className='col-1'></div>
          <div className='col'>
            <div className='adminTableContainer'>
              <table className='tablaAdmind'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th>Permisos</th>
                    <th>Fecha de creación</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Sacamos los datos de los Usuarios. */}
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.nombre}</td>
                      <td>{user.apellidos}</td>
                      <td>{user.correo}</td>
                      <td>{user.permisos}</td>
                      <td>{user.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div id='cols' className='col-1'></div>
        </div>
        {/* Tabla Platos */}
        <div className='row'>
          <div id='cols' className='col-1'></div>
          <div className='col'>
            <h4 className='userTable'>Tabla platos cantidad: {food.length}</h4>
          </div>
          <div id='cols' className='col-1'></div>
        </div>
        <div className='row'>
          <div id='cols' className='col-1'></div>
          <div className='col'>
            <div className='adminTableContainer'>
              <table className='tablaAdmind'>
                <thead>
                  <tr>
                    {/* Sacamos los datos de los platos. */}
                    <th>ID</th>
                    <th>Nombre plato</th>
                    <th>Ingredientes</th>
                    <th>Descripcion</th>
                    <th>Fecha de creación</th>
                  </tr>
                </thead>
                <tbody>
                  {food.map(food => (
                    <tr key={food.id}>
                      <td>{food.id}</td>
                      <td>{food.nombrePlato}</td>
                      <td>{food.ingredientes}</td>
                      <td>{food.descripcion}</td>
                      <td>{food.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div id='cols' className='col-1'></div>
        </div>
      </div>
      
        <Footer />
      
    </div>
  )
}

export default TablaUsers