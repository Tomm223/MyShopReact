import React, { useContext, useState, useEffect } from "react";
import { LoadingDefault } from "../UI/Loading/Loadings";
import ProductsItem from "./ProductsItem";

const flexCenter = {
   display: "flex",
   justifyContent: "center"
}

function ProductsList({ products }) {
   const [productTimeOut, setProductTimeOut] = useState(true)
   var i = 0
   useEffect(() => {
      setProductTimeOut(true)
      MadeLoad()

   }, [products])
   useEffect(() => {
      MadeLoad()
   }, [])
   function MadeLoad() {
      return setTimeout(() => {
         setProductTimeOut(false)
      }, 1000)
   }
   /* */
   return (
      <div>
         <div class="product">
            <div class="container">
               <div className="product__block">
                  {!productTimeOut
                     ?
                     products.map((item) => {
                        return (<ProductsItem product={item} id={item.id} key={item.id} imgLink={item.img_product} name={item.product_name} price={item.price} color={item.color} />)

                     })
                     :
                     <div className="flexCenter" style={flexCenter}>
                        <LoadingDefault />
                     </div>

                  }
               </div>
            </div>
            <div class="product-btn">
               <input class="product-btn__item" type="button" value="Загрузить ещё" />
            </div>
         </div>
      </div >
   )
}
export default ProductsList