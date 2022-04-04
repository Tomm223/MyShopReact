import React from "react";
import { ACC_FULL_CHANGE, ACC_MINI_OPEN } from "../Types";

export function AccountFullChange(obj) {
   return {
      type: ACC_FULL_CHANGE,
      payload: obj
   }
}

export function AccMiniOpen() {
   return {
      type: ACC_MINI_OPEN
   }
}