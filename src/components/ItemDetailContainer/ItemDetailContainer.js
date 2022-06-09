import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase'
 

const ItemDetailCointainer = () => {
    const [item, setItem] = useState({})
    const [load, setLoad] = useState(true)

    const { productID } = useParams()   
    

    useEffect(() => {        
        setLoad(true)

        getDoc(doc(db, 'items', productID)).then(response => {
            const product ={ id: response.id, ...response.data()}            
            setItem(product)
        }).catch(error => {
            console.log(error)
        }).finally(() =>{
            setLoad(false)
        })
    },[productID]) 
    
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
        <div className="ItemDetailContainer">
            <ItemDetail item={item} /> 
                       
        </div>
    )}


}

export default ItemDetailCointainer
