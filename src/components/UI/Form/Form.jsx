import React from "react";
import { Controller, useForm } from 'react-hook-form'
import Select from "react-select";
import { ErrorSelect } from "./ErrorsMessage";
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

export function SelectReact({ onChange, value, error }) {
   const getValue = (value) => value ? options.find((item) => item.value == value) : ""
   const { control } = useForm({ mode: "onChange" })

   return (
      <>
         <Select placeholder="" options={options} onChange={newValue => onChange(newValue.value)} value={getValue(value)} />
         <ErrorSelect error={error} />
      </>
   )
}

export function ParamsForm(regist) {
   const param = {
      required: "поле обязательно для заполнения"
   }
   if (regist == "email") {
      param.pattern = {
         value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
         message: "Пожалуйста введите валидный email"
      }
   }
   else if (regist != "address.house" && regist != "address.country" && regist != "email") {
      param.minLength = {
         value: 3,
         message: "Минимум 3 символов"
      }
   }
   return param

}