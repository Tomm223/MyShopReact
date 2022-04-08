import React from "react";
import { useSelector } from "react-redux";
import { takeEvery, put, call } from 'redux-saga/effects'
import { AccProductGet, getIdUser } from "../Fetch/Fetching";
import { AccountFullChange } from "./actions/AccountActions";
import { productShowAlert } from "./actions/ProductActions";
import { ProductsInit } from "./actions/ProductsActions";
import { UserInit } from "./actions/UserActions";
import { ParseAccountChange, ParseProducts, ParseUser } from "./GetLocalStorage";
import { ACC_FULL_CHANGE, INITIALSTATE } from "./Types";

export function* sagaWatcher() {
   yield takeEvery(INITIALSTATE, sagaInitial)
}


function* sagaInitial() {
   const payloadAcc = yield call(ParseAccountChange)
   const payloadUser = yield call(ParseUser)
   const payloadProd = yield call(ParseProducts)
   yield put(AccountFullChange(payloadAcc))
   yield put(ProductsInit(payloadProd))
   yield put(UserInit(payloadUser))
}



