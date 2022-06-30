
import ItemDetail from "../ItemDetail/ItemDetail"

import { useParams } from "react-router-dom"
import { getProductById } from "../../service/firebase/API"
import { useAPI } from "../../Hooks/useAPI"
import FooterMobile from "../Footer/FooterMobile"


const ItemDetailCointainer = () => {
   
    const { productID } = useParams()   

    /* acá está la lógica para consultar a la BD  */
    const { load, inf } = useAPI(() => getProductById(productID), [productID])
    
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
        <div className="ItemDetailContainer">
            <h1>¿Te gusta? </h1>
            <h2>Podemos llevarlo a tu casa</h2>
            <ItemDetail item={inf} />                        
        </div>
        <FooterMobile />
        </>
    )}


}

export default ItemDetailCointainer
