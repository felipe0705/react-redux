// components/Navbar.js
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { cleanCart } from "../store/actions/cartActions";

const routes = { to: "/products", text: "PRODUCTS" };

const Navbar = () => {
  const {items} = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const totalItems = items.reduce((totalItems,item)=>totalItems+item.quantity,0)

  return (
    <nav style={styles.nav}>
      <NavLink to={routes.to} style={styles.link}>
        {routes.text}
      </NavLink>
      <NavLink to="/cart" style={styles.link}>
        CART 🛒 ({totalItems})
      </NavLink>
      <button onClick={()=>dispatch(cleanCart())} style={styles.button}>
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
};

export default Navbar;
