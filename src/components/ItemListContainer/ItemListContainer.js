
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/PedirDatos"
import { ItemList } from "../ItemList/ItemList"
import { Loader } from "../Loader/loader"
import { useParams } from "react-router-dom"

 
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const{catId} = useParams()


    useEffect( () => {
        setLoading(true)

        pedirDatos() 
            .then((res) => {
                if(catId) {
                    setProductos(res.filter((item) => item.categoria === catId))
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [catId])

    return (
        <>
            {
                loading 
                    ? <Loader /> 
                    : <ItemList productos={productos} catId={catId}/>	
            } 
        </>
    )
}