import { CartWidget } from '../CartWidget/CartWidget';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <Navbar expand="lg" fixed='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className='fw-bold'>PetShop <FaDog size='1.2em' /> <FaCat size='1em' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/productos/perro" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Perro</Nav.Link>
                        <Nav.Link as={NavLink} to="/productos/gato" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Gato</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}