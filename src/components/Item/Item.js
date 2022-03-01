import { useContext } from "react";
import { Card, Col, Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';


export const Item = ( {id, name, price, image, desc, offer, stock} ) => {

    const {finalOffer} = useContext(CartContext)

    return (
        <Col xl="3" lg="4" md="6" className="mb-3">
        <Card className={stock === 0 && 'sinstock'}>
            {offer && <Card.Title className="oferta">20% OFF</Card.Title>}
            <Card.Title className="textstock">SIN STOCK</Card.Title>
            <Card.Img variant="top" src={require(`../../assets/imgs/${image}`)} className="card-img-top" alt={name} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text className="precio">
                    <span className={offer ? 'offer-text' : ''}>${price}</span>
                    <span>{offer && `$${finalOffer(price, offer)}`}</span>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                <Button as={Link} to={`/detail/${id}`} className="btn-compra" disabled={stock === 0}>Ver más</Button>
            </Card.Footer>
        </Card>
        </Col>
    )
}