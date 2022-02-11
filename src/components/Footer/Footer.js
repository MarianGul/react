import { Container, Row, Col } from "react-bootstrap"
import { BsFacebook, BsInstagram } from "react-icons/bs";


export const Footer = () => {

    return (
        <footer>
            <Container>
            <Row>
                <Col>
                <div className="redes">
                <BsFacebook size='1.5em' />
                <BsInstagram  className="ms-3" size='1.5em' />
                </div>
                </Col>
            </Row>
            </Container>
        </footer>
    )
}