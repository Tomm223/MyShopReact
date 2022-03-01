import React, { useContext, useEffect, useState } from "react";
import GenderGalleryItem from "./GenderGalleryItem"
import { PagesContext } from "../Context/PagesProvider";
import { NavLink } from 'react-router-dom'
function GenderGallery({ gallery }) {


   console.log("gall: ", gallery);
   /*
    
    */
   return (
      <div class="gallery">
         <div class="container">
            <div class="gallery__title">Выберите категорию</div>
            <div class="gallery__block">
               {gallery.map((item) => {
                  console.log(item.img);
                  return <GenderGalleryItem key={item.id} filter={item.filter} img={item.img} title={item.title} />
               })}
            </div>
            <div class="gallery__btn">
               <p class="gallery__link">Купить</p>
            </div>
         </div>
      </div>
   )
}
export default GenderGallery