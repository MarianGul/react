import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <h1 className="navbar-brand">Pet Shop</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav me-5">
                        <li className="nav-item">
                            <a className="nav-link active" href="#index" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#perros">Perros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gatos">Gatos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}