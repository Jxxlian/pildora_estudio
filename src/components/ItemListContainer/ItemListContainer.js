import ItemList from "../ItemList/ItemList"
import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../service/firebase'

const ItemListContainer = (prop) => {
    const [products, setProduct] = useState([])
    const [load, setLoad] = useState(true)

    const { category } = useParams()
    

    useEffect(() => {
        setLoad(true)

        getDocs(collection(db, 'items')).then(response => {
            console.log(response)
            const product = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            console.log(product)
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() =>{
            setLoad(false)
        }) 
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