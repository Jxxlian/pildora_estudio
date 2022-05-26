import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import SecondNavBar from '../SecondNavBar/SecondNavBar'
import {useState} from 'react'

const NavBar = () => {
    const[show, setShow] = useState(false)

    return (
        <nav className='navBar'>
            <h1>PILDORA <br/> ESTUDIO</h1>
            <button onClick={() => setShow(!show)}>Cerámica</button>
            {show && <SecondNavBar/>}
            <button>Almohadones</button>
            <button>Contacto</button> 

            <CartWidget />      
                
            <div className='followMe'>
                <h3>Seguime en <a href="https://www.instagram.com/pildora_estudio/" target="_blank" rel = "noreferrer">instagram</a> </h3>
            </div> 
        </nav>
    )
}

export default NavBar