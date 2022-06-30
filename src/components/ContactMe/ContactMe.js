import FooterMobile from '../Footer/FooterMobile'

const ContactMe = () => {

    return(
        <>                 
        <div className="FormPurchase-container">
            <h1>Enviame tu mensaje</h1>
            <form action='#' method="POST">  
                  
                <label>Asunto</label>        
                <input type="text" required/>
                <label>Nombre y apellido</label>
                <input type="text" required/>
                <label>Correo electrónico</label>
                <input type="email" required/>
                <label>Mensaje</label>
                <textarea required></textarea>
                <input className="formButton" type='submit' onClick={e => e.preventDefault()} value='Enviar mensaje'/>

            </form>
        </div>
        
        <FooterMobile />
        </>
    )
}

export default ContactMe