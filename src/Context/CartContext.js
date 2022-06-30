import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart ] = useState([])
    const [subtotal, setSubtotal ] = useState(0)
    
    useEffect(() => {
        updateSubtotal()        
    }, [cart])

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

    /* Hago que el value pueda empezar en 0 porque sino cuando no hay stock del producto ocmienza en 1 aunque no tenga disponible esa cantidad */
    const getItemQuantity = (id) => {
        const product = cart.find(p => p.id === id)
        return product ? product.quantity : 0
    }

    const isInCart = (id) => {
        return cart.some ( p => p.id === id)
    }  

    const updateSubtotal = () => {
        let add = 0
            cart.forEach (p => {
                add += p.price * p.quantity
            })
    setSubtotal(add)
    }
    

    return(
        <CartContext.Provider value={{addItem, 
                                    getQuantityPurchased, 
                                    getItemQuantity, 
                                    removeItem, 
                                    clearAll,                                     
                                    subtotal, 
                                    cart                                    
                                    }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext