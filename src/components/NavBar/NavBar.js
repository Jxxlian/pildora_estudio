import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='barra_nav'>
            <h1>Pildora <br/> estudio</h1>
            <button>Cerámica</button>
            <button>Almohadones</button>
            <button>Contacto</button>       
                
            <div className='redes'>
                <h3>Seguime en <a href='#'>instagram</a></h3>
            </div> 
        </nav>
    )
}

export default NavBar