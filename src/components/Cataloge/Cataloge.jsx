import React, { useState } from "react";
import { useContext, useEffect } from 'react'
import { useLocation, useSearchParams } from "react-router-dom";
import { PagesContext } from "../Context/PagesProvider";
import ProductsContext from "../Context/ProductsContext";
import ProductsList from "../Products/ProductsList";
import CatalogeFilter from "./CatalogeFilter";
function Cataloge() {
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])
   const [searchParams, setSearchParams] = useSearchParams()
   const productQuery = searchParams.get('products') || ''
   const { products } = useContext(ProductsContext)
   const [filterCataloge, setFilterCataloge] = useState({
      basic: ['sales', 'news', 'moda'],
      brands: ["adidas", "Ellesse", "Dr. Martens", "Nike", "Tommy Hilfiger", "Fred Perry", "New Look",
         "The North Face", "Feshin"],
      season: ['all', 'summer', 'winter', 'spring'],
      material: ["Пух", "Кожа", "Нейлон", "Хлопок", "Стрейч", "Резина", "Сетка", "Замша"],
      filterName: ['Куртка', "Штаны", "Футболка", "Обувь"]
   })
   const location = useLocation()
   const filterProd = location.state ? location.state.FilterSearch : products.filter((item) => item.product_name.toLowerCase().includes(productQuery.toLowerCase()))
   function handlerSearch() {

   }

   return (
      <>
         <div class="feture catalog" style={{ cursor: "default" }}>
            <div class="container">
               <div class="feture__title">
                  <h2>Мы рекомендуем</h2>
                  <span>Обнови гардероб! Покупай товары по нашим рекомендациям</span>
                  <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet dolorum natus recusandae,
                     dignissimos expedita laboriosam voluptatum numquam fuga veniam cum maxime totam unde fugit dolor quia
                     necessitatibus vel animi quis voluptatibus dolores soluta fugiat! Ipsa cum praesentium doloremque.
                     Expedita, accusamus laudantium cupiditate perferendis magnam saepe inventore sed, sunt iusto tempora
                     consectetur. Alias mollitia doloremque libero optio fugiat cupiditate odit amet expedita maxime
                     aspernatur repellat modi accusamus tempora rerum id repudiandae aliquam similique, fugit laborum. Quam
                     doloremque minus quidem soluta odio veniam placeat tenetur, omnis magnam corrupti modi dicta repellat
                     officia tempore sequi debitis assumenda, maxime tempora perspiciatis, iusto eum ex? Expedita
                     laboriosam, quisquam similique repellat quibusdam obcaecati ullam cum a, id suscipit quia eligendi
                     earum voluptas modi velit eos sed? Molestiae quia quasi saepe nihil tempora laboriosam odit aliquam a
                     similique enim voluptatem asperiores perspiciatis vero maxime provident excepturi debitis ut rerum
                     eveniet consequuntur minus impedit officiis, beatae quibusdam. Quasi saepe alias, natus nihil ipsa
                     consequuntur non facilis consectetur! Harum dicta id voluptatibus dignissimos nisi neque repellendus
                     accusantium optio nobis vero voluptatum similique officiis esse minus ut, alias obcaecati temporibus
                     impedit consectetur maxime aut provident. Nostrum quae, iusto est, nam provident cupiditate nemo sit
                     fugit quos odio fuga deleniti!</span>
               </div>
            </div>
         </div>
         <div class="filter">
            <ul class="filter__list">
               <div style={{ marginRight: "1rem" }}>
                  <CatalogeFilter filtres={filterCataloge.filterName} name={'Категории'} />
               </div>
               <div style={{ marginRight: "1rem" }}>
                  <CatalogeFilter filtres={filterCataloge.basic} name={'Основные'} />
               </div>
               <div style={{ marginRight: "1rem" }}>
                  <CatalogeFilter filtres={filterCataloge.season} name={'Сезон'} />
               </div>
               <div style={{ marginRight: "1rem" }}>
                  <CatalogeFilter filtres={filterCataloge.material} name={'Материал'} />
               </div>
               <li onClick={handlerSearch} class="filter__list-item">
                  <input type="button" class="filter__search active" value="Искать" />
               </li>
            </ul>
         </div>

         <div class="feture">
            <div class="container">
               <div class="feture__how">
                  <p>Найдено товаров: <span>{filterProd.length}</span></p>
               </div>
            </div>
            <ProductsList products={filterProd} />
         </div>
      </>
   )
}
export default Cataloge 