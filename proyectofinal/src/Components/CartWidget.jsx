import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

export const CartWidget = () => {
  const { Items } = useContext(ItemsContext);

  const totalItems = Items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <Link to="/checkout">
        <img
          className="carrito"><FiShoppingCart />
        </img> 
          
        {totalItems > 0 && <span>{totalItems}</span>}
      </Link>
    </>
  );
};

export default CartWidget;