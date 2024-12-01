import { useState } from 'react'
import "./App.css";
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './Paginas/NoPage';
import Layout from './Paginas/Layout';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        
        <Route path="/" element={<ItemListContainer saludo="Bienvenida a Poch." />} />

        <Route path="/category/:idCategory" element={<ItemListContainer />} />

        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        
        <Route path='*' element= {<NoPage/>}/>

      </Routes>    
    </BrowserRouter>
  )
}

export default App
