
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


const inputErr = (str) => <p>Ошибка в поле <span>{str}</span></p>
const inputNull = () => <p>Поле обязательно к заполнению</p>
const EmailError = () => alert('Email-адресс уже зарегестрирован')


const paramsHook = {
   required: "Поле обязательно к заполнению",
   minLength: {
      value: 3,
      message: "Минимум 3 символов"
   }
}
const paramEmal = {
   required: "Поле обязательно к заполнению",
   pattern: {
      value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
      message: "Пожалуйста введите валидный email"
   }
}
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
         const postedUser = await PostAxios('userCard', body)
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




/*//const getValueSelect = (value) => value ? options.find((option) => option.value == value) : ''
               <div className="reg__error"> {errors?.['email'] && <div>{errors?.['email']?.message || inputErr('Email')}</div>} </div>
<div className="reg__error"> {errors?.firstName && <div>{errors?.firstName?.message || inputErr('firstName')}</div>} </div>
<div className="reg__error"> {errors?.lastName && <div>{errors?.lastName?.message || inputErr('lastName')}</div>} </div>
<div className="reg__error"> {errors?.password && <div>{errors?.password?.message || inputErr('password')}</div>} </div>
<div className="reg__error"> {errors?.address?.city && <div>{errors?.address.city?.message || inputErr('password')}</div>} </div>
<div className="reg__error"> {errors?.address?.house && <div>{errors?.address.house?.message || inputErr('password')}</div>} </div>


               <div>
                        <ReactSelect placeholder='' options={options} value={getValueSelect(value)} onChange={newValue => onChange(newValue.value)} />
                        <div className="reg__error"> {error && <div>{error?.message || inputErr('address')}</div>} </div>
                     </div>

const options = [
   {
      value: "russia",
      label: "Россия"
   },
   {
      value: "USA",
      label: "США"
   },
   {
      value: "beloruss",
      label: "Белорусь"
   },
   {
      value: "chehia",
      label: "Чехия"
   }
]

const paramsHook = {
   required: "Поле обязательно к заполнению",
   minLength: {
      value: 3,
      message: "Минимум 3 символов"
   }
}
const paramEmal = {
   required: "Поле обязательно к заполнению",
   pattern: {
      value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
      message: "Пожалуйста введите валидный email"
   }
}

*/

/*

<label class="reg__label" for="email">Адресс Электронной почты:
               <input class="reg__input" id="reg__emal" {...register("email", paramEmal)} type="text" />
               <ErrorsMessage regist="email" errors={errors} checkEmail={chechEmail} />
            </label>
            <label class="reg__label" for="firstName">Имя:
               <input class="reg__input" id="reg__f-name" {...register("firstName", paramsHook)} type="text" />
               <ErrorsMessage regist="firstName" errors={errors} />
            </label>
            <label class="reg__label" for="lastName">Фамилия:
               <input class="reg__input" id="reg__l-name" {...register("lastName", paramsHook)} type="text" />
               <ErrorsMessage regist="lastName" errors={errors} />
            </label>
            <label class="reg__label" for="pass">Пароль:
               <input class="reg__input" id="reg__pass"  {...register("password", paramsHook)} type="text" />
               <ErrorsMessage regist="password" errors={errors} />
            </label>
            <label className="reg__label"> Страна:
               <Controller control={control} name="address.country" rules={{ required: 'Поле обязательно для заполнения' }}
                  render={({ field: { onChange, value }, fieldState: { error } }) =>
                     <SelectReact onChange={onChange} value={value} error={error} />
                  } />
            </label>
            <label class="reg__label" for="address.city">Город:
               <input class="reg__input"  {...register("address.city", paramsHook)} type="text" />
               <ErrorsMessage regist="address.city" errors={errors} />
            </label>
            <label class="reg__label" for="address.street">Улица:
               <input class="reg__input"   {...register("address.street", paramsHook)} type="text" />
               <ErrorsMessage regist="address.street" errors={errors} />
               <div className="reg__error"> {errors?.address?.street && <div>{errors?.address.street?.message || inputErr('password')}</div>} </div>
            </label>
            <label class="reg__label" for="address.house">Дом:
               <input class="reg__input"   {...register("address.house", {
                  required: "Поле обязательно к заполнению"
               })} type="text" />
               <ErrorsMessage regist="address.house" errors={errors} />
            </label>
            <button class="reg__btn" type="submit" disabled={!isValid} >зарегестрироваться </button>


*/