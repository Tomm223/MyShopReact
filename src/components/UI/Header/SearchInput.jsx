import React, { Fragment, useEffect, useRef } from "react";
import classes from './searchStyle.module.scss'

export function SearchInput({ onSubmit, state, miniFocus }) {
   const FilterSearch = state.FilterSearch
   const focusSearch = state.focusSearch
   const setFocusSearch = state.setFocusSearch
   const search = state.search
   const setSearch = state.setSearch
   const input = useRef()
   //style BTN

   const classesBtn = search.length && focusSearch ? "header__search-btn active" : "header__search-btn"

   // responsive 
   useEffect(() => {
      if (miniFocus) {
         input.current.focus()
      }
   }, [miniFocus])


   return (
      <Fragment>
         {focusSearch && <div className={classes.background_block}></div>}

         <form onSubmit={onSubmit} class="header__search-form">
            <input ref={input} onFocus={() => setFocusSearch(true)} onBlur={() => setTimeout(() => setFocusSearch(false), 300)}
               class="header__search-input" type="text" placeholder="Поиск"
               onChange={event => setSearch(event.target.value)} />
            <button type="submit" className={classesBtn}>
               <div class="header__search-btn-item"></div>
            </button>
         </form >
      </Fragment>

   )
}