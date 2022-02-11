import { Card, Col, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';


export const Item = ( {id, nombre, precio, imagen, desc} ) => {

    return (
        <Col xl="3" lg="4" md="6" className="mb-3">
        <Card>
            <Card.Img variant="top" src={require(`../../assets/imgs/${imagen}`)} className="card-img-top" alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text className="precio">
                    ${precio}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
                {/*<ButtonCompra />*/}
                <Button as={Link} to={`/detail/${id}`} className="btn-compra">Ver más</Button>
            </Card.Footer>
        </Card>
        </Col>
    )
}