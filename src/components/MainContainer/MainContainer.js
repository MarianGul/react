import { Container } from 'react-bootstrap';

export const MainContainer = ({children}) => {

    return (
        <section className="productos">
            <Container>
            {children}
            </Container>
        </section>
    )

}