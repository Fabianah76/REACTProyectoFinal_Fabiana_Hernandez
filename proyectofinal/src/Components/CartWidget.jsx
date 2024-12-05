import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

export const CartWidget = () => {
  const { items } = useContext(ItemsContext); 
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <>
      <Link to="/checkout">
        <FiShoppingCart
        style={{ width: "30px", height: "auto" }}
        />
        {totalItems > 0 && <span>{totalItems}</span>}
      </Link>
      
    </>
  );
};

export default CartWidget;