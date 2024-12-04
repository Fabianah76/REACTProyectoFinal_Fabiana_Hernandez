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
  console.log(id)

  useEffect(() => {
    const db = getFirestore();

    const refCollection = !id
      ? collection(db, "Items")
      : query(collection(db, "Items"), where("category", "==", id));
      console.log (refCollection)
    getDocs(refCollection)
      .then((snapshot) => {
        console.log (snapshot)
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.log (error))
      .finally(() => setLoading(false));
  }, [id]);

  return <>{loading ? <h5>Loading...</h5> : <ItemList products={items} />}</>;
};

export default ItemListContainer;



