// useCart.js
import { useContext } from "react";
import {CartContext} from "../context/cartProvider";

export const useCart = () => useContext(CartContext);
