import NavBarLinks from "./NavBarLinks"
import { useState } from "react"

const NavBarMobile = () => {
    const [showMenu, setShowMenu] = useState(false)
    
    const closeMenu = () => setShowMenu(false)
    return (  
    
    <div className="navBarMobile">        
        <img className="burgerMenu" src="../../images/menu.svg" alt="icono menú" onClick={()=> setShowMenu(!showMenu)}/>
        { showMenu && <NavBarLinks closeMenu={closeMenu}/> }
    </div>
          
    )
}

export default NavBarMobile