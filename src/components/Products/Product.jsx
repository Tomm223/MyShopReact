import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Moda from "../Moda";
import ProductSuppImg from "./ProductSuppImg";
import { AuthContext } from "../../Context/AuthProvider"
import { PagesContext } from "../../Context/PagesProvider";
import { AddProduct, PatchAxios } from "../../Fetch/Fetching"
import { useForm, Controller } from 'react-hook-form'
import { SelectReact, BuildOptionsSelect, ParamsForm } from "../UI/Form/Form";
export default function Product() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()

   }, [])

   // Product-DATA      |GET|
   const location = useLocation()
   const [numImg, setnumImg] = useState(0)
   const product = location.state.product
   const imgs = product.imgs
   // form product
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
      control,
      setFocus,
      setError
   } = useForm({
      mode: "onSubmit"
   })
   // BuildOptions for Select
   const [options, setOptions] = useState([])
   useEffect(async () => {
      const option = await BuildOptionsSelect(product.filter_name)
      setOptions(option)
   }, [])
   console.log(options);
   //func form
   const { ProductBuild } = useContext(PagesContext)
   const [change, setChange] = useState()
   async function HandleProduct(data) {
      if (user) {
         const prod = await ProductBuild(product, data.size)
         const response = await AddProduct(user.id, change, prod)
         console.log(response);
         reset()
      }
      else {
         alert("Войдите в Аккаунт чтобы добавить ")
      }

   }
   // 
   const { user } = useContext(AuthContext)

   //onClick={() => user.id ? AddProduct(user.id, "basket", ProductBuild()) : alert("Войдите в Аккаунт чтобы добавть продукт в Корзину ")}
   return (
      <>
         <div class="profile">
            <div class="container">
               <div class="profile__block">
                  <div class="profile__fotos">
                     <div class="profile__img">
                        <img className="profile__img-item" src={imgs[numImg]} alt="" />
                        <div class="profile__img-left">
                           <img src="/img/page-icon/down-arrow.png" alt="предыдущая фотография" />
                        </div>
                        <div class="profile__img-right">
                           <img src="/img/page-icon/down-arrow.png" alt="следующая фотография" />
                        </div>
                     </div>
                     <div class="profile__fotos-supp">
                        {imgs.map((img, index) => {
                           return (<ProductSuppImg key={index} id={index} numImg={numImg} imgLink={img} />)
                        })}
                        <div class="profile__img-left">
                           <img src="/img/page-icon/down-arrow.png" alt="предыдущая фотография" />
                        </div>
                        <div class="profile__img-right">
                           <img src="/img/page-icon/down-arrow.png" alt="следующая фотография" />
                        </div>
                     </div>
                  </div>
                  <div class="profile__buy">
                     <ul class="profile__list">
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <h3 class="profile__name" id="product__name">
                                 {product.product_name} <span id="product__brand">{product.brand}</span>
                              </h3>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <h4>
                                 Цена: <span id="product__price">{product.price}</span>$
                              </h4>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <h4>Цвет: <span id="product__cvet">{product.color}</span></h4>
                           </div>
                        </li>
                        <li class="profile__list-item">
                           <div class="profile__list-block">
                              <form className="profile__list-form" onSubmit={handleSubmit(HandleProduct)}>
                                 <label className="profile__list-sizeP">Pазмер:
                                    <Controller className="profile__list-select" control={control} name="size" rules={ParamsForm("size")}
                                       render={({ field: { onChange, value }, fieldState: { error } }) =>
                                          <SelectReact onChange={onChange} value={value} error={error} options={options} />
                                       } />
                                 </label>
                                 <button onClick={() => setChange("basket")} type="submit" class="profile__btn-basket">
                                    <img src="/img/page-icon/basket.png" alt="" />
                                    Добавить в Корзину
                                 </button>
                                 <button onClick={() => setChange("likes")} type="submit" className="profile__btn-like">
                                    <img src="/img/page-icon/circle-love-50.png" alt="" />
                                 </button>
                              </form>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="profile__info">
                  <div class="profile__info-title">
                     <h2>Информация о Товаре:</h2>
                  </div>
                  <div class="profile__info-block">
                     <ul class="profile__info-list">
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">{product.material}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">{product.brand}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">{product.color}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">{product.material}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">{product.brand}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">{product.color}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">{product.material}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">{product.brand}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">{product.color}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Материал: <span id="product__material">{product.material}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Бренд: <span id="product__brand">{product.brand}</span>
                           </p>
                        </li>
                        <li class="profile__info-item">
                           <p class="profile__info-text">
                              Цвет: <span id="product__cvet">{product.color}</span>
                           </p>
                        </li>

                     </ul>
                  </div>
               </div>
            </div>
            <Moda />
         </div>
      </>
   )
}


/*
///// КНОПКА ДЛЯ ДОБАВЛЕНИЯ В BASKETCHANGE

onClick={() => HandlerButton("basket")}

///// КНОПКА ДЛЯ ДОБАВЛЕНИЯ В LIKESCHANGE

onClick={() => HandlerButton("likes")}




//////////// ОТПРАВКА ПРОДУКТА НА ДОБАВЛЕНИЕ В Account

async function HandlerButton(category) {
      const addObj = await category == "basket" ? {
         //id: Math.random() * 11111, сервер делает лучше id
         product_id: product.id,
         size: 44,
         amount: 1

      } : {
         //id: Math.random() * 11111, сервер делает лучше id
         product_id: product.id,
         amount: 1

      }
      fetch(`http://localhost:3000/${category}Change`, {
         method: 'POST',
         body: JSON.stringify(addObj),
         headers: {
            "Content-type": "application/json"
         }
      })
         .then(data => data.json())
         .then(data => {
            if (category == "basket") {
               ADDrenderProducts('basketChange', usSetChangeBasket)
            }
            else {
               ADDrenderProducts('likesChange', usSetChangeLikes)
            }
         })
         .then()



   }
    
        
*/
