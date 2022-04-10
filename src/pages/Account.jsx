import React, { useEffect, useState, useRef, useContext, useCallback } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom'
import AccountNavigate from "../components/Account/AccountNavigate";
import { PagesContext } from "../Context/PagesProvider";
import { AuthContext } from "../Context/AuthProvider";
import { AccountContext } from "../Context/AccountProvider";
import { AccProductGet } from "../Fetch/Fetching";
import { useDispatch, useSelector } from "react-redux";
import { LocationFrom } from "../Redux/actions/PagesActions";
import { useWindowSize } from '../hook/useWindowSize'
import { AccountExitMini, AccountOutMini } from "../components/UI/Account/AccountExitMini";

function Account() {
   //responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon, minBigAcc } = useWindowSize()
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])
   // accOUT


   const location = useLocation()
   const dispatch = useDispatch()
   useEffect(() => {
      if (location.state) {
         dispatch(LocationFrom(location.state.from))
      }
   }, [])

   const [navigate, setNavigate] = useState([])

   useEffect(() => {
      fetch("http://localhost:3000/accountNavigate")
         .then(data => data.json())
         .then(data => {
            setNavigate(data)
         })

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
      const localNavTen = minBigAcc && navigateBlock.current.getBoundingClientRect().top + this.window.scrollY - 10
      const pageY = this.window.scrollY
      const minus100 = pageY - localNavTen
      minus100 >= 0 ? proverkaScroll('down') : proverkaScroll('up')
   }

   useEffect(() => {
      // console.log(navigateBlock.current.getBoundingClientRect().top);
      const windSubs = window.addEventListener("scroll", scrolling, true);
      return () => { console.log("CLOSEEEEEE"); return windSubs }
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
   //const { user } = useContext(AuthContext)
   const user = useSelector(state => state.user.user)
   const { UseSetChages } = useContext(AccountContext)
   useEffect(async () => {
      const response = await AccProductGet(user.id)
      UseSetChages(response.AccArray)
   }, [])


   // account for mini screen

   const styleMiniMain = useSelector(state => state.account.responsive_main)

   return (
      <>
         <div class="registration-body">
            <div ref={cab} style={styleCab} class="cab">
               <div class="cab__block title">
                  <div className="cab__nav-title">
                     <NavLink to='/' style={{ width: "100%" }}>
                        <img src="/img/page-icon/vesh-logo2.png" alt="lojgo" />
                     </NavLink>
                  </div>
                  <div class="cab__supp-title">
                     <h1>Личный кабинет</h1>
                  </div>
               </div>
               {minBigAcc
                  ?
                  <div className="cab__block">
                     <div ref={navigateBlock} style={styleNavBlock} className="cab__navigateBlock">
                        <div ref={cabNav} style={styleNav} className="cab__nav">
                           <nav class="cab__nav-nav">
                              <div class="cab__nav-face">
                                 <div class="cab__ava">
                                    <img src="/img/page-icon/delivery.svg" alt="" class="cab__ava-item" />
                                 </div>
                                 <div class="cab__ava-text">
                                    <p id="ava__f-name">{user.firstName}</p>
                                    <p id="ava__l-name">{user.lastName}</p>
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
                  :
                  <div className="cab__block mini">
                     <AccountOutMini />
                     <header class="mini__header">
                        <div class="cab__nav-face">
                           <div class="cab__ava">
                              <img src="/img/page-icon/delivery.svg" alt="" class="cab__ava-item" />
                           </div>
                           <div class="cab__ava-text">
                              <p id="ava__f-name">{user.firstName}</p>
                              <p id="ava__l-name">{user.lastName}</p>
                           </div>
                        </div>
                        <ul class="mini__list">
                           {navigate.map((link) => {
                              return (<AccountNavigate key={link.id} link={link} />)
                           })}
                        </ul>
                     </header>
                     <div class="cab__supp mini__supp">
                        <div className={styleMiniMain ? `main-container open` : 'main-container close'}>
                           <AccountExitMini />
                           <Outlet />
                        </div>

                     </div>
                  </div>
               }

            </div>
         </div>

      </>
   )
}
export default Account


