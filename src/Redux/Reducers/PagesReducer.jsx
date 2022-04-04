import React from "react";
import { LOCATION_FROM_CHANGE } from "../Types";

const initialState = {
   location: '/'
}

export default function PagesReducer(state = initialState, action) {
   switch (action.type) {
      case LOCATION_FROM_CHANGE:
         return { ...state, location: action.payload }
      default: return state
   }
}