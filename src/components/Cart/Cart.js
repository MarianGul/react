import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";


export const Cart = () => {
    const {cart, deleteItem, totalPurchase, emptyCart} = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <section className="cart">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h2 className="fw-bold mb-4">No hay productos en el carrito</h2>
                            <Button as={Link} to="/" className='btn-terminar'>Volver</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            )
        
    }

    return (
        <section className="cart">
            <Container>
                <Row>
                    <Col><h4 className="fw-bold mb-4">Tu compra</h4></Col>
                </Row>
               <Row>
                   <Col md='12'>
                    <ListGroup>
                        { cart.map((item) => (
                        <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                            <div className="cart__img">
                                <span className="badge">{item.quantity}</span>
                                <img src={require(`../../assets/imgs/${item.image}`)} alt={item.name} />
                            </div>
                            <div className="cart__text">
                            <p>{item.name}</p>
                            </div>
                            <div className="cart__price">
                            <p>${item.price * item.quantity}</p>
                            </div>
                            <div className="cart__delete">
                                <Button onClick={() => deleteItem(item.id)} variant="light"><BsFillTrashFill size='1.2em' /></Button>
                            </div>
                        </ListGroup.Item>
                        ))
                        }
                        </ListGroup>
                   </Col>
                    <Col md='6'>
                       <Button className='mt-3 me-3 btn-terminar' as={Link} to="/checkout">Terminar mi compra</Button>
                       <Button onClick={emptyCart} className='mt-3 me-3 fw-bold' variant='danger'>Vaciar Carrito</Button>
                    </Col>
                    <Col md='6'>
                        <p className="total text-end">Total: ${totalPurchase()}</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}