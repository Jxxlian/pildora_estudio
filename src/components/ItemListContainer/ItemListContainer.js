import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import getProducts from "../../asyncmonk"
import {useState, useEffect } from 'react'

const ItemListContainer = (prop) => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        getProducts().then( r => {
            setProduct(r)
        })

    }, [])



    return (
        <div className="greeting">
            <h1>{prop.greeting}</h1>
            
            <div className="container-items">
            <ItemList products={products}/>
            </div>
            
            
            <ItemCount stock='5' initial='1'/>
            
            

        </div>
    )
}

export default ItemListContainer