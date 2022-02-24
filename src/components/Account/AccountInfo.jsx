import React from "react";
import { useContext, useRef } from 'react'
import { AuthContext } from "../Context/AuthProvider";
function AccountInfo() {
   const { user } = useContext(AuthContext)
   const FName = useRef()
   const LName = useRef()
   const password = useRef()
   const email = useRef()


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
               <label class="reg__label" for="email">Адресс Электронной почты:</label>
               <input ref={email} class="reg__input" id="reg__emal" name="email" type="text" value={user.email} />
               <label class="reg__label" for="email">Имя:</label>
               <input ref={FName} class="reg__input" id="reg__f-name" name="first-name" type="text" value={user.firstName} />
               <label class="reg__label" for="email">Фамилия:</label>
               <input ref={LName} class="reg__input" id="reg__l-name" name="last-name" type="text" value={user.lastName} />
               <label class="reg__label" for="email">Пароль:</label>
               <input ref={password} class="reg__input" id="reg__pass" name="pass" type="text" value={user.password} />
               <input class="reg__btn" id="cab__btn" type="submit" value="Сохранить Изменения" />
            </form>
         </div>
      </div>
   )
}
export default AccountInfo