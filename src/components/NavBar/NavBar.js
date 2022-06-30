import { Link } from 'react-router-dom'
import NavBarMobile from './NavBarMobile'
import NavBarDesktop from './NavBarDesktop'


const NavBar = () => {
    
    return (
        <nav className='navBar'>
            <Link to='/'><h1>PILDORA <br/> ESTUDIO</h1></Link>
            
                    <NavBarDesktop />
                    <NavBarMobile /> 
                
        </nav>
    )
}

export default NavBar