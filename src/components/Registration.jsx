import React, { useContext, useEffect, useRef } from "react";
import PagesContext from "./Context/PagesContext";
import { useLocation, useNavigate } from 'react-router-dom'
import useAuth from "../hook/useAuth"
function Registration() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [pageY0])


   //navigate
   const location = useLocation()
   const navigate = useNavigate()
   const FromPage = location.state?.from?.pathname || "/"
   console.log("frompage: ", FromPage);
   //auth sing in
   const { value } = useAuth()
   const singin = value.singin
   //e.preventDefault + form
   const btn = useRef()
   const emailRef = useRef()
   const HandlerButton = (event) => {
      singin(emailRef.current.value, () => navigate(FromPage, { replace: true }))
   }





   return (

      <div class="registration-body">
         <div class="reg">
            <div class="reg__title">
               <img src="/img/page-icon/vesh-logo.png" alt="" />
            </div>
            <div class="reg__block">
               <div class="reg__checkout">
                  <div class="reg__checkout-item active">
                     <p class="reg__checkout-link">Регестрация</p>
                  </div>
                  <div class="reg__checkout-item">
                     <p class="reg__checkout-link">Вход</p>
                  </div>
               </div>
               <form class="reg__form">
                  <label class="reg__label" for="email">Адресс Электронной почты:</label>
                  <input ref={emailRef} class="reg__input" id="reg__emal" name="email" type="text" />
                  <label class="reg__label" for="first-name">Имя:</label>
                  <input class="reg__input" id="reg__f-name" name="first-name" type="text" />
                  <label class="reg__label" for="last-name">Фамилия:</label>
                  <input class="reg__input" id="reg__l-name" name="last-name" type="text" />
                  <label class="reg__label" for="pass">Пароль:</label>
                  <input class="reg__input" id="reg__pass" name="pass" type="text" />
                  <button onClick={HandlerButton} ref={btn} class="reg__btn" type="submit" >зарегестрироваться </button>
               </form>
            </div>
         </div>

      </div>

   )
}
export default Registration

/*  */