
import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { Loader } from "../Loader/loader"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

 
export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const{catId} = useParams()


    useEffect( () => {
        setLoading(true)

        const prodRef = collection (db, 'productos')
        const q = catId ? query(prodRef, where('category', '==', catId)) : prodRef
        getDocs(q)
        .then((resp) => {
            setProductos(resp.docs.map((doc) => {
                return {
                    id:doc.id,
                    ...doc.data()
                }
            }))
        })
        .finally(() =>{
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