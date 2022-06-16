import { useContext, useState } from "react"
import CartContext from "../../Context/CartContext"
import DeleteAll from "../DeleteAll/DeleteAll"
import { Link } from "react-router-dom"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../service/firebase/index'


const Cart = () => {
    const { cart, removeItem, subtotal  } = useContext(CartContext)     
    const [idCompra, setidCompra ] = useState()

    const confirmPurchase = () => {               
              
        const objPurchase = {
            buyer: {
                name: 'Julian',
                phone: '123',
                email: 'julian@mail.com',
            },
                item: cart,
                date: '12/12/12',
                total: subtotal                            
        }      
        console.log('hice click y creé orden')
        
        const collecionReference = collection(db, 'orders')
        addDoc(collecionReference, objPurchase).then(({id}) => {
            console.log(id)
            setidCompra(id)
        })
    }

    if(cart.length === 0 ){
        return (
            <div className="nothingToBuyYet">
                <h1>Aún no has agregado nada a tu carrito</h1>
                <Link to='/'><button>Haz click aquí para ver nuestros productos</button></Link>
            </div>
        )
    } else {
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
                        <tr className="subtotal">
                            <td></td>  {/* Queda vacio solo para ocupa un lugar en la tabla */}
                            <td>Subtotal</td>                        
                            <td>$ { subtotal }</td>
                        </tr>
                    </table>

                    <DeleteAll />                    
                    {idCompra ? 
                    <Link className="DeleteAll" to={`/formPurchase/${idCompra}`}>Hacer click para completar datos de envío</Link>
                    :<button className="DeleteAll" onClick= {confirmPurchase} >Confirmar compra</button>  
                    }
                </div>
            </>
}}

export default Cart