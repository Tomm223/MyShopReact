import React from "react";
import { NavLink, useLocation } from "react-router-dom"
import { useState } from 'react'
import HeaderNavList from "./HeaderNavList";


function Header() {
   //uselocation for give registration
   const location = useLocation()

   //const [genderLink, setGenderLink] = useState("")
   const [NavBotttom, setNavBottom] = useState("nav")

   const setNavLink = ({ isActive }) => {
      if (isActive) {
         setNavBottom("nav active")
         return "header__gender-link activeLink"
      }
      else {
         setNavBottom("nav")
         return "header__gender-link"
      }
   }
   //isActive ? "header__gender-link activeLink" setNavBottom() : "header__gender-link"

   return (
      <>
         <header class="header">
            <div className="header__block">
               <div class="header__logo">
                  <NavLink to="/">
                     <div class="header__logo-item"></div>
                  </NavLink>
               </div>
               <ul class="header__genders">
                  <NavLink to="women" className={setNavLink} >
                     <li>ЖЕНЩИНЫ</li>
                     <HeaderNavList style={NavBotttom} />
                  </NavLink>
                  <NavLink to="men" className={setNavLink} >
                     <li>МУЖЧИНЫ</li>
                     <HeaderNavList style={NavBotttom} />
                  </NavLink>
               </ul>
               <div class="header__search">
                  <form class="header__search-form">
                     <input class="header__search-input" type="text" placeholder="Поиск" />
                     <div class="header__search-btn">
                        <div class="header__search-btn-item"></div>
                     </div>
                  </form>
               </div>
               <ul class="header__persons">
                  <NavLink to="/account/info">
                     <li class="header__person">
                        <img class="header__person-acc person__acc" src="/img/page-icon/account.svg"></img>
                        <div class="person-acc__checkout">
                           <div class="person-acc__title">
                              <img src="/img/page-icon/vesh-logo2.png" alt="logo" />
                           </div>
                           <ul class="person-acc__list">
                              <ul class="person-acc__list-reg">
                                 <NavLink to="registration/post" state={{ from: location }} className="person-acc__link-reg">
                                    Зарегестрироваться
                                 </NavLink>
                                 <NavLink to="registration/get" state={{ from: location }} className="person-acc__link-reg">
                                    Вход
                                 </NavLink>
                              </ul>
                              <ul class="person-acc__list-self">
                                 <NavLink to="/account/info">
                                    <li className="person-acc__item-self ">
                                       <div class="" id="header__cab">
                                          <a class="person-acc__link-self" href="#">Личный Кабинет</a>
                                       </div>
                                    </li>
                                 </NavLink>
                                 <NavLink to="/account/zakaz">
                                    <li class="person-acc__item-self ">
                                       <div class="" id="header__zakaz">
                                          <a class="person-acc__link-self" href="#">Мои Заказы</a>
                                       </div>
                                    </li>
                                 </NavLink>

                                 <NavLink to="/account/likes">
                                    <li class="person-acc__item-self ">
                                       <div class="" id="header__like">
                                          <a class="person-acc__link-self" href="#">Мое избранное</a>
                                       </div>
                                    </li>
                                 </NavLink>

                              </ul>
                           </ul>
                        </div>
                     </li>
                  </NavLink>
                  <NavLink to="/account/basket">
                     <li class="header__person">
                        <img class="header__person-basket person__basket" src="/img/page-icon/basket_white.png"></img>
                     </li>
                  </NavLink>
                  <NavLink to="/account/likes">
                     <li class="header__person">
                        <img class="header__person-acc person__likes" src="/img/page-icon/icons8-heart-48.png"></img>
                     </li>
                  </NavLink>

               </ul>
            </div>
         </header>


      </>
   )
}
export default Header