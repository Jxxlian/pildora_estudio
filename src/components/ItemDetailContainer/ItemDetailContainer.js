import { getProduct } from "../../asyncmonk"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
 

const ItemDetailCointainer = () => {
    const [item, setItem] = useState({})
    const [load, setLoad] = useState(true)

    const { productID } = useParams()   
    

    useEffect(() => {
        setLoad(true)

        getProduct(productID).then(r => {
            setItem(r)            
        }).finally(() =>{
                setLoad(false)
            }) 
    }, [])
    
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
