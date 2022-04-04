import React from "react";
import { FILTER_CATALOGE } from "../Types";

const initialState = {
   category: [],
   brand: [],
   material: [],
   season: [],
   color: [],
   sales: null,

}

function FilterProductsReducer(state = initialState, action) {
   switch (action.type) {

      case FILTER_CATALOGE:
         return { ...state, }

      default: return { ...state }
   }
}