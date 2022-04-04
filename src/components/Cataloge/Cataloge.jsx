import React, { useState } from "react";
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { useWindowSize } from '../../hook/useWindowSize'

import { PagesContext } from "../../Context/PagesProvider";
import ProductsContext from "../../Context/ProductsContext";
import { CollectionsFiltered, ProductsFiltered } from "../../Redux/actions/ProductsActions";
import ProductsList from "../Products/ProductsList";
import CatalogeFilter from "./CatalogeFilter";
import { SearchInput } from "../UI/Header/SearchInput";
import AutoComplite from "../UI/Header/AutoComplite"
function Cataloge() {
   //responsive
   const { minLabTop,
      minTablet,
      minMonitor,
      minFon } = useWindowSize()


   const location = useLocation()
   console.log(location);

   const dispatch = useDispatch()
   const products = useSelector(state => state.products.products)
   const FilterProducts = useSelector(state => state.products.filter)
   //pageYo
   const { pageY0 } = useContext(PagesContext)
   useEffect(() => {
      pageY0()
   }, [])
   const [searchParams, setSearchParams] = useSearchParams()
   const QueryProducts = searchParams.get('products') || false
   const QueryCollection = searchParams.get('collection') || false
   console.log("QUERYPROD: ", QueryCollection);

   useEffect(() => {
      console.log('collection', QueryCollection);
      if (QueryCollection) {
         dispatch(CollectionsFiltered(QueryCollection))
      }

   }, [QueryCollection, QueryProducts])

   useEffect(async () => {
      if (QueryProducts) {
         console.log("QUERYPROD-----YES: ", QueryProducts);
         const filter = await products.filter((item) => item.filter_name.toLowerCase().includes(QueryProducts.toLowerCase()))
         dispatch(ProductsFiltered(filter))
      }
   }, [QueryProducts])
   // FILTRES IN CATALOGE
   useEffect(() => {
      if (!QueryProducts && !QueryCollection) {
         //dispatch(ProductsFiltered(filterProd))
      }
   }, [])

   const [filterCataloge, setFilterCataloge] = useState({
      basic: ['sales', 'news', 'moda'],
      brands: ["adidas", "Ellesse", "Dr. Martens", "Nike", "Tommy Hilfiger", "Fred Perry", "New Look",
         "The North Face", "Feshin"],
      season: ['all', 'summer', 'winter', 'spring'],
      material: ["Пух", "Кожа", "Нейлон", "Denim", "Хлопок", "Стрейч", "Резина", "Сетка", "Замша"],
      filterName: ['Куртка', "Штаны", "Футболка", "Обувь"],
      color: ['Черный', 'Синий', 'Зеленый', 'Белый', 'Хаки', 'Multy', 'Серый']
   })
   const { finishFilter, massFilters } = useContext(PagesContext)


   const FilterCataloge = '' //products.filter((item) => item.product_name.toLowerCase().includes(QueryProducts.toLowerCase()))
   let filterProd = ''// finishFilter.length ? finishFilter : FilterCataloge.length == products.length ? false : FilterCataloge



   const { color, setColor, brand, setBrand, category, setCategory, material, setMaterial, season,
      setSeason, basic, setBasic } = useContext(PagesContext)

   // RESPONSIVE MINI SEARCH INPUT
   //
   //Handle for searching
   function HandlerSubmit(event) {
      event.preventDefault()
      if (search.length) {
         setSearchParams({ products: search })

      }
   }
   // input value
   const [search, setSearch] = useState('')
   // autoComplite const 
   const [FilterSearch, setFilterSearch] = useState()
   useEffect(() => {
      if (search) {
         setFilterSearch(products.filter((item) =>
            item.product_name.toLowerCase().includes(search.toLowerCase())
         ))
      }
   }, [search])
   // focus for effects
   const [focusSearch, setFocusSearch] = useState(false)

   return (
      <>
         {!minLabTop &&
            <div className="cataloge-search">
               <SearchInput onSubmit={HandlerSubmit} state={{
                  focusSearch, setFocusSearch,
                  search, setSearch, FilterSearch
               }} />
            </div>
         }
         {!minLabTop &&
            <div className="cataloge-mini__autoComplite">
               <AutoComplite state={{
                  FilterSearch, focusSearch,
                  setFocusSearch, search, setSearch
               }} />
            </div>
         }
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
         <div>
         </div>
         <div class="filter">
            <ul class="filter__list">
               <div style={{ marginRight: "1rem" }}>
                  <CatalogeFilter mass={brand} setMass={setBrand} filtres={filterCataloge.brands} name={'Бренд'} />
               </div>
               <div style={{ marginRight: "1rem" }}>
                  <CatalogeFilter mass={category} setMass={setCategory} filtres={filterCataloge.filterName} name={'Категории'} />
               </div>
               <div style={{ marginRight: "1rem" }}>
                  <CatalogeFilter mass={material} setMass={setMaterial} filtres={filterCataloge.material} name={'Материал'} />
               </div>
               <div style={{ marginRight: "1rem" }}>
                  <CatalogeFilter mass={season} setMass={setSeason} filtres={filterCataloge.season} name={'Сезон'} />
               </div>
               <div style={{ marginRight: "1rem" }}>
                  <CatalogeFilter mass={color} setMass={setColor} filtres={filterCataloge.color} name={'Цвет'} />
               </div>
               <div >
                  <CatalogeFilter mass={basic} setMass={setBasic} filtres={filterCataloge.basic} name={'Основные'} />
               </div>
            </ul>
         </div>

         <div class="feture">
            <div class="container">
               <div class="feture__how">
                  <p>Найдено товаров: <span>{FilterProducts.length}</span></p>
               </div>
            </div>
            <ProductsList products={FilterProducts} />
         </div>
      </>
   )
}
export default Cataloge 