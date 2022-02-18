import { Container, Row, Col, Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import { BsTruck, BsPinMap } from "react-icons/bs";
import { Link } from 'react-router-dom';
import tarjetas from '../../assets/imgs/tarjetas.png'
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';

export const ItemDetail = ({id, nombre, categoria, precio, desc, imagen, stock}) => {

    const [quantity, setQuantity] = useState(1)
    const [purchase, setPurchase] = useState(false)
    const {cart, addToCart} = useContext(CartContext)

    const handleAdd = () => {
        const addItem = {
            id, nombre, precio, imagen, stock, quantity
        }
        addToCart(id, addItem, quantity)
        setPurchase(true)
    }
  

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
                        <ItemCount max={stock} counter={quantity} setCounter={setQuantity} />
                        <Button className='btn-compra' onClick={handleAdd}>Agregar</Button>
                        </div>                  
                        {
                           purchase
                           ? <><Button as={Link} to="/cart" className='btn-terminar mt-3 me-3'>Terminar mi Compra</Button>
                             <Button as={Link} to="/" className='btn-terminar mt-3 me-3'>Seguir Comprando</Button></>
                            : ''
                        }
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