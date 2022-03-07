import React, { useContext, useEffect, useState } from "react";
import GenderGalleryItem from "./GenderGalleryItem"
import { PagesContext } from "../../Context/PagesProvider";
import { NavLink } from 'react-router-dom'
import { AddProduct, DeleteProduct, ToBasket } from '../../Fetch/Fetching'

const body = {
   id: Math.random() * 11111111,
   title: "trie",
   user_id: "fdvgbf"
}
function GenderGallery({ gallery }) {


   console.log("gall: ", gallery);


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
            <div onClick={() => ToBasket('001', "sgojrgjeod03030303")} class="gallery__btn">
               <p class="gallery__link">Купить</p>
            </div>
         </div>
      </div>
   )
}
export default GenderGallery

/*
{
          "id": "-et654ytgmdk",
          "product_id": "02-2",
          "size": 44,
          "amount": 1
        },
        {
          "id": "rethrjhg",
          "product_id": "02-3",
          "size": 44,
          "amount": 1
        },
        {
          "id": "-et654ytlejfj4gmk",
          "product_id": "11-2",
          "amount": 1
        },
        {
          "id": "-et64654knnk54ytgmk",
          "product_id": "27-2",
          "amount": 1
        }

*/