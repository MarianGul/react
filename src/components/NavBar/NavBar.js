import { CartWidget } from '../CartWidget/CartWidget';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <Navbar expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">Pet Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/productos/perro">Perros</Nav.Link>
                        <Nav.Link as={Link} to="/productos/gato">Gatos</Nav.Link>
                        <Nav.Link as={Link} to="/">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}