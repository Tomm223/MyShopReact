import React, { useContext, useEffect, useRef } from "react";
import { createSearchParams, generatePath, NavLink, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { useState } from 'react'
import { useWindowSize } from '../../hook/useWindowSize'


import HeaderNavList from "./HeaderNavList";
import ProductsContext from "../../Context/ProductsContext";
import { SearchInput } from "../UI/Header/SearchInput";
import AutoComplite from "../UI/Header/AutoComplite";
import { useSelector } from "react-redux";
import { useNavigateParams } from '../../hook/useSearchParams'
import { Burger } from "../UI/BurgerMenu/BurgerMenu";


function Header() {
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon } = useWindowSize()

   const location = useLocation()

   const [search, setSearch] = useState('')

   // Поиск Продуктов для AUTOCOMPLITE
   const products = useSelector(state => state.products.products)
   const [FilterSearch, setFilterSearch] = useState()
   useEffect(() => {
      if (search) {
         setFilterSearch(products.filter((item) =>
            item.product_name.toLowerCase().includes(search.toLowerCase())
         ))
      }
   }, [search])

   // Navigate to Cataloge, search in URLParams
   const [searchParams, setSearchParams] = useSearchParams()
   const navigateParams = useNavigateParams()
   //Handle for searching
   function HandlerSubmit(event) {
      event.preventDefault()
      if (search.length) {
         location.pathname != "/cataloge" ? navigateParams('/cataloge', { products: search }) : setSearchParams({ products: search })

      }
   }

   // focus for effects
   const [focusSearch, setFocusSearch] = useState(false)

   // header Height
   const headerContainer = location.pathname.includes("men") && minLabTop ? "header-container big" : "header-container"

   // style navBoottoom 
   const [stylesNavBottomM, setStylesNavBottomM] = useState(false)
   const [stylesNavBottomW, setStylesNavBottomW] = useState(false)
   useEffect(() => {
      console.log(stylesNavBottomM);
   }, [stylesNavBottomM])

   const setNavLinkW = ({ isActive }) => {
      if (isActive) {
         setStylesNavBottomW(true)
         return "header__gender-link activeLink"
      }
      else {

         setStylesNavBottomW(false)
         return "header__gender-link"
      }

   }
   const setNavLinkM = ({ isActive }) => {
      if (isActive) {
         setStylesNavBottomM(true)
         return "header__gender-link activeLink"
      }
      else {
         setStylesNavBottomM(false)
         return "header__gender-link"
      }
   }
   return (
      <>
         <header class="header">
            <div className="header__block">
               {!minLabTop && <Burger />}
               <div class="header__logo">
                  <NavLink to="/">
                     <div class="header__logo-item"></div>
                  </NavLink>
               </div>
               <ul class="header__genders">
                  <NavLink to="women"
                     className={setNavLinkW} >
                     <div
                        onMouseEnter={() => setStylesNavBottomW(true)}
                        onMouseLeave={() => setStylesNavBottomW(false)}
                     >ЖЕНЩИНЫ</div>
                  </NavLink>
                  <NavLink
                     to="men"
                     className={setNavLinkM} >
                     <div
                        onMouseEnter={() => setStylesNavBottomM(true)}
                        onMouseOut={() => setStylesNavBottomM(false)}
                     >МУЖЧИНЫ</div>
                  </NavLink>
                  <HeaderNavList style={stylesNavBottomW} />
                  <HeaderNavList style={stylesNavBottomM} />
               </ul>
               {minLabTop
                  &&
                  <div class="header__search">
                     <SearchInput onSubmit={HandlerSubmit} state={{
                        focusSearch, setFocusSearch,
                        search, setSearch, FilterSearch
                     }} />
                     <AutoComplite state={{
                        FilterSearch, focusSearch,
                        setFocusSearch, search, setSearch
                     }} />
                  </div>
               }

               {minLabTop
                  ?
                  <ul class="header__persons">
                     <NavLink to="/account/info" state={{ from: location }}>
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
                                    <NavLink to="/account/info" state={{ from: location }}>
                                       <li className="person-acc__item-self ">
                                          <div class="" id="header__cab">
                                             <a class="person-acc__link-self" href="#">Личный Кабинет</a>
                                          </div>
                                       </li>
                                    </NavLink>
                                    <NavLink to="/account/basket" state={{ from: location }}>
                                       <li class="person-acc__item-self ">
                                          <div class="" id="header__zakaz">
                                             <a class="person-acc__link-self" href="#">Моя Корзина</a>
                                          </div>
                                       </li>
                                    </NavLink>

                                    <NavLink to="/account/likes" state={{ from: location }}>
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
                     <NavLink to="/account/basket" state={{ from: location }}>
                        <li class="header__person">
                           <img class="header__person-basket person__basket" src="/img/page-icon/basket_white.png"></img>
                        </li>
                     </NavLink>
                     <NavLink to="/account/likes" state={{ from: location }}>
                        <li class="header__person">
                           <img class="header__person-acc person__likes" src="/img/page-icon/icons8-heart-48.png"></img>
                        </li>
                     </NavLink>
                  </ul>
                  :
                  <ul class="header__persons">
                     <div onClick={() => setFocusSearch(!focusSearch)} className="header__person">
                        <img class="header__person-acc person__acc" src="img/page-icon/search.svg" />
                        <div className={focusSearch ? "mini-search open" : "mini-search close"}>
                           <div className="mini-search__container" >
                              <div className="header__search">
                                 <SearchInput miniFocus={focusSearch} onSubmit={HandlerSubmit} state={{
                                    focusSearch, setFocusSearch,
                                    search, setSearch, FilterSearch
                                 }} />
                                 <AutoComplite state={{
                                    FilterSearch, focusSearch,
                                    setFocusSearch, search, setSearch
                                 }} />
                              </div>
                              <div className="mini-search__close">
                                 <img src="/img/page-icon/icons8-close-24.png" alt="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <NavLink to="/account/info" state={{ from: location }}>
                        <div className="header__person">
                           <img class="header__person-acc person__acc" src="/img/page-icon/account.svg"></img>
                        </div>
                     </NavLink>
                  </ul>

               }
            </div>
         </header>
         <div className={headerContainer}></div>

      </>
   )
}
export default Header

