import CartContext from "../../Context/CartContext"
import { useContext } from "react"
/* import { Link } from "react-router-dom" //FALTA AGREGAR EL LINK AL CARTWIDGET */

const CartWidget = () => {
    const { getQuantityPurchased } = useContext(CartContext)
    const quantityPurchased = getQuantityPurchased()

    return (
        
        <div path='/cart' className="CartWidget">
           
            <h5>Tu compra:</h5>
            <img src='../../images/carrito.png' alt="Carrito de compras"/>
            <h6>{ quantityPurchased }</h6>
           
        </div>        
    )
}

export default CartWidget