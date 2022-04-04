import React, { useContext, useEffect, useState } from "react";
import { LoadingGenderGallery } from "../UI/Loading/Loadings";
import GenderGalleryItem from "./GenderGalleryItem"
import { useWindowSize } from '../../hook/useWindowSize'

const body = {
   id: Math.random() * 11111111,
   title: "trie",
   user_id: "fdvgbf"
}


function GenderGallery({ gallery }) {
   // responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon } = useWindowSize()

   const [galleryTimeout, setGalleryTimeout] = useState(true)
   const galleryNum = [1, 2, 3, 4, 5, 6]
   function MadeLoad() {
      return setTimeout(() => {
         setGalleryTimeout(false)
      }, 1500)
   }

   useEffect(() => {
      MadeLoad()
   }, [])
   return (
      <>
         <div className="gallery">
            <div class="container">
               <div class="gallery__title">Выберите категорию</div>
               <div class="gallery__block">
                  {!galleryTimeout
                     ?
                     gallery.map((item) => {
                        return <GenderGalleryItem key={item.id} filter={item.filter} img={item.img} title={item.title} />
                     })
                     :
                     galleryNum.map((item) => {
                        return <LoadingGenderGallery />
                     })

                  }
               </div>
               {minLabTop &&
                  <div div onClick={() => alert("не купишь")} class="gallery__btn">
                     <p class="gallery__link">Купить</p>
                  </div>
               }
            </div>
         </div>
      </>

   )
}
export default GenderGallery

