import React from "react";
import { NavLink } from "react-router-dom"

export default function AutoComplite({ state }) {

   const FilterSearch = state.FilterSearch
   const focusSearch = state.focusSearch
   const search = state.search

   const stylesAutoComplite = {
      height: focusSearch ? search ? 'auto' : "0" : '0',
      width: focusSearch ? search ? 'auto' : "0" : '0',
      display: focusSearch ? search ? 'flex' : "none" : 'none',
   }
   console.log(focusSearch);

   return (
      <ul className="autoComplite" style={stylesAutoComplite}>
         {
            FilterSearch == null ? null : FilterSearch.map((item) => {
               return (<NavLink to="/product" state={{ product: item }}
                  key={item.id} className="autoCompliteLink" >{item.product_name}</NavLink>
               )
            })
         }
      </ul>
   )
}