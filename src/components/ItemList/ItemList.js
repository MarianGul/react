import { Item } from "../Item/Item"
import { Container } from 'react-bootstrap';
import { Navigate } from "react-router-dom"
import { Header } from "../Header/Header";
import { PromoInfo } from "../Header/PromoInfo";


export const ItemList = ( {productos, catId} ) => {

    if(productos.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <>
        <Header catId={catId} />
        {!catId && <PromoInfo />}
        <section className="productos">
        <Container>
            <h4>Productos {catId && `| ${catId}`}</h4>
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div>
        </Container>
        </section>
        </>
    )
}