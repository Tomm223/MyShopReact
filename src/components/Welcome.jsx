import React, { useState } from "react";
import Moda from "./Moda";
import { Link } from "react-router-dom"
import PagesContext from "./Context/PagesContext";
import { useEffect, useContext } from 'react'
function Welcome() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [pageY0])


   return (
      <>
         <div class="intro">
            <div class="intro__text">
               <h2 class="intro__text-title">VESH4lKa</h2>
               <span class="intro__text-p">the brand</span>
               <span class="intro__text-span">of luxerious fashion</span>
               <form class="intro__for">
                  <Link to="women" className="intro__for-item" > ЖЕНЩИНЫ </Link>
                  <Link to="men" className="intro__for-item" > МУЖЧИНЫ </Link>
               </form>
            </div>
         </div>
         <Moda />
      </>
   )
}
export default Welcome 