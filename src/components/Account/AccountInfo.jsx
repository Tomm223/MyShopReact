import React from "react";
function AccountInfo() {
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
            <form class="reg__form" id="cab__info-form" action="">
               <label class="reg__label" for="email">Адресс Электронной почты:</label>
               <input class="reg__input" id="reg__emal" name="email" type="text" />
               <label class="reg__label" for="email">Имя:</label>
               <input class="reg__input" id="reg__f-name" name="first-name" type="text" />
               <label class="reg__label" for="email">Фамилия:</label>
               <input class="reg__input" id="reg__l-name" name="last-name" type="text" />
               <label class="reg__label" for="email">Пароль:</label>
               <input class="reg__input" id="reg__pass" name="pass" type="text" />
               <input class="reg__btn" id="cab__btn" type="button" value="Сохранить Изменения" />
            </form>
         </div>
      </div>
   )
}
export default AccountInfo