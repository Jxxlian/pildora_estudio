import { useForm } from '../../Hooks/useForm'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'



  
const initialValue = {
    name:"",
    phone:"",
    email:"",
    confirmEmail:"",
}

const validateForm = (form) =>{
    let error = {}
    let pattterName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
    let patternPhone = /^\d+$/
    let patternEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    
    /* Anido los condicionales para que la evaluación se haga de a uno y no todos a la vez */

    if(!form.name.trim()){ /* con este método elimino los espacios en blanco en ambos extremos del string */
        error.name = 'El campo "nombre" es obligatorio'
    }else if(!pattterName.test(form.name.trim())){
        error.name = 'El campo "nombre" solo acepta letras y espacios en blanco'
    } else if(!form.phone.trim()){
        error.phone = 'El campo "teléfono" es obligatorio'
    } else if(!patternPhone.test(form.phone.trim())){
        error.phone = 'El campo "teléfono" solo acepta números'
    } else if (!form.email.trim()){
        error.email = 'El campo "correo electrónico" es obligatorio'
    } else if (!patternEmail.test(form.email.trim())) {
        error.email = 'El campo "correo electrónico" debería tener un formato similar a "ejemplo@mail.com"'
    } else if (!form.confirmEmail.trim()){
        error.confirmEmail = 'El campo es obligatorio'
    }else if(form.confirmEmail !== form.email) {
        error.confirmEmail = 'Las direcciones de e-mail no coinciden'
    }

    return error
}

const FormPurchase = () => {   

    /* desestructuro el customeHook */
    const {form, error, idPurchase, handleBlur, handleSubmit, handleChange} = useForm(initialValue, validateForm)
    
    const { clearAll  } = useContext(CartContext)  
   
        if(!idPurchase) 
        {
        return (
            
            <div className="FormPurchase-container">                
                    <h1>Ya casi terminamos</h1>
                    <h3>Por favor completá estos datos para finalizar la compra</h3>
                    
                    <form onSubmit={handleSubmit}>
                        <label>Nombre y apellido</label>
                        <input type='text' name="name" value={form.name} onBlur={handleBlur} onChange={handleChange} />
                        {error.name && <h5>{error.name}</h5>}
                        <label>Teléfono</label>
                        <input type='text' name="phone" value={form.phone} onBlur={handleBlur} onChange={handleChange}  />
                        {error.phone && <h5>{error.phone}</h5>}
                        <label>Correo electrónico</label>
                        <input type='email' name="email" value={form.email} onBlur={handleBlur} onChange={handleChange}  />
                        {error.email && <h5>{error.email}</h5>}
                        <label>Repetí tu correo electrónico</label>
                        <input type='email' name="confirmEmail" value={form.confirmEmail} onBlur={handleBlur} onChange={handleChange}/>
                        {error.confirmEmail && <h5>{error.confirmEmail}</h5>}
                        
                            {/* de esta forma valido que los inputs estén llenos y el {} error este vacio. 
                            Solo así se puede apretar el botón, confirmar la compra y generar la orden*/
                            form.confirmEmail !== '' && Object.keys(error).length === 0 
                            ? <input className="formButton" type="submit" value="Confirmar compra"></input>
                            : <h4>Es necesario que completes todos los campos para que puedas finalizar la compra</h4>
                            }                                              
                    </form>                
            </div>   
                                
                )} else {
                clearAll()
                return (    
                                
                <div className='confirmID'>                
                    <img src="../../images/gatito.gif" alt="gatito"/>
                    <h1> La compra quedó registrada <br/> bajo la gestión nº {idPurchase}</h1>                                    
                </div>
                 
            )}
    
}
   

export default FormPurchase
