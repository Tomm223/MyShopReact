import React from "react";
import { PRODUCTS_FILTER, PRODUCTS_INIT } from "../Types";

const initialState = {
   products: [],
   filter: []
}

export function ProductsReducer(state = initialState, action) {
   switch (action.type) {
      case PRODUCTS_INIT:
         return { ...state, products: action.payload }
      case PRODUCTS_FILTER:
         return { ...state, filter: action.payload }
      default: return state
   }
}