import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const NavAdmin = () => {
    const navigate = useNavigate();
    //Función que nos permite quitarnos el login.
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
        navigate('/login');
    };
    return (
        <div>
            <Navbar collapseOnSelect expand="md" className="navContent">
                <Container>
                    <Nav>
                        <Link className='logoNavLink' to={"/administrador"}><h3 className='titleNav'>WeekFood</h3></Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='items'>
                            <Link className='aItems' to={"/"}>Página inicial</Link>
                            <Link className='aItems' to={"/administrador"}>Tabla Administrador</Link>
                            <Link className='aItems' to={"/crearPlato"}>Crear plato</Link>
                            <Link className='aItems' to={"/tablaSemanalAdmin"}>Tablas Semanales</Link>
                        </Nav>
                        <Nav>
                        <button className='buttonNav secondary' onClick={handleLogout}> <Link className='loginLetter'>Cerrar sesión </Link> </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavAdmin