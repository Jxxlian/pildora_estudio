import { useState, useContext } from "react"
import CartContext from "../Context/CartContext"
import { createOrder } from "../service/firebase/API"

export const useForm = (initialValue, validateForm) => {
    const [form, setForm] = useState(initialValue)
    const [error, setError] = useState({})

    const { cart, subtotal  } = useContext(CartContext)   
    const [idPurchase, setIdPurchase ] = useState()

    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }

    const handleBlur = (e) => {
        handleChange(e)
        setError(validateForm(form))
    }

    /* al hacer click en submit se crea la orden */
    const handleSubmit = (e) => {
        e.preventDefault()
        const objPurchase = {
            buyer: {
                name: form.name,
                phone: form.phone,
                email: form.email,
            },
                item: cart,
                date: Date(),
                total: subtotal                            
        }      
        console.log('hice click y creé orden')        
           
        createOrder(objPurchase).then(response => {
            setIdPurchase(response)            
        })        
    }

    return {
        form, error, idPurchase,
        handleBlur, handleSubmit, handleChange
    }

}