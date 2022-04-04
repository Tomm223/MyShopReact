import React, { useContext } from "react";
import axios from "axios"
import { useSelector } from "react-redux";

export const GetAxios = async (url) => {
   const response = await axios.get(`http://localhost:3000/${url}`)
   return response.data
}
export const PostAxios = async (url, body) => {
   const response = await axios.post(`http://localhost:3000/${url}`, body)
   return response.data
}
export const PatchAxios = async (url, body) => {
   const response = await axios.patch(`http://localhost:3000/${url}`, body)
   return response
}
export const PutAxios = async (url, body) => {
   const response = await axios.put(`http://localhost:3000/${url}`, body)
   return response
}
export const BuildBody = (key, body) => {
   if (key == 'basket') {
      return {
         basket: body
      }
   }
   else if (key == 'likes') {
      return {
         likes: body
      }
   }
   else if (key == 'order') {
      return {
         order: body
      }
   }
}
export const AddProduct = async (userID, basLikOrd, bodyItem) => {
   const { id, AccArray } = await AccProductGet(userID, basLikOrd)
   console.log(id, AccArray);
   await AccArray.push(bodyItem)
   const body = BuildBody(basLikOrd, AccArray)
   console.log(body);
   const responsePatch = await PatchAxios(`UserChange/${id}`, body)
   //return responsePatch
   // СЮДА ПОЛОЖИТЬ ФУНКЦИЯ С ОТОБРАЖЕНИЕМ ТОГО ЧТО PRODUCTS БЫЛ ИЗМЕНЕН
}
export async function DeleteProduct(userID, basLikOrd, prodID) {
   const { id, AccArray } = await AccProductGet(userID, basLikOrd)
   const FilterArray = await AccArray.filter((item) => item.id != prodID)
   const body = BuildBody(basLikOrd, FilterArray)
   const responsePATCH = await PatchAxios(`UserChange/${id}`, body)
   //console.log(responsePATCH);
   return responsePATCH.data
   // СЮДА ПОЛОЖИТЬ ФУНКЦИЯ С ОТОБРАЖЕНИЕМ ТОГО ЧТО PRODUCTS БЫЛ ИЗМЕНЕН
}
export async function DeleteProductS(id, basLikOrd) {
   const body = BuildBody(basLikOrd, [])
   const response = await PatchAxios(`userChange/${id}`, body)
   return response
}
export async function ToOrder(userID, changeStart, changeEnd) {
   const { id, AccArray } = await AccProductGet(userID, changeStart)
   const bodyOrder = await BuildOrder(userID, AccArray)
   if (bodyOrder) {
      const { id, AccArray } = await AccProductGet(userID, changeEnd)
      await AccArray.push(bodyOrder)
      const body = BuildBody(changeEnd, AccArray)
      console.log("body: ", body)
      const responsePatch = await PatchAxios(`UserChange/${id}`, body)
      console.log(responsePatch)
      const response = await DeleteProductS(id, changeStart)
      return response.data
   }
}
export async function ToBasket(userID, productID) {
   const { id, AccArray } = await AccProductGet(userID, "likes")
   const filterProducts = await AccArray.filter((item) => item.id != productID)
   const product = await AccArray.find((item) => item.id == productID) // ДОБАВЛЕНИЕ AMOUNT
   await AddProduct(userID, 'basket', product)
   const resp = await DeleteProduct(userID, 'likes', productID)
   return resp
}
export const BuildOrder = async (userID, arrProduct) => {
   const user = await GetAxios(`userCard/${userID}`)
   const products = await GetAxios('products')
   const ID = Math.random() * 1111111111111111
   const local = `${user.address.country.toUpperCase()}, ${user.address.city}, ${user.address.street}, ${user.address.house}`
   let sum = 0
   arrProduct.map((item) => {
      const product = products.filter((prod) => prod.id == item.product_id)[0]
      const price = product.price
      sum += price
   })
   const body = {
      send: "true",
      local: local,
      sum: sum,
      products: arrProduct,
      //num:  
      id: ID
   }
   return body
}

export async function AccProductGet(userID, basLikOrd) {
   const response = await GetAxios(`UserChange?user_id=${userID}`) //get
   const respChange = basLikOrd ? await response[0][`${basLikOrd}`] : await response[0]
   const ID = response[0].id
   return {
      id: ID,
      AccArray: respChange
   }
}
export async function BuildChangeNewProducts(userID, baskLike, newItem) {
   const { id, AccArray } = await AccProductGet(userID, baskLike)
   const firstArray = []
   const lastArray = []
   const newArray = []
   let index = 0
   await AccArray.map((item, ind) => { if (item.id == newItem.id) index = ind })

   for (var i = 0; i < index; i++) {
      firstArray.push(AccArray[i])
   }
   for (var i = AccArray.length - 1; i > index; i--) {
      lastArray.push(AccArray[i])
   }
   firstArray.push(newItem)
   lastArray.reverse()
   firstArray.map((item) => newArray.push(item))
   lastArray.map((item) => newArray.push(item))
   return {
      id,
      newArray
   }


}




/*

const { id, AccArray } = await AccProductGet(userID, baskLike)
   const firstArray = []
   const lastArray = []
   const newArray = []
   await AccArray.map((item, index) => {
      if (item.id == newItem.id) {
         for (var i = 0; i < index; i++) {
            firstArray.push(AccArray[i])
         }
         for (var i = AccArray.length - 1; i > index; i--) {
            lastArray.push(AccArray[i])
         }
         firstArray.push(newItem)
         lastArray.reverse()
         firstArray.map((item) => newArray.push(item))
         lastArray.map((item) => newArray.push(item))
         return newArray
      }
   })

*/


/*


#See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local   
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
# 

*/

/*
"bugs": {
    "url": "https://github.com/Tomm223/MyShopReact/issues"
  },
  "homepage": "https://github.com/Tomm223/MyShopReact#readme"

*/