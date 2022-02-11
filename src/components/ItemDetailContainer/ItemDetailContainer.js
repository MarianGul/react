import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from "../Loader/loader"
import { pedirDatos } from "../../helpers/PedirDatos"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
    

    useEffect( () => {
        setLoading(true)

        pedirDatos() 
            .then((res) => {
                setItem(res.find((item) => item.id === parseInt(itemId)))
            })

            .finally(() => {
               setLoading(false)
            })

    }, [itemId])

    return (
        <>
            {
                loading 
                    ? <Loader /> 
                    : <ItemDetail {...item}/>	
            } 
        </>
    )
}