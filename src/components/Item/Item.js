import { Card, Col } from "react-bootstrap"
import { ButtonCompra } from "../ButtonCompra/ButtonCompra"


export const Item = ( {id, nombre, precio, imagen, desc} ) => {

    return (
        <Col xl="3" lg="4" md="6" className="mb-3">
        <Card>
            <Card.Img variant="top" src={require('../../assets/imgs/'+ imagen)} className="card-img-top" alt={nombre} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text className="precio">
                    ${precio}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <ButtonCompra />
            </Card.Footer>
        </Card>
        </Col>
    )
}