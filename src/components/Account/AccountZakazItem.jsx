import React, { useContext, useRef } from "react";
import ProductsContext from "../Context/ProductsContext";
import AccountZakazListImg from "./AccountZakazListImg";
import AccountZakazListProduct from "./AccountZakazListImg";
import { NavLink } from "react-router-dom"
function AccountZakazItem({ order, productsOrder }) {
   /*function styleBlock() {
      if (order.send == true) {
         return "zakaz__item green"
      }
      else if (order.send == false) {
         return "zakaz__item red"
      }
   }*/
   const { products } = useContext(ProductsContext)
   console.log(order.send);
   return (
      <NavLink to="more" state={order}>
         <div class="zakaz__item green">
            <div class="zakaz__item-title">
               <div class="zakaz__item-status">
                  <div class="zakaz__item-color"></div>
                  {order.send == "true" ? "ОТПРАВЛЕН" : "НЕ ОТПРАВЛЕН"}
               </div>
               <aside>Заказ № <span id="zakaz__num">{order.num}</span></aside>
               <div class="zakaz__item-more">
                  <img src="/img/page-icon/more.png" alt="more" />
               </div>
            </div>
            <div class="zakaz__gallery">
               <ul class="zakaz__gallery-list">
                  {productsOrder.map((item) => {
                     const product = products.filter((prod) => prod.id == item.product_id)[0]
                     return <AccountZakazListImg img={product.img_product} />
                  })}
                  <li class="zakaz__gallery-item">
                     <div class="zakaz__gallery-more">
                        <img class="zakaz__gallery-opacity" src="/img/t-shirt/t-shirt1-1.jpg"
                           alt="img" />
                        <div class="zakaz__gallery-after"><img src="/img/page-icon/more-img.png"
                           alt="" /></div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </NavLink>

   )
}
export default AccountZakazItem