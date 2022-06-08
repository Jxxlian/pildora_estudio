import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from "../../Context/CartContext"

const ItemDetail = ({item}) => {  
    const [ quantity, setQuantity ] = useState()
    const { id, title, description, price, pictureURL, } = item 

    const { addItem, getItemQuantity } = useContext(CartContext)

    const valueInitial = getItemQuantity(id)
    
    const onAdd = (quantity) => {
        console.log('agrego al carrito')
        console.log(quantity)
        setQuantity(quantity)    
        console.log(id, title, price, quantity)
        addItem({id, title, price, quantity})        
    }    

    return (
        <div className="ItemDetail">
           <img src={pictureURL} alt="imagen"/>
           
           <div className="textContainer">
                <h1>{id} - {title}</h1>           
                <p>{description}</p>
                <h2>${price}</h2>   

               
                {quantity > 0 ? 
                <Link className="finalize" to='/cart'>Finalizar mi compra</Link> 
                : <ItemCount stock='5' initial={valueInitial} handleonAdd={onAdd}/>} 
           </div>            
           
        </div>
    )
}

export default ItemDetail