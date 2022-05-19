import {useState} from 'react'

const ItemCount = (prop) => {
    const [count, setCount] = useState(Number(prop.initial))

    const add = () => {        
        count < prop.stock && setCount(count + 1)
    }           

    const subtract = () => {
        count > 0 && setCount (count - 1)  
    }

    return(
        <div className='itemCount'>    
            <div>
            <button onClick={subtract} >-</button>
            <h3>{count}</h3>
            <button onClick={add}>+</button>
            </div>                

            <button>Agregar a mi compra</button>
        </div>

    )
}

export default ItemCount