import React, { useEffect, useState, useRef } from "react";
import { Outlet } from 'react-router-dom'
import AccountNavigate from "./AccountNavigate";
function Account() {
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


   const [checkRoute, setCheckRoute] = useState('up')

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
   function proverkaScroll(route) {
      if (route == checkRoute) {
         if (route == "down") {
            //
            setPosFixNav()

            setCheckRoute('up')

         }
         else if (route == "up") {
            //
            setPosDef()
            setCheckRoute('down')

         }
      }



   }
   /*useEffect(() => {
      window.addEventListener("scroll", function scroll() {
         const localNavTen = cabNav.current.getBoundingClientRect().top + this.window.scrollY - 10
         const pageY = this.window.scrollY
         const minus100 = pageY - localNavTen
         minus100 > 0 ? setMargTop(minus100) : setMargTop(0)
      }, true);
      return () => {
         window.removeEventListener("scroll", function scroll() {
            const localNavTen = cabNav.current.getBoundingClientRect().top + this.window.scrollY - 10
            const pageY = this.window.scrollY
            const minus100 = pageY - localNavTen
            minus100 > 0 ? setMargTop(minus100) : setMargTop(0)

         }, true);
      }
   }, [])*/
   useEffect(() => {
      window.addEventListener("scroll", function scroll() {
         const localNavTen = cabNav.current.getBoundingClientRect().top + this.window.scrollY - 10
         const pageY = this.window.scrollY
         const minus100 = pageY - localNavTen
         minus100 > 0 ? proverkaScroll('down') : proverkaScroll('up')
         console.log(minus100);
      }, true);
      return () => {
         window.removeEventListener("scroll", function scroll() {
            const localNavTen = cabNav.current.getBoundingClientRect().top + this.window.scrollY - 10
            const pageY = this.window.scrollY
            const minus100 = pageY - localNavTen
            minus100 >= 0 ? proverkaScroll('down') : proverkaScroll('up')
            console.log(minus100);

         }, true);
      }
   }, [])



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

   return (
      <>
         <div class="registration-body">
            <div ref={cab} style={styleCab} class="cab">
               <div class="cab__block">
                  <div class="cab__nav-title">
                     <img src="/img/page-icon/vesh-logo2.png" alt="lojgo" />
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