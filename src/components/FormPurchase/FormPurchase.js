/* import { useParams } from "react-router-dom" */
import { useState, useContext } from "react"
import CartContext from "../../Context/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../service/firebase/index'
import { Link } from "react-router-dom"

const FormPurchase = () => {
    const [idPurchase, setIdPurchase ] = useState()
    
    /* states para formulario */
    const [name, setName ] = useState('hola')
    const [phone, setPhone ] = useState('')
    const [email, setEmail ] = useState('')   

    const { cart, subtotal  } = useContext(CartContext)     
    
    const confirmPurchase = () => {               
              
        const objPurchase = {
            buyer: {
                name: name,
                phone: phone,
                email: email,
            },
                item: cart,
                date: '12/12/12',
                total: subtotal                            
        }      
        console.log('hice click y creé orden')        
                
        const collecionReference = collection(db, 'orders')
        addDoc(collecionReference, objPurchase).then(({id}) => {            
            setIdPurchase(id)
            console.log(id)
        })

        console.log(`pasó por la carga y el ID es ${idPurchase}`)
    }   
    
        return (
            <div className="pruebaMomentanea">                
                    <h1>Ya casi terminamos</h1>
                    <h3>Por favor completá estos datos para finalizar la compra</h3>
                    <form>
                        <label>Nombre y apellido</label>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Teléfono</label>
                        <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        <label>Correo electrónico</label>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        {/* <label>Repetí tu correo electrónico</label>
                        <input /> 
                        ACA FAAAAALTA VALIDAR QUE SEA EL MISMO MAIL Y RECIÉN AHI AGREGUE AL ESTADO*/}
                        <Link to='/SuccessfulPurchase' onClick= {confirmPurchase} props={idPurchase}>Confirmar compra </Link>
                    </form>                
            </div>
        )}
   

export default FormPurchase
