
import { useEffect } from "react"

const SuccessfulPurchase = (props) => {

    const { idPurchase } = props
    

    useEffect(() => {
        console.log(idPurchase)
        
    },[idPurchase])
    
    if(idPurchase){
        return (
            <div className="pruebaMomentanea">
                <h1>Se confirma la compra bajo el ID ${idPurchase}</h1>
            </div>
    )}

    }
   
export default SuccessfulPurchase