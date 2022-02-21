import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from "../Loader/loader"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()
    

    useEffect( () => {
        setLoading(true)

        const itemRef = doc(db, 'productos', itemId)
        getDoc(itemRef)
        .then((doc) => {
            setItem({id:doc.id, ...doc.data()})
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