import './Css/App.css';
import './Css/Nav.css';
import './Css/Footer.css';
import './Css/ConoceContac.css';
import './Css/Menu.css';
import './Css/ResgisLogin.css';
import './Css/User.css';
import './Css/Admind.css';
import MainPlace from './components/MainPlace';
import Conocenos from './components/Conocenos';
import Menu from './components/Menu';
import Contactanos from './components/Contactanos';
import Plato from './components/Plato';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/usuario/User';
import CrearPlato from './components/administrador/CrearPlato';
import ProtectedRute from './components/componetsComplement/ProtectedRute';
import EditarUser from './components/usuario/EditarUser';
import {UserProvider } from './context/UserContext';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuUsuario from './components/usuario/MenuUsuario';
import AddDish from './components/usuario/AddDish';
import TablaUsers from './components/administrador/TablaUsers';
import TablaSemanal from './components/usuario/TablaSemanal';
import SemanalAdmind from './components/administrador/SemanalAdmind';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userLogin = localStorage.getItem('user');
    if (userLogin) {
      setUser(JSON.parse(userLogin));
    }
  }, []);
  return (
    <div className="body">
      {/* Estas son las rutas de mi web */}
       {/* Utilizo este contexto para obtener de una manera mas organizada*/}
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPlace/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/plato/:id" element={<Plato/>}/>
            <Route path="/conocenos" element={<Conocenos/>}/>
            <Route path="/contactanos" element={<Contactanos/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Register/>}/>
            <Route element={<ProtectedRute isAllowed={!!user} redirectTo="/login"/>}>
              <Route path="/usuario" element={<User/>}/>              
            </Route>
            <Route element={<ProtectedRute isAllowed={!!user} redirectTo="/tablaSemanal"/>}>
              <Route path="/tablaSemanal" element={<TablaSemanal/>}/>  
              <Route path="/personalUser" element={<EditarUser/>}/>            
            </Route>
            <Route element={<ProtectedRute isAllowed={!!user} redirectTo="/miMenu"/>}>
              <Route path="/miMenu" element={<MenuUsuario/>}/>
            </Route>
            <Route element={<ProtectedRute isAllowed={!!user} redirectTo="/añadirPlato"/>}>
              <Route path="/añadirPlato" element={<AddDish/>}/>
            </Route>
            <Route element={<ProtectedRute isAllowed={!!user && user.permisos === 1} redirectTo="/"/>}>
              <Route path="/crearPlato" element={<CrearPlato/>}/>
              <Route path="/administrador" element={<TablaUsers/>}/>
              <Route path="/tablaSemanalAdmin" element={<SemanalAdmind/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>

    </div>
  );
}

export default App;
