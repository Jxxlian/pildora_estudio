import ItemCount from "../ItemCount/ItemCount"

const Item = ({id, title, price, pictureURL}) => {
    return (
        <div className="ItemCard">            
                <img src={pictureURL} alt='imagen'></img>
                <h1>{id}. {title}</h1>                                
                <h3>${price}</h3>    

                 <ItemCount stock='5' initial='1'/>                   
        </div>
    )
}

export default Item