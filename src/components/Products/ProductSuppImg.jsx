import React, { useState } from "react";

function ProductSuppImg(props) {
   function setStyle() {
      if (props.numImg == props.id) {
         return ('profile__fotos-opacity active')
      }
      else {
         return ('profile__fotos-opacity')
      }
   }
   // props.numImg == props.id ? setSuppStyle('profile__fotos-opacity active') : setSuppStyle('profile__fotos-opacity')
   return (
      <div className="profile__fotos-block">
         <img className="profile__fotos-item" src={props.imgLink} alt="" />
         <div className={props.numImg == props.id ? 'profile__fotos-opacity active' : 'profile__fotos-opacity'}></div>
      </div>
   )
}
export default ProductSuppImg