import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { BsFillTrashFill } from "react-icons/bs";


export const Cart = () => {
    const {cart, deleteItem, totalPurchase, emptyCart} = useContext(CartContext)

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
                            <img src={require(`../../assets/imgs/${item.imagen}`)} alt={item.nombre} />
                        </div>
                        <div className="cart__text">
                        <p>{item.nombre}</p>
                        </div>
                        <div className="cart__price">
                        <p>${item.precio * item.quantity}</p>
                        </div>
                        <div className="cart__delete">
                            <Button onClick={() => deleteItem(item.id)} variant="light"><BsFillTrashFill size='1.2em' /></Button>
                        </div>
                    </ListGroup.Item>
                      ))
                      }
                    </ListGroup>
                   </Col>

                   {
                       cart.length > 0
                       ? <>
                       <Col md='6'>
                       <Button className='mt-3 me-3 btn-terminar'>Terminar mi compra</Button>
                       <Button onClick={emptyCart} className='mt-3 me-3' variant='danger'>Vaciar Carrito</Button>
                       </Col>
                       <Col md='6'>
                        <p className="total text-end">Total: ${totalPurchase()}</p>
                       </Col>
                       </>
                       : <><Col><p className="text-center fw-bold">No hay productos en el carrito</p></Col></>
                   }

               </Row>
            </Container>
        </section>
    )
}