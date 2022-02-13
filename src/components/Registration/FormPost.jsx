import React, { useState, useEffect, useContext } from "react";
import { useRef } from 'react'
import { AuthContext } from "../Context/AuthProvider";
function FormPost() {
   const { user, setUser } = useContext(AuthContext)

   const form = useRef()
   const [users, setUsers] = useState('')
   const [inputData, setInputData] = useState('')
   function HandlerButton() {
      const formElem = form.current
      const email = formElem.email.value
      const password = formElem.password.value
      const firstName = formElem.firstName.value
      const lastName = formElem.lastName.value
      setInputData({
         email,
         password,
         firstName,
         lastName,
         id: Math.random() * 11111111
      })
      formElem.email.value = ''
      formElem.password.value = ''
      formElem.firstName.value = ''
      formElem.lastName.value = ''
   }

   useEffect(() => {
      fetch("http://localhost:3000/userCard", {
         method: "POST",
         body: JSON.stringify(inputData),
         headers: {
            "Content-type": "application/json"
         }

      })
         .then(data => data.json())
         .then(data => setUsers(data))
         .then(setUser(inputData.id))
   }, [inputData])



   return (
      <>
         <form ref={form} class="reg__form">
            <label class="reg__label" for="email">Адресс Электронной почты:</label>
            <input class="reg__input" id="reg__emal" name="email" type="text" />
            <label class="reg__label" for="firstName">Имя:</label>
            <input class="reg__input" id="reg__f-name" name="firstName" type="text" />
            <label class="reg__label" for="lastName">Фамилия:</label>
            <input class="reg__input" id="reg__l-name" name="lastName" type="text" />
            <label class="reg__label" for="pass">Пароль:</label>
            <input class="reg__input" id="reg__pass" name="password" type="text" />
            <button onClick={HandlerButton} class="reg__btn" type="button" >зарегестрироваться </button>
         </form>
      </>
   )
}
export default FormPost