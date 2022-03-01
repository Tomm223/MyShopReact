import React, { useState, useContext, useRef } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { PagesContext } from "../Context/PagesProvider";
import ProductsContext from "../Context/ProductsContext";
import CatalogeFilterItem from "./CatalogeFilterItem";
function CatalogeFilter({ mass, setMass, filtres, name }) {
   const { tabs, setTabs } = useContext(PagesContext)
   const styleOptions = {
      display: tabs == name ? 'block' : 'none'
   }
   const { searchForFilter, finishFilter, massFilters } = useContext(PagesContext)
   const { products } = useContext(ProductsContext)
   const [searchParams, setSearchParams] = useSearchParams()
   const closeCheckBox = () => setTabs(null)
   async function searchStart() {
      console.log(mass);
      const massurl = []
      massFilters.map((item) => {
         item.map((i) => massurl.push(i))
      })

      console.log("massFilters: ", massurl);
      setSearchParams({
         filter: `${massurl.join('+')}`
      })
      await searchForFilter(products)
      return closeCheckBox()
   }


   return (
      <React.Fragment>
         <li class="filter__list-item">
            <div class="filter__item">
               <p className="filter__item-p" onClick={() => setTabs(name)} type="text" > {name}</p>
               <div style={styleOptions} class="filter__option">
                  <div class="filter__option-filter">
                     <div class="filter__option-block">
                        <p class="filter__option-span">Выбрано: <span>{ }</span></p>
                     </div>
                     <input onClick={searchStart} class="filter__option-btn" type="button" value="Выбрать" />
                  </div>
                  <ul class="filter__option-list">
                     {filtres.map((item, index, name) => {
                        return <CatalogeFilterItem mass={mass} setMass={setMass} name={name} item={item} index={index} />
                     })}
                  </ul>
               </div>
            </div>
         </li>

      </React.Fragment>

   )
}

export default CatalogeFilter