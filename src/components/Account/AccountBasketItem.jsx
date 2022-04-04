import React, { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../Context/AccountProvider";
import { DeleteProduct } from "../../Fetch/Fetching"
import { SelectReact, ParamsForm, BuildOptionsSelect } from '../UI/Form/Form'
import { useForm, Controller } from "react-hook-form"
import { PagesContext } from "../../Context/PagesProvider";
function AccountBasketItem({ userID, item, product, amount, size, itemId }) {
   const {
      register,
      formState: { },
      handleSubmit,
      reset,
      control,
      setFocus,
      setError,
      getValues,
      defaultValue,
      watch
   } = useForm({
      mode: "onChange",
      defaultValues: {
         size: size,
         amount: amount
      }
   })
   // BuildOptions for Select
   const [optSize, setOptSize] = useState([])
   const [optAmount, setOptAmount] = useState([])
   useEffect(async () => {
      const option = await BuildOptionsSelect(product.filter_name)
      setOptSize(option)
   }, [])

   useEffect(async () => {
      const option = await BuildOptionsSelect("amount")
      setOptAmount(option)
   }, [])
   // ВОТ ТА ШТУКА КОТОРАЯ ОТЛАВЛИВАЕТ ONCHANGE SELECTS
   const { handleSelect } = useContext(AccountContext)
   useEffect(() => {
      const subscription = watch((value) => handleSelect(userID, value, item, 'basket'));
      return () => subscription.unsubscribe();
   }, [watch]);


   const { UseSetChages } = useContext(AccountContext)
   async function HandleDelete() {
      const response = await DeleteProduct(userID, "basket", itemId)
      UseSetChages(response)
   }

   return (
      <li class="basket__item">
         <div class="basket__product">
            <div class="basket__product-img">
               <img src={product.img_product} alt="" />
            </div>
            <div class="basket__product-supp">
               <div class="basket__product-title">
                  <p id="product__name">{product.product_name}</p>
               </div>
               <ul class="basket__product-list">

                  <div class="basket__product-item">
                     <h4>Цвет: <span id="product__cvet">{product.color}</span></h4>
                  </div>
                  <div class="basket__product-item">
                     <p>
                        Цена: <span id="product__price">{product.price}</span>$
                     </p>
                  </div>
                  <div class="basket__product-item basket__product-form">
                     <div class="basket__product-form">
                        <form className="basket__form" >
                           <label class="basket__form-label">
                              <h4 class="">Pазмер:</h4>
                              <Controller control={control} name="size" rules={ParamsForm("size")}
                                 render={({ field: { onChange, value }, fieldState: { error } }) =>
                                    <SelectReact onChange={onChange} value={value}
                                       error={error} options={optSize} />
                                 } />
                           </label>
                           <label class="basket__form-label">
                              <h4 class="">Колличество:</h4>
                              <Controller control={control} name="amount" rules={ParamsForm("amount")}
                                 render={({ field: { onChange, value }, fieldState: { error } }) =>
                                    <SelectReact onChange={onChange} value={value}
                                       error={error} options={optAmount} />
                                 } />
                           </label>
                        </form>
                     </div>
                  </div>
               </ul>
               <div class="basket__product-delete">
                  <img onClick={HandleDelete} src="/img/page-icon/icons8-close-24.png" alt="" />
               </div>
            </div>
         </div>
      </li>
   )
}

export default AccountBasketItem


/* КНОПКА КОТОРАЯ УДАЛЯЛА САМ ITEM
onClick={() => PostDeleteItemChange("DeleteBasket", usSetDeleteBasket, deleteProd)}


PROPS:
const deleteProd = {
      basket_id: itemId,
   }

*/