import { Item } from "../Item/Item"
import { MainContainer } from "../MainContainer/MainContainer"


export const ItemList = ( {productos} ) => {

    return (
        <MainContainer>
            <h2>Productos</h2>
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div>
        </MainContainer>
    )
}