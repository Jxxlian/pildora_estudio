import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = (prop) => {
    return (
        <div className="greeting">
            <h1 >{prop.greeting}</h1>
            <ItemCount stock='5' initial='1'/>
        </div>
    )
}

export default ItemListContainer