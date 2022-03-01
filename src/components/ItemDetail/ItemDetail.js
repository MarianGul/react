import { Container, Row, Col, Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import { BsTruck, BsPinMap } from "react-icons/bs";
import { Link, Navigate } from 'react-router-dom';
import tarjetas from '../../assets/imgs/tarjetas.png'
import { useContext, useState } from 'react';
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({id, name, category, price, desc, image, stock, offer}) => {

    const [quantity, setQuantity] = useState(1)
    const [purchase, setPurchase] = useState(false)
    const [stockMessage, setStockMessage] = useState('')
    const {addToCart, checkStock, getPosibleStock, finalOffer} = useContext(CartContext)

    const handleAdd = () => {
        const addItem = {
            id, name, price, image, stock, offer, quantity
        }

        const newPrice = finalOffer(price, offer)

        checkStock(id, addItem) ? handleNotBuy() : addToCart(id, addItem, newPrice, quantity)
        setPurchase(true)
    }

    const handleNotBuy = () => {
        setStockMessage((stock - getPosibleStock(id)) === 0 ?
        '¡Uy! No tenemos más stock de este producto para agregarlo al carrito.'
        : `Ya tenes este producto en el carrito. Podes agregar ${stock - getPosibleStock(id)} unidades`)
    }

    if(stock === 0 || typeof name === 'undefined') {
        return <Navigate to="/" />
    }


    return (
        <section className="detalle">
            <Container>
           <Row>
               <Col md="12"><Link className='back' to="/">Volver al inicio</Link></Col>
               <Col md="6" className='text-center'>
               <img src={require(`../../assets/imgs/${image}`)}  alt={name} className="img-fluid img-producto" />
               </Col>
                    <Col md="6">
                        <div className='datos-producto'>
                            <h3>{name}</h3>
                            <h4>
                                <span className={offer ? 'offer-text' : ''}>${price}</span>
                                <span>{offer && `$${finalOffer(price, offer)}`}</span>
                            </h4>
                            <p className='desc'>{desc}</p>
                        </div>
                        <div className='comprar'>
                        <ItemCount max={stock} counter={quantity} setCounter={setQuantity} />
                        <Button className='btn-compra' onClick={handleAdd}>Agregar</Button>
                        </div>
                        <div className='mensaje'>{stockMessage}</div>

                        {
                           purchase
                           ? <>
                             <Button as={Link} to="/cart" className='btn-terminar mt-3 me-3'>Ir al Carrito</Button>
                             <Button as={Link} to="/" className='btn-terminar mt-3 me-3'>Seguir Comprando</Button>
                             </>
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