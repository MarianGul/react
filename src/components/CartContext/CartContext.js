import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const addToCart = (id, items, counter) => {
        const idItem = cart.find((item) => item.id === id)

        if (idItem) {
            setCart(cart.map((prod)=> prod.id === items.id ? {...idItem, quantity: idItem.quantity + counter} : prod))
        } else {
            setCart([...cart, {...items, quantity: counter}])
        }
    }

    const quantityCart = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id)) 
    }

    const totalPurchase = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.precio, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, isInCart, quantityCart, deleteItem, totalPurchase, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}