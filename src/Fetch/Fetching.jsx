import React, { useContext } from "react";
import axios from "axios"

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
export const bodyCheck = (key, body) => {
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
   const body = bodyCheck(basLikOrd, AccArray)
   console.log(body);
   const responsePATCH = await PatchAxios(`UserChange/${id}`, body)
   console.log("patch: ", responsePATCH);
   // СЮДА ПОЛОЖИТЬ ФУНКЦИЯ С ОТОБРАЖЕНИЕМ ТОГО ЧТО PRODUCTS БЫЛ ИЗМЕНЕН
}
export const DeleteProduct = async (userID, basLikOrd, prodID) => {
   const { id, AccArray } = await AccProductGet(userID, basLikOrd)
   const FilterArray = await AccArray.filter((item) => item.id != prodID)
   const body = bodyCheck(basLikOrd, FilterArray)
   const responsePATCH = await PatchAxios(`UserChange/${id}`, body)
   console.log(responsePATCH);
   // СЮДА ПОЛОЖИТЬ ФУНКЦИЯ С ОТОБРАЖЕНИЕМ ТОГО ЧТО PRODUCTS БЫЛ ИЗМЕНЕН
}
export const DeleteProductS = async (id, basLikOrd) => {
   const body = bodyCheck(basLikOrd, [])
   const response = await PatchAxios(`userChange/${id}`, body)
   console.log(response);
}

export const ToOrder = async (userID, changeStart, changeEnd) => {
   const { id, AccArray } = await AccProductGet(userID, changeStart)
   const bodyOrder = await BuildOrder(userID, AccArray)
   if (bodyOrder) {
      const { id, AccArray } = await AccProductGet(userID, changeEnd)
      await AccArray.push(bodyOrder)
      const body = bodyCheck(changeEnd, AccArray)
      console.log("body: ", body)
      const responsePatch = await PatchAxios(`UserChange/${id}`, body)
      console.log(responsePatch)
      DeleteProductS(id, changeStart)
   }
}
export const ToBasket = async (userID, productID) => {
   const { id, AccArray } = await AccProductGet(userID, "likes")
   const filterProducts = await AccArray.filter((item) => item.id != productID)
   const product = await AccArray.find((item) => item.id == productID)
   product.amount = 1 // ДОБАВЛЕНИЕ AMOUNT
   await AddProduct(userID, 'basket', product)
   await DeleteProduct(userID, 'likes', productID)
}
export const BuildOrder = async (userID, arrProduct) => {
   const user = await GetAxios(`userCard/${userID}`)
   const products = await GetAxios('products')
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
      products: arrProduct
   }
   return body
}

export async function AccProductGet(userID, basLikOrd) {
   const response = await GetAxios(`UserChange?user_id=${userID}`) //get
   const respChange = await response[0][`${basLikOrd}`]
   const ID = response[0].id
   return {
      id: ID,
      AccArray: respChange
   }
}





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