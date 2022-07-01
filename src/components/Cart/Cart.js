import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import DeleteAll from "../DeleteAll/DeleteAll"

import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, removeItem, subtotal  } = useContext(CartContext)        

    if(cart.length === 0 ){
        return (
            
            <div className="nothingToBuyYet">
                <h1>Aún no has agregado nada a tu carrito</h1>
                <Link to='/'><button>Ver nuestros productos</button></Link>
            </div>
            
        )
    } else {
        return  <>
                <h1>Tu compra</h1>
                <div className="cartContainer">
                    <table className="cartStyle">
                         <tr className="tableHeader">
                            <td>Producto</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                            <td>Eliminar producto</td>                                          
                        </tr>                        
                    {cart.map(prod =>                                       
                        <tr key={prod.id}>
                            <td>{prod.title}</td>
                            <td>${prod.price}</td>
                            <td>Cantidad:{prod.quantity}</td>
                            <td><button onClick={() => removeItem(prod.id)}><img src="../../images/eliminar.png" alt="imagen de cruz roja" /></button></td>                                          
                        </tr>                   
                    )}
                        <tr className="subtotal">
                            <td style={{color: 'white'}}>.</td>  {/* Queda vacio solo para ocupa un lugar en la tabla */}
                            <td>Subtotal</td>                        
                            <td>${ subtotal }</td>
                        </tr>
                    </table>
                    
                    <div className="container-buttons-table">
                    <DeleteAll />                    
                    
                    <Link className="DeleteAll" to='/formPurchase'>Completar datos de envío</Link>                                       
                    </div>
                    
                </div>
                
                
            </>
}}

export default Cart