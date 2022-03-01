import { GoPackage } from "react-icons/go";
import { AiOutlineMedicineBox, AiOutlinePercentage } from "react-icons/ai";
import { Container, Row, Col } from 'react-bootstrap';

export const PromoInfo = () => {

    return (
        <section className="envioInfo">
            <Container>
                <Row>
                    <Col md={4} className='d-flex align-items-center mb-3'>
                        <div className="icon"><GoPackage /></div><p>Envios Gratis</p>
                    </Col>
                    <Col md={4} className='d-flex align-items-center mb-3'>
                        <div className="icon"><AiOutlineMedicineBox /></div><p>Atención Veterinaria</p>
                    </Col>
                    <Col md={4} className='d-flex align-items-center mb-3'>
                        <div className="icon"><AiOutlinePercentage /></div><p>Promociones</p>
                    </Col>
                </Row>
            </Container>
    </section>
    )
}