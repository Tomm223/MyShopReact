import React from "react";
import { combineReducers } from "redux";
import { AccountReducer } from "./Reducers/AccountReducer";
import PagesReducer from "./Reducers/PagesReducer";
import { ProductReducer } from "./Reducers/ProductReducer";
import { ProductsReducer } from "./Reducers/ProductsReducer";
import { UserReducer } from "./Reducers/UserReducer";

export const rootRedux = combineReducers({
   products: ProductsReducer,
   user: UserReducer,
   account: AccountReducer,
   product: ProductReducer,
   pageFrom: PagesReducer
})