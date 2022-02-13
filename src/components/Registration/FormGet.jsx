import React, { useEffect, useRef, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

function FormGet() {
   const { user, setUser } = useContext(AuthContext)

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
   console.log(user);
   useEffect(() => {
      fetch("http://localhost:3000/userCard")
         .then(data => data.json())
         .then(data => setUsers(data))
         .then(SearchCheck)
   }, [inputData])
   async function SearchCheck() {
      const searchEmail = await users.filter((item) => item.email == inputData.email)
      if (searchEmail.length == 1) {
         const Card = searchEmail[0]
         console.log(Card);
         Card.password == inputData.password ? setUser(Card.id) : alert("false pass")
      }
   }


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