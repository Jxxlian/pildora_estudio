import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart ] = useState([])

    const addItem = (product) => {
        if(isInCart(product.id)) {
            const newCart = cart.map( p => {
                            if(p.id === product.id) {
                                const newProduct = {...product, quantity: product.quantity}
                                return newProduct
                                } else {
                                    return product 
                                }
                            })
            setCart(newCart)  
        } else {
            setCart([...cart, product])                
        }
    }

    const removeItem = (id) => {
        const newCart = cart.filter( p => p.id !== id)
        setCart(newCart)
    }

    const clearAll = () => {
        const newCart = []
        setCart(newCart)
    }

    const getQuantityPurchased = () => {
      let i = 0
        cart.forEach (p => {
            i += p.quantity
        }) 
      return i
    }

    const getItemQuantity = (id) => {
        const product = cart.find(p => p.id === id)
        return product ? product.quantity : 1
    }

    const isInCart = (id) => {
        return cart.some ( p => p.id === id)
    }


    return(
        <CartContext.Provider value={{addItem, getQuantityPurchased, getItemQuantity, removeItem, clearAll, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext