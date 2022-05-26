import { getProduct } from "../../asyncmonk"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailCointainer = () => {
    const [item, setItem] = useState({})

    useEffect(() => {
        getProduct().then(r => {
            setItem(r)            
        })
    }, [])
    
  
    return (
        <div className="ItemDetailContainer">
            <ItemDetail item={item} />            
        </div>
    )


}

export default ItemDetailCointainer
