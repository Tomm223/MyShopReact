
import React, { useState, useEffect, useContext } from "react";
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../../Context/AccountProvider";
import { AuthContext } from "../../Context/AuthProvider";

import { GetAxios, PostAxios } from "../../Fetch/Fetching"
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import FormInput from '../UI/Form/Form'
import { SelectReact, ParamsForm } from '../UI/Form/Form'
import { ErrorsMessage } from "../UI/Form/ErrorsMessage";




function FormPost() {
   const { usSetCheckId } = useContext(AccountContext)
   const { singIn, fromPage } = useContext(AuthContext)
   const navigate = useNavigate()
   const NavigateTo = () => navigate(fromPage, { replace: true })
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
      control,
      setFocus,
      setError
   } = useForm({
      mode: "onChange"
   })


   const useSubmitData = async (data) => {
      const MassUsers = await GetAxios('userCard')
      const massEmailMatch = await MassUsers.filter((item) => item.email == data.email)
      if (massEmailMatch.length) {
         setFocus("email")
         setError('email', { message: "Email-адресс уже зарегестрирован" })
      }
      else {
         const body = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            address: data.address
         }
         const bodyChange = {
            user_id: "",
            basket: [

            ],
            likes: [
            ],
            order: [
            ]
         }
         const postedUser = await PostAxios('userCard', body)
         const postID = postedUser.id
         bodyChange.user_id = postID
         const postUserChange = await PostAxios('UserChange', bodyChange)
         singIn(postedUser, NavigateTo)
         usSetCheckId(false)
         reset()
      }
   }

   const formReg = [
      {
         title: "Адресс Электронной почты",
         regist: "email"
      },
      {
         title: "Имя",
         regist: "firstName",
      },
      {
         title: "Фамилия",
         regist: "lastName",
      },
      {
         title: "Пароль",
         regist: "password",
      },
      {
         title: "Страна",
         regist: "address.country",
         registArray: ['address', 'country']
      },
      {
         title: "Город",
         regist: "address.city",
         registArray: ['address', 'city']
      },
      {
         title: "Улица",
         regist: "address.street",
         registArray: ['address', 'street']
      },
      {
         title: "Дом",
         regist: "address.house",
         registArray: ["address", "house"]
      }
   ]


   return (
      <>
         <form onSubmit={handleSubmit(useSubmitData)} class="reg__form">
            {formReg.map((item) => {
               let registQuery = ''
               let checkInput = true
               if (item.registArray) {
                  registQuery = item.registArray
                  if (item.registArray[1] == "country") checkInput = false
               }
               else if (!item.registArray) {
                  registQuery = item.regist
               }
               return (
                  <> {checkInput ?
                     <label className="reg__label">{item.title}:
                        <input type="text" className="reg__input" {...register(item.regist, ParamsForm(item.regist))} />
                        <ErrorsMessage errors={errors} regist={registQuery} />
                     </label>
                     :
                     <label className="reg__label"> {item.title}:
                        <Controller control={control} name={item.regist} rules={ParamsForm(item.regist)}
                           render={({ field: { onChange, value }, fieldState: { error } }) =>
                              <SelectReact onChange={onChange} value={value} error={error} />
                           } />
                     </label>
                  }
                  </>
               )
            })}
            <button class="reg__btn" type="submit" >зарегестрироваться </button>
         </form>
      </>
   )
}
export default FormPost



