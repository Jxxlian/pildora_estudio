import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    
    return (
        <nav className='navBar'>
            <Link to='/'><h1>PILDORA <br/> ESTUDIO</h1></Link>
            
            <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} to='/category/ceramica'>Cerámica</NavLink>            
            <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} to='/category/almohadon'>Almohadones</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} to='/contacto'>Contacto</NavLink> 

            <CartWidget />      
                
            <div className='followMe'>
                <h3>Seguime en <a href="https://www.instagram.com/pildora_estudio/" target="_blank" rel = "noreferrer">instagram</a> </h3>
            </div> 
        </nav>
    )
}

export default NavBar