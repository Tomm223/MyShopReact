import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Moda from "../components/Moda";
import ProductSuppImg from "../components/Products/ProductSuppImg";
import { PagesContext } from "../Context/PagesProvider";
import { AddProduct } from "../Fetch/Fetching"
import { useForm, Controller } from 'react-hook-form'
import { SelectReact, BuildOptionsSelect, ParamsForm } from "../components/UI/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { AlertToAccount } from "../components/UI/Product/AlertChange";
import { productImgChange, productToAcc } from "../Redux/actions/ProductActions";
import { AlertDefault } from "../components/UI/Alerts/Alerts";


export default function Product() {
   //const { user } = useContext(AuthContext)
   const user = useSelector(state => state.user.user)
   // redux state 
   const alertBool = useSelector(state => state.product.alert)
   const [alertDef, setAlertDef] = useState(false)
   const watchImg = useSelector(state => state.product.watchImg)
   const dispatch = useDispatch()

   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()

   }, [])

   // Product-DATA      |GET|
   const location = useLocation()
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

   //func form
   const { ProductBuild } = useContext(PagesContext)
   const [change, setChange] = useState()

   async function HandleProduct(data) {
      if (user) {
         try {
            const prod = await ProductBuild(product, data.size)
            const response = await AddProduct(user.id, change, prod)
            reset()
            dispatch(productToAcc(prod, change))
         }
         catch {
            setAlertDef("Что-то пошло не так")
         }
      }
      else {
         setAlertDef("Войдите в Аккаунт чтобы добавить")
      }

   }

   function handleImg(event) {
      const item = event.target
      item.className.includes("right") ? ImgReducer(true) : ImgReducer(false)
   }


   function ImgReducer(side) {
      if (side) {
         watchImg == 3
            ? dispatch(productImgChange(0))
            : dispatch(productImgChange(watchImg + 1))
      }
      else {
         watchImg == 0
            ? dispatch(productImgChange(3))
            : dispatch(productImgChange(watchImg - 1))
      }
   }

   useEffect(() => {
      dispatch(productImgChange(0))
   }, [])

   const SRCimgs = (mass) => imgs.length > 1 ? mass[watchImg] : mass[0]

   return (
      <>
         {alertDef && <AlertDefault state={alertDef} setState={setAlertDef} />}
         <div class="profile">
            {alertBool && <AlertToAccount />}
            <div class="container">
               <div class="profile__block">
                  <div class="profile__fotos">
                     <div class="profile__img">
                        <img className="profile__img-item" src={SRCimgs(imgs)} alt="" />
                        <div onClick={handleImg} class="profile__img-left">
                           <img className="profile__img-left-item" src="/img/page-icon/down-arrow.png" alt="предыдущая фотография" />
                        </div>
                        <div onClick={handleImg} class="profile__img-right">
                           <img className="profile__img-right-item" src="/img/page-icon/down-arrow.png" alt="следующая фотография" />
                        </div>
                     </div>
                     <div class="profile__fotos-supp">
                        {imgs.map((img, index) => {
                           return (<ProductSuppImg key={index} id={index} numImg={imgs.length > 1 ? watchImg : [0]} imgLink={img} />)
                        })}
                        <div onClick={handleImg} class="profile__img-left">
                           <img className="profile__img-left-item" src="/img/page-icon/down-arrow.png" alt="предыдущая фотография" />
                        </div>
                        <div onClick={handleImg} class="profile__img-right">
                           <img className="profile__img-right-item" src="/img/page-icon/down-arrow.png" alt="следующая фотография" />
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
                                 <div className="profile__list-select">Pазмер:
                                    <Controller className="profile__list-select" control={control} name="size" rules={ParamsForm("size")}
                                       render={({ field: { onChange, value }, fieldState: { error } }) =>
                                          <SelectReact onChange={onChange} value={value} error={error} options={options} />
                                       } />
                                 </div>
                                 <div style={{ display: "flex" }}>
                                    <button onClick={() => setChange("basket")} type="submit" class="profile__btn-basket">
                                       <img src="/img/page-icon/basket.png" alt="" />
                                       Добавить в Корзину
                                    </button>
                                    <button onClick={() => setChange("likes")} type="submit" className="profile__btn-like">
                                       <img src="/img/page-icon/circle-love-50.png" alt="" />
                                    </button>
                                 </div>
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
