import { Link } from "react-router-dom"

const ButtonsHelpers = () => {
    return (
        <div className="buttonsHelpers-container">
        <Link className="buttonsHelpers" to='/cart'>Finalizar mi compra</Link> 
        <Link className="buttonsHelpers" to='/'>Seguir comprando</Link> 
        </div>
    )
}

export default ButtonsHelpers