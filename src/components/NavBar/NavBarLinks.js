import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBarLinks = (props) => {
    
    const { closeMenu } = props

    return (
    <>
        <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} 
        to='/category/ceramica' onClick={closeMenu}>Cerámica</NavLink>

        <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} 
        to='/category/almohadon' onClick={closeMenu}>Almohadones</NavLink>
        
        <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} 
        to='/miscompras' onClick={closeMenu}>Mis compras</NavLink> 

        <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} 
        to='/contacto' onClick={closeMenu}>Contacto</NavLink> 

        <CartWidget />
    </>    
    )
}

export default NavBarLinks