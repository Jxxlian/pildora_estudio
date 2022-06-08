import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import DeleteAll from "../DeleteAll/DeleteAll"


const Cart = () => {
    const { cart, removeItem } = useContext(CartContext)

    return  <>
                <h1>Tu compra</h1>
                <div className="cartContainer">
                <table  className="cartStyle">
                         <tr className="tableHeader">
                            <td>Producto</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                            <td>Eliminar producto</td>                                          
                        </tr>
                        
                    {cart.map(prod =>                                       
                        <tr key={prod.id}>
                            <td>{prod.title}</td>
                            <td>$ {prod.price}</td>
                            <td>Cantidad: {prod.quantity}</td>
                            <td><button onClick={() => removeItem(prod.id)}><img src="../../images/eliminar.png" alt="imagen de cruz roja" /></button></td>                                          
                        </tr>                   
                    )}
                     </table>

                    <DeleteAll />
                </div>
            </>
}

export default Cart