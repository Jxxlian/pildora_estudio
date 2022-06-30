import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'
import Cart from './components/Cart/Cart'
import FormPurchase from './components/FormPurchase/FormPurchase'
import MyPurchase from './components/MyPurchase/MyPurchase'

import ContactMe from './components/ContactMe/ContactMe'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'

import './pildoraStyle.css'


function App() {
   
  return (
    
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar />

              <div className='falseBody'>
                <Routes>
                  <Route path='/' element={ <ItemListContainer greeting="Bienvenidx"/> } />
                  <Route path='/category/:category' element={ <ItemListContainer greeting="Objetos de diseño"/>} />              
                  <Route path='/miscompras' element={ <MyPurchase />}/>
                  <Route path='/contacto' element={ <ContactMe />}/>
                  
                  <Route path='/detail/:productID' element= { <ItemDetailContainer /> }  />                  
                  <Route path='/Cart' element= { <Cart />} />
                  <Route path='/formPurchase' element= { <FormPurchase />} />
                              
                                 
                  <Route path='*' element={ <Error />} />
                </Routes>
              </div>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    
  );
}

export default App;
