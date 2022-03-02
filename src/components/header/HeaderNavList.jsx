import React, { useState } from "react";
import HeaderNavSort from "./HeaderNavSort";
function HeaderNavList(props) {
   const [category, setCategory] = useState([{ name: "Распродажа", key: 111, id: "sale" },
   { name: "Новинки", key: 222, id: "news" },
   { name: "Одежда", key: 222, id: "shot" },
   { name: "Обувь", key: 222, id: "shot" },
   { name: "Модно в этом году", key: 222, id: "shot" },
   { name: "Бренды", key: 222, id: "shot" },
   { name: "Всё", key: 222, id: "shot" }])
   return (
      <div>
         <nav className={props.style}>
            <ul class="nav__list">
               {category.map((item, index) => {
                  return (
                     <li key={index} class="nav__item">
                        <a href="#" class="nav__link" key={item.key}>{item.name}</a>
                        <HeaderNavSort category={item.id} />
                     </li>)
               })}

            </ul>
         </nav>
      </div>
   )
}
export default HeaderNavList