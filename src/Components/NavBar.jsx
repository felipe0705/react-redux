// components/Navbar.js
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/actions/cartActions";
import { createProduct, getProducts } from "../store/actions/productActions";

const routes = { to: "/products", text: "PRODUCTS" };

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartStore.items);
  const dispatch = useDispatch();
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(()=>{
    console.log("Se ejecuto Use Effect");
    dispatch(getProducts());    
  },[])

  return (
    <nav style={styles.nav}>
      <NavLink to={routes.to} style={styles.link}>
        {routes.text}
      </NavLink>
      <NavLink to="/cart" style={styles.link}>
        CART 🛒 ({totalItems})
      </NavLink>
      <button onClick={()=>dispatch(createProduct())} style={styles.buttonCreate}>
        Create Product
      </button>
      <button onClick={()=>dispatch(clearCart())} style={styles.button}>
        Clean Cart
      </button>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "10px",
    backgroundColor: "#333",
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  button: {
    marginLeft: "auto",
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: "#ff4d4d",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
  },
  buttonCreate: {
    marginLeft: "auto",
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: "blue",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
  },
};

export default Navbar;
