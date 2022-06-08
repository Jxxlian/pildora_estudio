import CartContext from "../../Context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { getQuantityPurchased } = useContext(CartContext)
    const quantityPurchased = getQuantityPurchased()

    return (
        
        <Link to='/cart' className="CartWidget">
           
            <h5>Tu compra:</h5>
            <img src='../../images/carrito.png' alt="Carrito de compras"/>
            <h6>{ quantityPurchased }</h6>
           
        </Link>        
    )
}

export default CartWidget