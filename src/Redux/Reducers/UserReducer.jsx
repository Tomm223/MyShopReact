
import React from "react";
import { USER_CHANGE } from "../Types";

const initialState = {
   user: null
}

export function UserReducer(state = initialState, action) {
   switch (action.type) {
      case USER_CHANGE:
         return { ...state, user: action.payload }
      default: return state
   }
}