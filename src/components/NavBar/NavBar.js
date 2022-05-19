import './NavBar.css'
import { useState} from 'react'
import SecondNavBar from '../SecondNavBar/SecondNavBar'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    const [View, setView] = useState(false)

    return (
        <nav className='navBar'>
            <h1>PILDORA <br/> ESTUDIO</h1>
            <button>Almohadones</button> 
            <button onClick={()=>setView(!View)}>Cerámica</button>            
                {View ? <SecondNavBar /> : null}
            <button>Contacto</button> 

            <CartWidget />      
                
            <div className='followMe'>
                <h3>Seguime en {/* <a  href='#'>instagram</a> */}</h3>
            </div> 
        </nav>
    )
}

export default NavBar