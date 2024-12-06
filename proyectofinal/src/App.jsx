import { useState} from 'react'
import "./App.css";
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './Paginas/NoPage';
import Checkout from "./Components/Checkout";
import { Provider } from './contexts/ItemsContext';




function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider>
        <BrowserRouter>
          <NavBar />

          <Routes>
        
            <Route path="/" element={<ItemListContainer saludo="Bienvenida a Poch." />} />

            <Route path="/category/:id" element={<ItemListContainer />} />

            <Route path="/detail/:id" element={<ItemDetailContainer />} />

            <Route path="/checkout" element={<Checkout />} />
        
            <Route path='*' element= {<NoPage/>}/>

          </Routes>    
        </BrowserRouter>
        </Provider>
    </div>
  )
}

export default App
