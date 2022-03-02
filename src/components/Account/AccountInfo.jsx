import React, { useState } from "react";
import { useContext, useRef } from 'react'
import { AuthContext } from "../../Context/AuthProvider";
function AccountInfo() {
   const { user } = useContext(AuthContext)
   const [FName, setFName] = useState(user.firstName)
   const [LName, setLName] = useState(user.lastName)
   const [password, setPassword] = useState(user.password)
   const [email, setEmail] = useState(user.email)


   function handlerSubmit(event) {
      alert("невозможно изменить данные из-за сервера")
   }


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
            <form onSubmit={handlerSubmit} class="reg__form" id="cab__info-form" action="">
               <label class="reg__label" for="email">Адресс Электронной почты:
                  <input class="reg__input" id="reg__emal" name="email" type="text" onChange={event => setEmail(event.target.value)} value={email} />
               </label>
               <label class="reg__label" for="email">Имя:
                  <input class="reg__input" id="reg__f-name" name="first-name" type="text" onChange={event => setFName(event.target.value)} value={FName} />
               </label>
               <label class="reg__label" for="email">Фамилия:
                  <input class="reg__input" id="reg__l-name" name="last-name" type="text" onChange={event => setLName(event.target.value)} value={LName} />
               </label>
               <label class="reg__label" for="email">Пароль:
                  <input class="reg__input" id="reg__pass" name="pass" type="text" onChange={event => setPassword(event.target.value)} value={password} />
               </label>
               <input class="reg__btn" id="cab__btn" type="submit" value="Сохранить Изменения" />
            </form>
         </div>
      </div>
   )
}
export default AccountInfo