
import React, { useState, useEffect, useContext } from "react";
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../Context/AccountProvider";
import { AuthContext } from "../../Context/AuthProvider";

import { GetAxios, PostAxios } from "../../Fetch/Fetching"
import { useForm } from 'react-hook-form'
function FormPost() {
   const { usSetCheckId } = useContext(AccountContext)
   const { singIn, fromPage } = useContext(AuthContext)
   const navigate = useNavigate()
   const NavigateTo = () => navigate(fromPage, { replace: true })
   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset
   } = useForm({
      mode: "onBlur"
   })

   const [errorReg, setErrorReg] = useState('')

   const inputErr = (str) => <p>Ошибка в поле <span>{str}</span></p>
   const inputNull = () => <p>Поле обязательно к заполнению</p>
   const EmailError = () => alert('Email-адресс уже зарегестрирован')

   const useSubmitData = async (data) => {
      const MassUsers = await GetAxios('userCard')
      const massEmailMatch = await MassUsers.filter((item) => item.email == data.email)
      if (massEmailMatch.length) {
         EmailError()
      }
      else {
         const body = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password
         }
         const postedUser = await PostAxios('userCard', body)
         singIn(postedUser, NavigateTo)
         usSetCheckId(false)
         reset()
      }
   }



   const paramsHook = {
      required: "Поле обязательно к заполнению",
      minLength: {
         value: 5,
         message: "Минимум 5 символов"
      }
   }

   return (
      <>
         <form onSubmit={handleSubmit(useSubmitData)} class="reg__form">
            <label class="reg__label" for="email">Адресс Электронной почты:
               <input class="reg__input" id="reg__emal" {...register("email", paramsHook)} type="text" />
               <div className="reg__error"> {errors?.email && <div>{errors?.email?.message || inputErr('Email')}</div>} </div>
            </label>
            <label class="reg__label" for="firstName">Имя:
               <input class="reg__input" id="reg__f-name" {...register("firstName", paramsHook)} type="text" />
               <div className="reg__error"> {errors?.firstName && <div>{errors?.firstName?.message || inputErr('firstName')}</div>} </div>
            </label>
            <label class="reg__label" for="lastName">Фамилия:
               <input class="reg__input" id="reg__l-name" {...register("lastName", paramsHook)} type="text" />
               <div className="reg__error"> {errors?.lastName && <div>{errors?.lastName?.message || inputErr('lastName')}</div>} </div>
            </label>
            <label class="reg__label" for="pass">Пароль:
               <input class="reg__input" id="reg__pass"  {...register("password", paramsHook)} type="text" />
               <div className="reg__error"> {errors?.password && <div>{errors?.password?.message || inputErr('password')}</div>} </div>
            </label>
            <button class="reg__btn" type="submit" disabled={!isValid} >зарегестрироваться </button>
         </form>
      </>
   )
}
export default FormPost





