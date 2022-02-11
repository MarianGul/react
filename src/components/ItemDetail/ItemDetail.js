import { Container, Row, Col, Button } from 'react-bootstrap';
import { ButtonCompra } from '../ButtonCompra/ButtonCompra';
import { BsTruck, BsPinMap } from "react-icons/bs";
import { Link } from 'react-router-dom';
import tarjetas from '../../assets/imgs/tarjetas.png'

export const ItemDetail = ({id, nombre, categoria, precio, desc, imagen, stock}) => {

    return (
        <section className="detalle">
            <Container>
           <Row>
               <Col md="12"><Link className='back' to="/">Volver al inicio</Link></Col>
               <Col md="6" className='text-center'>
               <img src={require(`../../assets/imgs/${imagen}`)}  alt={nombre} className="img-fluid img-producto" />
               </Col>
                    <Col md="6">
                        <div className='datos-producto'>
                            <h3>{nombre}</h3>
                            <h4>${precio}</h4>
                            <p className='desc'>{desc}</p>
                            <p className='stock'>{stock} disponibles</p>
                        </div>
                        <div className='comprar'>
                        <ButtonCompra></ButtonCompra>
                        <Button className='btn-compra'>Agregar al Carrito</Button>
                        </div>
                        <div className='opciones'>
                            <h6>Opciones de Envio:</h6>
                            <div className='envio'>
                                <BsTruck size="1.5em" />
                                <p>Envio a Domicilio</p>
                            </div>
                            <div className='locales'>
                                <BsPinMap size="1.5em" />
                                <p>Retiro en Sucursal</p>
                            </div>
                            <h6>Metodos de Pago:</h6>
                            <img src={tarjetas} alt='tarjetas' />
                        </div>
                    </Col>
           </Row>
           </Container>
           </section>


    )
}