

import React from "react";
import { ACC_ALERT_SHOW, ACC_FULL_CHANGE, ACC_MINI_OPEN } from "../Types";

const initialState = {
   order: [],
   basket: [],
   likes: [],
   responsive_main: false
}

export function AccountReducer(state = initialState, action) {
   switch (action.type) {
      case ACC_FULL_CHANGE:
         return {
            ...state, ...action.payload
         }
      case ACC_MINI_OPEN:
         return { ...state, responsive_main: !state.responsive_main }
      default: return state
   }
}

