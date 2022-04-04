import React from "react";
import { PRODUCT_ALERT_FALSE, PRODUCT_ALERT_TRUE, PRODUCT_IMG_CHANGE } from "../Types";

const initialState = {
   watchImg: 0,
   alert: false
}

export function ProductReducer(state = initialState, action) {
   switch (action.type) {
      case PRODUCT_ALERT_TRUE:
         return { ...state, alert: action.payload };
      case PRODUCT_ALERT_FALSE:
         return { ...state, alert: false }
      case PRODUCT_IMG_CHANGE:
         return { ...state, watchImg: action.payload }
      default: return state
   }
}