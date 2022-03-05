import React, { useEffect, useState } from "react";
import { useContext, useRef } from 'react'
import { AuthContext } from "../../Context/AuthProvider";
import { useForm, Controller } from 'react-hook-form'
import { SelectReact, ParamsForm } from '../UI/Form/Form'
import { ErrorsMessage } from "../UI/Form/ErrorsMessage";
import { GetAxios } from "../../Fetch/Fetching"



function AccountInfo() {
   const { user } = useContext(AuthContext)
   const [FName, setFName] = useState()
   const [LName, setLName] = useState()
   const [password, setPassword] = useState()
   const [email, setEmail] = useState(user.email)
   const [country, setCountry] = useState()
   const [city, setCity] = useState()
   const [street, setStreet] = useState()
   const [house, setHouse] = useState()
   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
      control,
      defaultValues,
      setValue
   } = useForm({
      mode: "onChange"
   })

   function handlerSubmit(data) {
      alert("ДОДЕЛАТЬ ИЗМЕНЕНИЯ USER_SERVER + ПОЧИСТИТЬ КОД")
   }
   function valueDefault(regist) {
      if (regist[0] == "address") {
         return user[`${regist[0]}`][`${regist[1]}`]
      }

      return user[`${regist}`]
   }

   const formInputs = [
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
      <div class="cab__info">
         <div class="cab__info-icon">
            <img src="/img/page-icon/resume.png" alt="info" />
         </div>
         <div class="cab__info-title">
            <h1>МОЯ ИНФОРМАЦИЯ</h1>
            <aside>Вы в любой момент можете обновить вашу учетную запись и внести любые изменения в
               приведенные ниже данные.</aside>
         </div>
         <div class="cab__info-form">
            <form onSubmit={handleSubmit(handlerSubmit)} class="reg__form" id="cab__info-form" action="">
               {formInputs.map((item) => {
                  let registQuery = ''
                  let checkInput = true
                  let defValue = ''
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
                           <input defaultValue={valueDefault(registQuery)} type="text" className="reg__input"
                              {...register(item.regist, ParamsForm(item.regist))} />
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
               <input class="reg__btn" id="cab__btn" type="submit" value="Сохранить Изменения" />
            </form>
         </div>
      </div >
   )
}
export default AccountInfo