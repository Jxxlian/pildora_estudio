import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'
import Cart from './components/Cart/Cart'
import FormPurchase from './components/FormPurchase/FormPurchase'
import SuccessfulPurchase from './components/SuccessfulPurchase/SuccessfulPurchase'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext'



function App() {
   
  return (
    
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar />

              <div className='falseBody'>
                <Routes>
                  <Route path='/' element={ <ItemListContainer greeting="Bienvenidx"/> } />
                  <Route path='/category/:category' element={ <ItemListContainer greeting="Filtrado"/>} />              
                  <Route path='/contacto' element={<h1>Mandame un mensaje</h1>}/>
                  
                  <Route path='/detail/:productID' element= { <ItemDetailContainer /> }  />                  
                  <Route path='/Cart' element= { <Cart />} />
                  <Route path='/formPurchase' element= { <FormPurchase />} />
                  <Route path='/SuccessfulPurchase' element= { <SuccessfulPurchase/>} />
                  

                                  
                  <Route path='*' element={ <Error />} />
                </Routes>
              </div>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    
  );
}

export default App;
