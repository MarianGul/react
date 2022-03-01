import { Container } from "react-bootstrap"
export const ThankYou = ({orderId, values}) => {
    return (
        <section className='thanyou'>
        <Container>
            <h2 className='fw-bold'>¡Gracias por tu compra!</h2>
            <h3>Hola {values.name}, estamos preparando tu pedido para enviarlo.<br></br>Te notificaremos cuando haya sido enviado.</h3>
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th colSpan={2}>DETALLE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Nombre y Apellido</th>
                        <td>{`${values.name} ${values.lastname}`}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{values.email}</td>
                    </tr>
                    <tr>
                        <th>Teléfono</th>
                        <td>{values.phone}</td>
                    </tr>
                    <tr>
                        <th>Dirección</th>
                        <td>{values.address}</td>
                    </tr>
                    <tr>
                        <th>Dirección</th>
                        <td>{values.postalcode}</td>
                    </tr>
                    <tr>
                        <th>Id de pedido</th>
                        <td>{orderId}</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    </section>
    )
}