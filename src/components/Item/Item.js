import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'

const Item = ({id, title, price, pictureURL}) => {
    return (
        <Link to={`/detail/${id}`}>
            <div className="ItemCard">            
                    <img src={pictureURL} alt='imagen'></img>
                    <h1>{id}. {title}</h1>                                
                    <h3>${price}</h3>    

                    <ItemCount stock='5' initial='1'/>                   
            </div>
        </Link>
    )
}

export default Item