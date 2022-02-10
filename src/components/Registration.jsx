import React, { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";

function Registration() {
   const { theme, setTheme } = useContext(ThemeContext)
   setTheme("grey")
   console.log(theme);
   return (

      <div class="registration-body">
         <div class="reg">
            <div class="reg__title">
               <img src="/img/page-icon/vesh-logo.png" alt="" />
            </div>
            <div class="reg__block">
               <div class="reg__checkout">
                  <div class="reg__checkout-item active">
                     <p class="reg__checkout-link">Регестрация</p>
                  </div>
                  <div class="reg__checkout-item">
                     <p class="reg__checkout-link">Вход</p>
                  </div>
               </div>
               <form class="reg__form" action="">
                  <label class="reg__label" for="email">Адресс Электронной почты:</label>
                  <input class="reg__input" id="reg__emal" name="email" type="text" />
                  <label class="reg__label" for="email">Имя:</label>
                  <input class="reg__input" id="reg__f-name" name="first-name" type="text" />
                  <label class="reg__label" for="email">Фамилия:</label>
                  <input class="reg__input" id="reg__l-name" name="last-name" type="text" />
                  <label class="reg__label" for="email">Пароль:</label>
                  <input class="reg__input" id="reg__pass" name="pass" type="text" />
                  <input class="reg__btn" type="button" value="зарегестрироваться" />
               </form>
            </div>
         </div>

      </div>

   )
}
export default Registration 