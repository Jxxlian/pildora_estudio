import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from 'react'
import CartContext from "../../Context/CartContext"
import ButtonsHelpers from "../ButtonsHelpers/ButtonsHelpers"

const ItemDetail = ({item}) => {  
    const [ quantity, setQuantity ] = useState()
    const { id, title, description, price, pictureURL, stock } = item 

    const { addItem, getItemQuantity } = useContext(CartContext)

    const valueInitial = getItemQuantity(id)
    
    const onAdd = (quantity) => {       
        setQuantity(quantity)            
        addItem({id, title, price, quantity})        
    }    
    

    return (
        <div className="ItemDetail">
           <img src={pictureURL} alt="imagen"/>
           
           <div className="textContainer">
                <h1>{title}</h1>           
                <p>{description}</p>
                <h2>${price}</h2>   

                {quantity > 0 ? 
                <ButtonsHelpers />
                : <ItemCount stock={stock} initial={valueInitial} handleonAdd={onAdd}/>} 
           </div>            
           
        </div>
    )
}

export default ItemDetail