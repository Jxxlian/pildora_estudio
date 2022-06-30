import ItemList from "../ItemList/ItemList"

import { useParams } from 'react-router-dom'
import { getProducts } from "../../service/firebase/API"
import { useAPI } from "../../Hooks/useAPI"
import FooterMobile from "../Footer/FooterMobile"


const ItemListContainer = (prop) => {
    
    const { category } = useParams()
    
    /* acá está la lógica donde consulto a la BD para mostrar productos x categoría */
    const {load, inf } = useAPI(() => getProducts(category), [category])
   

    if(load) {        
        return(
            <div className="overlay">
                <div>
                    <img src="../../images/pato.gif" alt="load gif"/>
                    <h3>Cargando...</h3>                                        
                </div>
            </div>
            )
    } else {
        
        return (
                 <>
            <div className="greeting">
                
                <h1 className="greetingTitle">{prop.greeting}</h1>
                    
                <div className="container-items">
                <ItemList products={inf}/>
                </div>                                   
            
            </div>
            <FooterMobile />
            </>       
    )}
}

export default ItemListContainer