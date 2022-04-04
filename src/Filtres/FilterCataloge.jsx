import React from "react";

function FilterCataloge(state, products) {
   let mass = products

   if (state.catelogy.length) {
      state.catelogy.map((item) => {
         mass = mass.filter((item) => item.filter_name == item)
      })

   }
   else if (state.brand.length) {

   }


}

export default FilterCataloge