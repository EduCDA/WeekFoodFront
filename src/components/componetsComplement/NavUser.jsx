import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
function Navbard() {
    const navigate = useNavigate();
    //Función que nos permite quitarnos el login.
    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
        window.location.reload()
    };
  return (
    <Navbar collapseOnSelect expand="md" className="navContent">
      <Container>
      <Link className='logoNavLink' to={"/administrador"}><h3 className='titleNav'>WeekFood</h3></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className='items'>
            <Link className='aItems' to={"/"}>Página inicial</Link>
            <Link className='aItems' to={"/usuario"}>Nuevas novedades</Link>
            <Link className='aItems' to={"/miMenu"}>Mi menú</Link>
            <Link className='aItems' to={"/tablaSemanal"}>Menú semanal</Link>
            <Link className='aItems' to={"/personalUser"} >Editar mi cuenta</Link>
          </Nav>
          <Nav>
            <button className='buttonNav secondary' onClick={handleLogout}> <Link className='loginLetter'>Cerrar sesión </Link> </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbard;