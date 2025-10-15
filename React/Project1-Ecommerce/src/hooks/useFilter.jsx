// useCart.js
import { useContext } from "react";
import {FilterContext} from "../context/filterProvider";

export const useFilters = () => useContext(FilterContext);
