
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/PedirDatos"
import { ItemList } from "../ItemList/ItemList"
import { Loader } from "../Loader/loader"

 
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setProductos( res )
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [])

    return (
        <>
            {
                loading 
                    ? <Loader /> 
                    : <ItemList productos={productos}/>	
            } 
        </>
    )
}