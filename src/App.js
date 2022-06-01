import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error from './components/Error/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
       
       <BrowserRouter>
            
            <NavBar />

              <div className='falseBody'>
              <Routes>
                <Route path='/' element={ <ItemListContainer greeting="Bienvenidx"/> } />
                <Route path='/category/:category' element={ <ItemListContainer greeting="Filtrado"/>}  />              
                <Route path='/contacto' element={<h1>Mandame un mensaje</h1>}/>
                
                <Route path='/detail/:productID' element= { <ItemDetailContainer /> }  />
               
                <Route path='*' element={<Error />} />
              </Routes>
              </div>

        </BrowserRouter>
           
    </div>
  );
}

export default App;
