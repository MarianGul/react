import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (id, items, price, counter) => {
        const product = cart.find((item) => item.id === id)

        if (product) {
            setCart(cart.map((prod)=> prod.id === items.id ?
            {...product, price: price, quantity: product.quantity + counter}
            : prod))
        } else {
            setCart([...cart, {...items, price: price, quantity: counter}])
        }
    }

    const checkStock = (id, items) => {
        const product = cart.find((item) => item.id === id)
       if(product) {
            return product.quantity + items.quantity > product.stock
        }
    }

    const getPosibleStock = (id) => {
        const product = cart.find((item) => item.id === id)
        return product.quantity
    }

    const quantityCart = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id)) 
    }

    const totalPurchase = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    const finalOffer = (price, offer) => {
        return offer ? price * 0.80 : price
    }


    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            quantityCart,
            deleteItem,
            totalPurchase,
            emptyCart,
            checkStock,
            getPosibleStock,
            finalOffer
            }}>
            {children}
        </CartContext.Provider>
    )
}