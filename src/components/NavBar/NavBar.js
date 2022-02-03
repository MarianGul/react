import { CartWidget } from '../CartWidget/CartWidget';
import { Navbar, Container, Nav } from 'react-bootstrap';


export const NavBar = () => {
    return (
        <Navbar expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#home">Pet Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Perros</Nav.Link>
                        <Nav.Link href="#link">Gatos</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}