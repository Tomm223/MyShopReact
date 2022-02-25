import React, { useState, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { PagesContext } from "../Context/PagesProvider";
import CatalogeFilterItem from "./CatalogeFilterItem";
function CatalogeFilter({ filtres, name }) {
   const { tabs, setTabs } = useContext(PagesContext)
   const styleOptions = {
      display: tabs == name ? 'block' : 'none'
   }
   const closeCheckBox = () => setTabs(null)
   const [scoor, setScoor] = useState(0)

   return (
      <React.Fragment>
         <li class="filter__list-item">
            <div class="filter__item">
               <p className="filter__item-p" onClick={() => setTabs(name)} type="text" > {name}</p>
               <div style={styleOptions} class="filter__option">
                  <div class="filter__option-filter">
                     <div class="filter__option-block">
                        <p class="filter__option-span">Выбрано: <span>{scoor}</span></p>
                     </div>
                     <input onClick={closeCheckBox} class="filter__option-btn" type="button" value="Выбрать" />
                  </div>
                  <ul class="filter__option-list">
                     {filtres.map((item, index) => {
                        return <CatalogeFilterItem item={item} index={index} setScoor={setScoor} scoor={scoor} />
                     })}
                  </ul>
               </div>
            </div>
         </li>

      </React.Fragment>

   )
}

export default CatalogeFilter