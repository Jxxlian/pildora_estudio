import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
 

    return (
        <nav className='navBar'>
            <h1>PILDORA <br/> ESTUDIO</h1>
            <button>Cerámica</button>
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