import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({item}) => {    
    
    return (
        <div className="ItemDetail">
           <img src={item.pictureURL} alt="imagen"/>
           
           <div className="textContainer">
                <h1>{item.id} - {item.title}</h1>           
                <p>{item.description}</p>
                <h2>${item.price}</h2>   
                <ItemCount stock='5' initial='1'/>                
           </div>            
           
        </div>
    )
}

export default ItemDetail