import React, { useContext, useEffect, useState } from "react";
import { LoadingGenderGallery } from "../UI/Loading/Loadings";
import GenderGalleryItem from "./GenderGalleryItem"
import { useWindowSize } from '../../hook/useWindowSize'
import { TypeGenderGalleryItem } from "../../Types/types-server";

const body = {
   id: Math.random() * 11111111,
   title: "trie",
   user_id: "fdvgbf"
}

interface GalleryProps {
   gallery: TypeGenderGalleryItem[] | null
}


const GenderGallery: React.FC<GalleryProps> = ({ gallery }) => {
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

   console.log(gallery);

   return (
      <>
         <div className="gallery">
            <div className="container">
               <div className="gallery__title">Выберите категорию</div>
               <div className="gallery__block">
                  {!galleryTimeout
                     ?
                     gallery &&
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
                  <div onClick={() => alert("не купишь")} className="gallery__btn">
                     <p className="gallery__link">Купить</p>
                  </div>
               }
            </div>
         </div>
      </>

   )
}
export default GenderGallery

