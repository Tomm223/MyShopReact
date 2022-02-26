import React, { useState, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { PagesContext } from "../Context/PagesProvider";
function CatalogeFilterItem({ mass, setMass, item, name }) {
   const [toggle, setToggle] = useState(false)

   const { category } = useContext(PagesContext)

   const handler = () => {
      if (mass.filter((i) => i == item) == false && !toggle) {
         const massiv = mass
         massiv.push(item)
         setMass(massiv)
      }
      else if (mass.filter((i) => i == item) && toggle) {
         const massiv = mass
         setMass(massiv.filter((i) => i != item))
      }

      if (!toggle) {
         setToggle(true)
      }
      else if (toggle) {
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