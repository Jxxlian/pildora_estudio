import { useState } from "react"
import { getPurchaseByID } from "../../service/firebase/API"

const MyPurchase = () => {
    const initialValue = ''
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
                <input type='text'name="idBuy" value={form.idBuy} onChange={handleChange}/>
                <input type='submit' className="formButton" onClick={ (e) => {
                    e.preventDefault()                    
                    console.log(`el valor de form.idBuy(o idData) es: ${form.idBuy}`)
                    getPurchaseByID(form.idBuy).then(response => {
                        setMyPurchasse(response)
                    })
                }}/>
            </form>
        </div>
        
    )} else {
        console.log(myPurchase)
        return (
            <div>
                <h3>La orden nº ${myPurchase.id} corresponde a la compra de:</h3>
                <ul>
                    <li>{myPurchase.buyer}</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )

    }
}

export default MyPurchase