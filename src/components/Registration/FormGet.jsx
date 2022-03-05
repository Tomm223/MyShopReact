import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AccountContext } from "../../Context/AccountProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from 'react-hook-form'
import { GetAxios, PostAxios } from "../../Fetch/Fetching"

function FormGet() {
   const { singIn, fromPage } = useContext(AuthContext)
   const { usSetCheckId } = useContext(AccountContext)
   //navigate
   const navigate = useNavigate()
   //form func

   const NavigateTo = () => navigate(fromPage, { replace: true })
   const inputErr = (str) => <p>Ошибка в поле <span>{str}</span></p>
   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset
   } = useForm({
      mode: "onChange",
   })


   const paramsHook = {
      required: "Поле обязательно к заполнению",
      minLength: {
         value: 5,
         message: "Минимум 5 символов"
      }
   }
   const paramEmal = {
      required: "Поле обязательно к заполнению",
      pattern: {
         value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
         message: "Пожалуйста введите валидный email"
      }
   }

   async function getUser(data) {
      const users = await GetAxios("userCard")
      const userMatch = await users.filter((item) => item.email == data.email)
      if (userMatch.length) {
         const user = userMatch[0]
         if (user.password == data.password) {
            usSetCheckId(true)
            singIn(user, NavigateTo)
         } else {
            alert("пароль неверный")
         }
      }
      else {
         alert("email-адресс не существует")
      }
   }

   return (
      <>
         <form onSubmit={handleSubmit(getUser)} class="vhod__form" action="">
            <label class="reg__label" for="email">Адресс Электронной почты:
               <input class="reg__input" id="reg__emal" {...register("email", paramEmal)} type="text" />
               <div className="reg__error">{errors?.email && <div>{errors?.email?.message || inputErr("Email-адресс")}</div>}</div>
            </label>
            <label class="reg__label" for="password">Пароль:
               <input class="reg__input" id="reg__pass" {...register("password", paramsHook)} type="text" />
               <div className="reg__error">{errors?.password && <div>{errors?.password?.message || inputErr("Пароль")}</div>}</div>
            </label>
            <input disabled={!isValid} class="reg__btn" type="submit" value="войти" />
         </form>
      </>
   )
}
export default FormGet


