import React from "react";


const inputErr = (str) => <p>Ошибка в поле <span>{str}</span></p>
const EmailError = () => alert('Email-адресс уже зарегестрирован')


export function ErrorSelect({ error }) {

   return (
      <div className="reg__error"> {error && <div>{error?.message || inputErr('address')}</div>} </div>
   )
}

export function ErrorsMessage({ errors, regist }) {
   if (regist[0] == "address") {
      return (
         <div className="reg__error"> {errors?.[`${regist[0]}`]?.[`${regist[1]}`] && <div>{errors?.[`${regist[0]}`]?.[`${regist[1]}`]?.message || inputErr(regist[1])}</div>} </div>
      )
   }
   return (
      <div className="reg__error"> {errors?.[`${regist}`] && <div>{errors?.[`${regist}`]?.message || inputErr(regist)}</div>} </div>

   )
}