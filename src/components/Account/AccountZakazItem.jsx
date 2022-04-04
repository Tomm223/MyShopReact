import React, { useContext, useRef, useEffect, useState } from "react";
import ProductsContext from "../../Context/ProductsContext";
import AccountZakazListImg from "./AccountZakazListImg";
import AccountZakazListProduct from "./AccountZakazListImg";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../Context/AuthProvider";
function AccountZakazItem({ order, productsOrder }) {
   const [delBool, setDelBool] = useState(false)
   function HandleMore() {
      setDelBool(true)
   }
   const classMoreDel = delBool ? "zakaz__item-more-modal active" : "zakaz__item-more-modal"
   const { products } = useContext(ProductsContext)

   return (
      <NavLink to="more" state={{ order }}>
         <div class="zakaz__item green">
            <div class="zakaz__item-title">
               <div class="zakaz__item-status">
                  <div class="zakaz__item-color"></div>
                  {order.send == "true" ? "ОТПРАВЛЕН" : "НЕ ОТПРАВЛЕН"}
               </div>
               <aside>Заказ № <span id="zakaz__num">{order.id}</span></aside>
               <div onClick={HandleMore} class="zakaz__item-more">
                  <img src="/img/page-icon/more.png" alt="more" />
                  <div className={classMoreDel}>
                     <ul className="list-group">
                        <li className="list-group-item">
                           <div className="d-flex p-right-15">
                              <p>удалить</p>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="zakaz__gallery">
               <ul class="zakaz__gallery-list">
                  {productsOrder.map((item) => {
                     const product = products.find((prod) => prod.id == item.product_id)
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