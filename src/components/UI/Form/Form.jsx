import React from "react";
import { Controller, useForm } from 'react-hook-form'
import Select from "react-select";
import { ErrorSelect } from "./ErrorsMessage";


export function SelectReact({ onChange, value, error, options }) {
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
   else if (regist != "address.house" && regist != "address.country"
      && regist != "email" && regist != 'size' && regist != "amount") {
      param.minLength = {
         value: 3,
         message: "Минимум 3 символов"
      }
   }
   return param

}

export function getUseForm({ mode, children, func }) {

}

export async function BuildOptionsSelect(filter) {
   if (filter.toLowerCase().includes("обувь")) {
      //console.log(snikerOption)
      return snikerOption
   }
   else if (filter.toLowerCase().includes("штаны")) {
      //console.log(BottomOption)
      return BottomOption
   }
   else if (filter.toLowerCase() == 'amount') {
      return AmountOption
   }
   else {
      //   console.log(SMLOption)
      return SMLOption
   }
}


const SMLOption = [
   {
      value: "xs",
      label: "XS"
   },
   {
      value: "s",
      label: "S"
   },
   {
      value: "m",
      label: "M"
   },
   {
      value: "l",
      label: "L"
   },
   {
      value: "xl",
      label: "XL"
   }
]
const snikerOption = [
   {
      value: "38",
      label: "38 eur"
   },
   {
      value: "40",
      label: "40 eur"
   },
   {
      value: "41",
      label: "41 eur"
   },
   {
      value: "42",
      label: "42 eur"
   },
   {
      value: "43",
      label: "41 eur"
   },
   {
      value: "44",
      label: "44 eur"
   }
]

const BottomOption = [
   {
      value: "29x30",
      label: "29x30"
   },
   {
      value: "30x32",
      label: "30x32"
   },
   {
      value: "32x32",
      label: "32x32"
   },
   {
      value: "32x34",
      label: "32x34"
   },
   {
      value: "33x34",
      label: "33x34"
   },
   {
      value: ["34", "36"],
      label: "34x36"
   }
]
const AmountOption = [
   {
      value: 1,
      label: 1
   },
   {
      value: 2,
      label: 2
   },
   {
      value: 3,
      label: 3
   },
   {
      value: 4,
      label: 4
   }, {
      value: 5,
      label: 5
   }
   , {
      value: 6,
      label: 6
   },
   {
      value: 7,
      label: 7
   },
   {
      value: 8,
      label: 8
   }, {
      value: 9,
      label: 9
   }
]