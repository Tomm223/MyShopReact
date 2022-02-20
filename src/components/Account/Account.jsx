import React, { useEffect, useState, useRef, useContext, useCallback } from "react";
import { Outlet, NavLink } from 'react-router-dom'
import AccountNavigate from "./AccountNavigate";
import { PagesContext } from "../Context/PagesProvider";
import { AuthContext } from "../Context/AuthProvider";
import { AccountContext } from "../Context/AccountProvider";


function Account() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])


   const [navigate, setNavigate] = useState([])

   useEffect(() => {
      fetch("http://localhost:3000/accountNavigate")
         .then(data => data.json())
         .then(data => setNavigate(data))
   }, [])


   const [navLeft, setNavLeft] = useState(0)
   const [navTop, setNavTop] = useState(0)
   const [navWidth, setNavWidth] = useState('100%')
   const [posNav, setPosNav] = useState('absolute')

   const [posNavBlock, setPosNavBlock] = useState('relative')

   const [checkRoute, setCheckRoute] = useState("up")

   const cabNav = useRef()
   const navigateBlock = useRef()
   const cab = useRef()
   function setPosFixNav() {
      setNavTop(10)
      setNavLeft(navigateBlock.current.getBoundingClientRect().left)
      setNavWidth(`${navigateBlock.current.getBoundingClientRect().width}px`)
      setPosNav('fixed')
      setPosNavBlock('static')
   }
   function setPosDef() {
      setNavTop(0)
      setNavLeft(0)
      setNavWidth('100%')
      setPosNav('absolute')
      setPosNavBlock('relative')
   }
   const proverkaScroll = (route) => {
      if (route == checkRoute) {
         if (route == "down") {
            //
            setCheckRoute("up")
            setPosFixNav()
            console.log("down :" + checkRoute);

         }
         else if (route == "up") {
            //
            setCheckRoute("down")
            setPosDef()
            console.log("up :" + checkRoute);
         }
      }
   }

   function scrolling() {
      const localNavTen = navigateBlock.current.getBoundingClientRect().top + this.window.scrollY - 10
      const pageY = this.window.scrollY
      const minus100 = pageY - localNavTen
      minus100 >= 0 ? proverkaScroll('down') : proverkaScroll('up')
      console.log(minus100);
   }


   useEffect(() => {
      window.addEventListener("scroll", scrolling, true);
      return () => {
         window.removeEventListener("scroll", scrolling, true);
      }
   }, [checkRoute, proverkaScroll])

   const styleNavBlock = {
      position: `${posNavBlock}`
   }
   const styleNav = {
      position: `${posNav}`,
      top: `${navTop}px`,
      left: `${navLeft}px`,
      width: `${navWidth}`
   }
   //Это не нужно только без него не работает((((
   const styleCab = {
      position: "relative"
   }
   // приемка инфы
   const { cabInfo, getUserChange } = useContext(AccountContext)
   console.log("cabInfo: ", typeof cabInfo);
   const { user } = useContext(AuthContext)

   useEffect(() => {
      if (user != null && cabInfo == null) {
         fetch("http://localhost:3000/UserChange")
            .then(data => data.json())
            .then(data => {
               const MassInfoUser = data.filter((item) => item.user_id == user.id)
               getUserChange(MassInfoUser[0])
            })
      }
      else if (cabInfo != null) {
         console.log("cabinfo != null");
      }
   }, [])





   return (
      <>
         <div class="registration-body">
            <div ref={cab} style={styleCab} class="cab">
               <div class="cab__block">
                  <div className="cab__nav-title">
                     <NavLink to='/' style={{ width: "100%" }}>
                        <img src="/img/page-icon/vesh-logo2.png" alt="lojgo" />
                     </NavLink>
                  </div>
                  <div class="cab__supp-title">
                     <h1>Личный кабинет</h1>
                  </div>
               </div>
               <div className="cab__block">
                  <div ref={navigateBlock} style={styleNavBlock} className="navigateBlock">
                     <div ref={cabNav} style={styleNav} className="cab__nav">
                        <nav class="cab__nav-nav">
                           <div class="cab__nav-face">
                              <div class="cab__ava">
                                 <img src="/img/page-icon/delivery.svg" alt="" class="cab__ava-item" />
                              </div>
                              <div class="cab__ava-text">
                                 <p id="ava__f-name">Даниил</p>
                                 <p id="ava__l-name">Осипов(ввввввввв)</p>
                              </div>
                           </div>
                           <ul class="cab__list">
                              {navigate.map((link) => {
                                 return (<AccountNavigate key={link.id} link={link} />)
                              })}
                           </ul>
                        </nav>
                     </div>
                  </div>
                  <div class="cab__supp">
                     <Outlet />
                  </div>
               </div>
            </div>
         </div>

      </>
   )
}
export default Account