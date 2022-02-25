import React, { useState, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { PagesContext } from "../Context/PagesProvider";
function CatalogeFilterItem({ item, scoor, setScoor }) {
   const [toggle, setToggle] = useState(false)
   const handler = () => {
      if (!toggle) {
         setScoor(scoor + 1)
         setToggle(true)
      }
      else if (toggle) {
         setScoor(scoor - 1)
         setToggle(false)
      }
   }
   const styles = {
      backgroundColor: toggle ? 'blue' : 'inherit',
      border: toggle ? "1px solid #222" : '1px solid #222',
      borderRadius: ".7em",
   }
   return (
      <React.Fragment>
         <li onClick={handler} style={styles} className='filter__option-item'>
            <p class="filter__option-link">{item}</p>
         </li>

      </React.Fragment>

   )
}

export default CatalogeFilterItem