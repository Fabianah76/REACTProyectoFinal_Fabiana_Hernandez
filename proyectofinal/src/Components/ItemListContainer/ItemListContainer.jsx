import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = !id
      ? collection(db, "Items")
      : query(collection(db, "Items"), where("category", "==", id));

    getDocs(refCollection)
      .then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .finally(() => setLoading(false));
  }, [id]);

  return <>{loading ? <h5>Loading...</h5> : <ItemList products={items} />}</>;
};

export default ItemListContainer;




// import { useEffect, useState } from "react";
// import ItemList from "./ItemList";
// import getProducts from "../../data/getProducts";
// import { useParams } from "react-router-dom"
// import "./itemListContainer.css"

// const ItemListContainer = ({ saludo }) => {
//   const [products, setProducts] = useState([]);

//   const { idCategory } = useParams()

//   useEffect(() => {
//     getProducts
//       .then((respuesta) => {
//         if(idCategory){
//           //filtrar los productos
//           const newProducts = respuesta.filter((producto)=> producto.category.toLowerCase() === idCategory)
          
//           setProducts(newProducts)
//         }else{
//           //devolver todos los productos
//           setProducts(respuesta)
//         }
//       })
//       .catch((error) => console.log(error))
//     //   .finally(() => console.log("Finalizo la promesa"));
//   }, [idCategory]);

//   return (
//     <div className="item-list-container">
//       <h2 className="title-items">{saludo}</h2>
//       <ItemList products={products} />
//     </div>
//   );
// };
// export default ItemListContainer;