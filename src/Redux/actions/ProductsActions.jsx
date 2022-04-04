import React from "react";
import { CheckFilterType } from "../../Filtres/ProductSelections";
import { PRODUCTS_FILTER, PRODUCTS_INIT } from "../Types";

export function ProductsInit(products) {
   return {
      type: PRODUCTS_INIT,
      payload: products
   }
}

export function ProductsFiltered(filter) {
   return {
      type: PRODUCTS_FILTER,
      payload: filter
   }
}
export function CollectionsFiltered(filter) {
   return async function (dispatch) {
      const massFilter = await CheckFilterType(filter)
      dispatch({
         type: PRODUCTS_FILTER,
         payload: massFilter
      })
   }
}