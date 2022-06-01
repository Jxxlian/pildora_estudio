import ItemList from "../ItemList/ItemList"
import { getProductbyCategory, getProducts } from "../../asyncmonk"
import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = (prop) => {
    const [products, setProduct] = useState([])
    const [load, setLoad] = useState(true)

    const { category } = useParams()
    

    useEffect(() => {
        setLoad(true)

        if(category === undefined) {
            getProducts().then(r => {
                setProduct(r)
            }).finally(() =>{
                 setLoad(false)  
            }) 
        } else {
            getProductbyCategory(category).then( r => {
                setProduct(r)
            }).finally(() =>{
                 setLoad(false)
            }) 
        }
    }, [category])

    if(load) {
        return(
            <div className="overlay">
                <div>
                    <img src="../../images/XOsX.gif" alt="load gif"/>
                    <h3>Cargando...</h3>                                        
                </div>
            </div>
        )
    } else {
    return (
        
        <div className="greeting">
            <h1 className="greetingTitle">{prop.greeting}</h1>
                
            <div className="container-items">
            <ItemList products={products}/>
            </div>                                   

        </div>
    )}
}

export default ItemListContainer