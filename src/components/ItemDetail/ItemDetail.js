import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {  
    const [ quantity, setQuantity ] = useState()
    
    const onAdd = (count) => {
        setQuantity(count)
    }
    

    return (
        <div className="ItemDetail">
           <img src={item.pictureURL} alt="imagen"/>
           
           <div className="textContainer">
                <h1>{item.id} - {item.title}</h1>           
                <p>{item.description}</p>
                <h2>${item.price}</h2>   

                {quantity > 0 ? <Link className="finalize" to='/cart'>Finalizar mi compra</Link> : <ItemCount stock='5' initial='1' handleonAdd={onAdd}/>}
           </div>            
           
        </div>
    )
}

export default ItemDetail