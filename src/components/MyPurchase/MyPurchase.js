import { useState } from "react"
import { getPurchaseByID } from "../../service/firebase/API"


const MyPurchase = () => {
    const initialValue = ' '
    const [form, setForm] = useState(initialValue)
    const [myPurchase, setMyPurchasse ] = useState ()   
    
  
    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})       
        
    }

    if(!myPurchase) {
    return (    
        <div className="FormPurchase-container">
            <h1>Mis compras realizadas</h1>
            <form >
                <label>Ingresá el número de compra que deseas consultar</label>
                <input type='text' name="idBuy" value={form.idBuy} onChange={handleChange}/>
                <input type='submit' className="formButton" onClick={ (e) => {
                    e.preventDefault()                                       
                    getPurchaseByID(form.idBuy.trim()).then(response => {
                        setMyPurchasse(response)                       
                    })
                }}/>
            </form>
            
        </div>        
        
    )} else {          
        
        return (
            <div className="myPurchase-result">
                <h3>La orden nº <i>{form.idBuy} </i>corresponde a la compra de:</h3>
             
                      {myPurchase.map(element =>                       
                      <ul key={element.id}>
                        <li><b>Item:</b> {element.title}</li>
                        <li><b>Precio:</b> ${element.price}</li>
                        <li><b>Cantidad:</b> {element.quantity}</li>
                        <li><b>SubTotal:</b> ${element.quantity * element.price}</li>
                      </ul> 
                      )} 
            </div>
            
        )

    }
}

export default MyPurchase