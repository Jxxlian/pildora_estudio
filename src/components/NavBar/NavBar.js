import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import { getCategory } from '../../service/firebase/API'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategory().then(response => {
            setCategory(response)
        })
    }, [])
        
        console.log(getCategory().then(response => {
            setCategory(response)
        }))
   
    return (
        <nav className='navBar'>
            <Link to='/'><h1>PILDORA <br/> ESTUDIO</h1></Link>

                {/* con este código obtengo los botones de menú de una forma dinámica según lo cargado en mi BD   */}
                {category.map( catego => {                    
                    return (<NavLink key={catego.id} className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} 
                    to={`/category/${catego.id}`}>{catego.description}</NavLink>)
                })}
            
                {/* el boton de formulario de contacto lo dejo fuera del map porque no depende de la categorias de los productos a vender */}
                <NavLink className={({isActive}) => isActive ? 'activeButton' : 'navBarButton'} to='/contacto'>Contacto</NavLink> 

            <CartWidget />
                
            <div className='followMe'>
                <h3>Seguime en <a href="https://www.instagram.com/pildora_estudio/" target="_blank" rel = "noreferrer">instagram</a> </h3>
            </div> 
        </nav>
    )
}

export default NavBar