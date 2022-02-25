import { Item } from "../Item/Item"
import { Container } from 'react-bootstrap';
import { Header } from "../Header/Header";


export const ItemList = ( {productos, catId} ) => {

    return (
        <>
        <Header catId={catId}></Header>
        <section className="productos">
        <Container>
            <h4>Productos {catId ? `| ${catId}` : ''}</h4>
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div>
        </Container>
        </section>
        </>
    )
}