import { Link } from "react-router-dom"

const ButtonsHelpers = () => {
    return (
        <div className="buttonsHelpers-container">
                <Link className="buttonsHelpers" to='/'>Seguir comprando</Link> 
                <Link className="buttonsHelpers" to='/cart'>Finalizar compra</Link> 
        </div>
    )
}

export default ButtonsHelpers