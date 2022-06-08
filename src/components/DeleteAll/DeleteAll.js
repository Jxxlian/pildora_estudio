import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const DeleteAll = () => {
    const { clearAll } = useContext(CartContext)

    return (
        <button className="DeleteAll" onClick={() => clearAll()}>Eliminar todo</button>     
    )
}

export default DeleteAll