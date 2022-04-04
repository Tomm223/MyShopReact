import React from "react";
import { NavLink } from "react-router-dom";
import { SEARCH_CARHARTT, SEARCH_ELLESSE, SEARCH_MARTINS, SEARCH_NIKE, SEARCH_TNF } from "../Filtres/TypesSearch";
import { useNavigateParams } from '../hook/useSearchParams'
function Moda() {
   const navigateSearch = useNavigateParams()
   function handler(event) {
      console.log();
      navigateSearch('/cataloge', { collection: event.target.alt })
   }
   return (
      <>
         <div class="moda">
            <div class="containerNOT">
               <h3 class="moda__title">Модные Бренды</h3>
               <div class="moda__list">
                  <img onClick={handler} src="/img/page-img/intro-moda6.webp" alt={SEARCH_MARTINS} class="moda__item" />
                  <img onClick={handler} src="/img/page-img/intro-moda2.webp" alt={SEARCH_TNF} class="moda__item" />
                  <img onClick={handler} src="/img/page-img/intro-moda3.webp" alt={SEARCH_NIKE} class="moda__item" />
                  <img onClick={handler} src="/img/page-img/intro-moda4.webp" alt={SEARCH_CARHARTT} class="moda__item" />
                  <img onClick={handler} src="/img/page-img/intro-moda5.webp" alt={SEARCH_ELLESSE} class="moda__item" />
               </div>
            </div>
         </div>
      </>
   )
}

export default Moda
