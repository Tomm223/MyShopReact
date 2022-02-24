
import React, { useState, useEffect, useContext } from "react";
import { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import { AccountContext } from "../Context/AccountProvider";
import { AuthContext } from "../Context/AuthProvider";
function FormPost() {
   const { singIn, fromPage } = useContext(AuthContext)
   const navigate = useNavigate()
   const form = useRef()
   const formElem = form.current
   const [users, setUsers] = useState('')
   const [inputData, setInputData] = useState(null)
   const { usSetCheckId } = useContext(AccountContext)

   function HandlerButton() {
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

   }

   console.log("fromPage: ", fromPage);

   useEffect(() => {
      let alike = false
      fetch("http://localhost:3000/userCard")
         .then(data => data.json())
         .then(data => setUsers(data))
         .then(data => {
            const arrL = users.filter((item) => item.email == inputData.email)
            console.log(arrL);
            if (arrL.length > 0) {
               alike = true
            }
         })
         .then(data => {
            if (alike) {
               alert("Такой Email Уже Зарегестрирован")
            }
         })
         .then(data => {
            if (inputData.email.length != 0 && alike != true) {
               fetchPOST()
            }
         })


      if (inputData) {

      }
      else {
         alert("вы Не ввели данные EMAIL")
      }


   }, [inputData])

   function fetchPOST() {
      fetch("http://localhost:3000/userCard", {
         method: "POST",
         body: JSON.stringify(inputData),
         headers: {
            "Content-type": "application/json"
         }

      })
         .then(data => data.json())
         .then(usSetCheckId(false))
         .then(singIn(inputData, NavigateTo))
         .then(ClearInput)

   }

   const NavigateTo = () => navigate(fromPage, { replace: true })


   function ClearInput() {
      formElem.email.value = ''
      formElem.password.value = ''
      formElem.firstName.value = ''
      formElem.lastName.value = ''
      setInputData(null)
   }



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