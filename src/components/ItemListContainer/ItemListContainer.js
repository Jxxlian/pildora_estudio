
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../asyncmonk"
import {useState, useEffect } from 'react'

const ItemListContainer = (prop) => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        getProducts().then(r => {
            setProduct(r)
        })
    }, [])

    return (
        <div className="greeting">
            <h1 className="greetingTitle">{prop.greeting}</h1>
            
            <div className="container-items">
            <ItemList products={products}/>
            </div>                                   

        </div>
    )
}

export default ItemListContainer