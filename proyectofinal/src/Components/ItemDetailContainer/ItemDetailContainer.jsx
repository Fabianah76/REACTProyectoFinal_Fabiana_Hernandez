import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemCount } from "../ItemCount"; 
import { ItemsContext } from "../../contexts/ItemsContext"; 



const ItemDetailContainer = () => {
  const { addItem } = useContext(ItemsContext);

  const [Items, setItems] = useState(null);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const value = useContext(ItemsContext);

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "Items", id);

    getDoc(refDoc)
      .then((snapshot) => {
        setItems({ id: snapshot.id, ...snapshot.data() });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (count) => {
    Swal.fire("Guardado en el carrito!");
    addItem({ ...Items, quantity: count });
  };

  if (loading) {
    return <h5>Loading...</h5>;
  }

  if (!Items) {
    return <h5>Item not found</h5>;
  }

  return (
    <Container className="mt-4">
      <img src={Items.image} style={{ width: "24rem", marginBottom: "1rem" }} />
      <h3>
        {Items.name}
        {value.Items.length}
      </h3>
      <p>{Items.category}</p>
      <p>{Items.stock}</p> 
      <p>{Items.description}</p>
      <p>{Items.price}</p>
      <ItemCount stock={Items.stock} onAdd={onAdd} />
    </Container>
  );
};

export default ItemDetailContainer;


// import { useState, useEffect } from "react"
// import getProducts from "../../data/getProducts"
// import ItemDetail from "./ItemDetail"
// import { useParams } from "react-router-dom"

// const ItemDetailContainer = () => {
//   const [product, setProduct] = useState({})

//   const { idProduct } = useParams()

//   useEffect(()=>{
//     getProducts
//       .then((respuesta)=> {
//         const newProduct = respuesta.find((product)=> product.id == idProduct )
//         setProduct(newProduct)
//       })
//       .catch((error)=> console.log(error))
//   }, [idProduct])

//   return (
//     <ItemDetail product={product} />
//   )
// }
// export default ItemDetailContainer