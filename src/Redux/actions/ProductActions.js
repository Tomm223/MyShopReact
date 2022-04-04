import { GetAxios } from "../../Fetch/Fetching";
import { PRODUCT_ALERT_FALSE, PRODUCT_ALERT_TRUE, PRODUCT_IMG_CHANGE } from "../Types";



export function productToAcc(prod, change) {
   return async function (dispatch) {
      const productArr = await GetAxios(`products?id=${prod.product_id}`)
      const product = productArr[0]
      const alertProps = {
         id: Date.now().toString(),
         img: product.img_product,
         name: product.product_name,
         price: product.price,
         branch: change,
         size: prod.size,
         amount: prod.amount
      }
      dispatch(productShowAlert(alertProps))
      setTimeout(() => {
         dispatch(productHideAlert())
      }, 4000)
   }
}


export function productShowAlert(alertProps) {
   return {
      type: PRODUCT_ALERT_TRUE,
      payload: alertProps
   }
}

export function productHideAlert() {
   return {
      type: PRODUCT_ALERT_FALSE
   }
}

export function productImgChange(num) {
   return {
      type: PRODUCT_IMG_CHANGE,
      payload: num
   }

}

