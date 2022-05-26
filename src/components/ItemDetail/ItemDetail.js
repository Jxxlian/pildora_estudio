const ItemDetail = ({item}) => {    
    
    return (
        <div className="ItemDetail">
           <img src={item.pictureURL} alt="imagen"/>
           
           <div className="textContainer">
                <h1>{item.id} - {item.title}</h1>           
                <p>{item.description}</p>
                <h2>${item.price}</h2>
           </div>
        </div>
    )
}

export default ItemDetail