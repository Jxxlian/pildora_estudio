import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'
import { useContext } from 'react'


const NavBar = () => {
    
    const { cart } = useContext(CartContext)  

    return (
        <nav className='navBar'>
            <Link to='/'><h1>PILDORA <br/> ESTUDIO</h1></Link>
            
            <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} to='/category/ceramica'>Cerámica</NavLink>            
            <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} to='/category/almohadon'>Almohadones</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} to='/contacto'>Contacto</NavLink> 

            { cart.length > 0 && <CartWidget />}
                
            <div className='followMe'>
                <h3>Seguime en <a href="https://www.instagram.com/pildora_estudio/" target="_blank" rel = "noreferrer">instagram</a> </h3>
            </div> 
        </nav>
    )
}

export default NavBar