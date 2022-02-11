import { Item } from "../Item/Item"
import { Container } from 'react-bootstrap';


export const ItemList = ( {productos, catId} ) => {

    return (
        <section className="productos">
        <Container>
            <h4>Productos {catId ? `| ${catId}` : ''}</h4>
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div>
        </Container>
        </section>
    )
}