import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AccountContext } from "../../Context/AccountProvider";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from 'react-hook-form'
import { GetAxios, PostAxios } from "../../Fetch/Fetching"
import { ErrorsMessage } from '../UI/Form/ErrorsMessage'
import { ParamsForm } from '../UI/Form/Form'
function FormGet() {
   const { singIn, fromPage } = useContext(AuthContext)
   const { usSetCheckId } = useContext(AccountContext)
   //navigate
   const navigate = useNavigate()
   //form func
   const NavigateTo = () => navigate(fromPage, { replace: true })

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
      setError,
      setFocus
   } = useForm({
      mode: "onChange",
   })


   async function getUser(data) {
      const users = await GetAxios("userCard")
      console.log(users);
      const userMatch = await users.filter((item) => item.email == data.email)
      console.log(users);
      if (userMatch.length) {
         const user = userMatch[0]
         if (user.password == data.password) {
            usSetCheckId(true)
            singIn(user, NavigateTo)
         } else {
            setError("password", { message: "пароль неверный" })
            setFocus("password")
         }
      }
      else {
         setError("email", { message: "email-адресс не существует" })
         setFocus("email")
      }
   }

   const FormInputs = [
      {
         title: "Адресс Электронной почты",
         regist: "email"
      },
      {
         title: "Пароль",
         regist: "password",
      }
   ]

   return (
      <>
         <form onSubmit={handleSubmit(getUser)} class="vhod__form" action="">
            {FormInputs.map((item) => {
               return (
                  <label className="reg__label">{item.title}:
                     <input type="text" className="reg__input" {...register(item.regist, ParamsForm(item.regist))} />
                     <ErrorsMessage errors={errors} regist={item.regist} />
                  </label>
               )
            })}
            <input class="reg__btn" type="submit" value="войти" />
         </form>
      </>
   )
}
export default FormGet


