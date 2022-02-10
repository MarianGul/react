import { Card, Button } from "react-bootstrap"

export const ItemDetail = ({id, nombre, categoria, precio, desc, imagen}) => {

    return (
        <div>
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
                <Button className="btn-compra">Comprar</Button>
            </Card.Footer>
        </Card>
        </div>
    )
}