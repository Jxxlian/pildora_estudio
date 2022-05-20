

const Item = ({id, title, price, pictureURL}) => {
    return (
        <div className="ItemCard">
            
                <h1>{id}. {title}</h1>                
                <img src={pictureURL} alt='imagen'></img>
                <h3>${price}</h3>            
            
        </div>
    )
}

export default Item