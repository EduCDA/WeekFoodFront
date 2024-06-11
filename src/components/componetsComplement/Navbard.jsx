import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Navbard() {
  return (
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
            <Link className='aItems' to={"/menu"}>Menú</Link>
            <Link className='aItems' to={"/conocenos"}>Conócenos</Link>
            <Link className='aItems' to={"/contactanos"}>Contáctanos</Link>
          </Nav>
          <Nav>
            <button className='buttonNav secondary'> <Link to={"/usuario"} className='loginLetter'>Mi cuenta</Link> </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbard;


