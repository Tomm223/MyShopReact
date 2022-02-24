import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AccountContext } from "../Context/AccountProvider";
import { AuthContext } from "../Context/AuthProvider";
function FormGet() {
   const { singIn, fromPage } = useContext(AuthContext)
   const { usSetCheckId } = useContext(AccountContext)
   //navigate
   const navigate = useNavigate()
   //form func
   const form = useRef()
   const [users, setUsers] = useState('')
   const [inputData, setInputData] = useState('')
   function HandlerButton() {
      const formElem = form.current
      const email = formElem.email.value
      const password = formElem.password.value
      setInputData({
         email,
         password
      })
      formElem.email.value = ''
      formElem.password.value = ''
   }
   useEffect(() => {
      fetch("http://localhost:3000/userCard")
         .then(data => data.json())
         .then(data => setUsers(data))
         .then(SearchCheck)
   }, [inputData])
   async function SearchCheck() {
      const searchEmail = await users.filter((item) => item.email == inputData.email)
      console.log(searchEmail);
      if (searchEmail.length == 1) {
         const Card = searchEmail[0]
         console.log(Card);
         if (Card.password == inputData.password) { usSetCheckId(true) }
         Card.password == inputData.password ? singIn(Card, NavigateTo) : alert("false pass")
      }
   }

   const NavigateTo = () => navigate(fromPage, { replace: true })
   /*.then(data => users.filter((item) => item.email == inputData.email))
         .then(data => {
            console.log(data)
            if (data.length == 1) {
               const Card = data[0]
               console.log(Card);
               Card.password == inputData.password ? singIn(Card.id, navigate(fromPage, { repalce: true })) : alert("false pass")
            }
         } */





   return (
      <>
         <form ref={form} class="vhod__form" action="">
            <label class="reg__label" for="email">Адресс Электронной почты:</label>
            <input class="reg__input" id="reg__emal" name="email" type="text" />
            <label class="reg__label" for="password">Пароль:</label>
            <input class="reg__input" id="reg__pass" name="password" type="text" />
            <input onClick={HandlerButton} class="reg__btn" type="button" value="войти" />
         </form>
      </>
   )
}
export default FormGet