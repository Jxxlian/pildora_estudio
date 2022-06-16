import { useParams } from "react-router-dom"

const FormPurchase = () => {
    
    const { idCompra } = useParams()  
   
        return (
            <div className="pruebaMomentanea">
                <h1>La compra quedó registrada bajo el número de gestión {idCompra}</h1>
            </div>
        )}
   

export default FormPurchase
