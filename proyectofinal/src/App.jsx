import { useState, useEffect } from 'react'
import "./App.css";
import NavBar from './Components/Navbar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './Paginas/NoPage';
import Checkout from "./Components/Checkout";
import { Provider } from './contexts/ItemsContext';
import {getFirestore,getDocs,collection,query,where} from "firebase/firestore";



function App() {
  // useEffect(() => {
  //   const db = getFirestore();

  //   const q = query(
  //     collection(db, "Items"),
  //     where("category", '==', 'Tops')
  //   );

  //   getDocs(q).then((snapshot) => {
  //     if (snapshot.size === 0);
  //     else
  //       snapshot.docs.map((doc) => {
  //         return { id: doc.id, ...doc.data() };
  //       });
  //   });
  // });

  return (
    <div>
      <Provider>
        <BrowserRouter>
          <NavBar />

          <Routes>
        
            <Route path="/" element={<ItemListContainer saludo="Bienvenida a Poch." />} />

            <Route path="/category/:idCategory" element={<ItemListContainer />} />

            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

            <Route path="/checkout" element={<Checkout />} />
        
            <Route path='*' element= {<NoPage/>}/>

          </Routes>    
        </BrowserRouter>
        </Provider>
    </div>
  )
}

export default App
