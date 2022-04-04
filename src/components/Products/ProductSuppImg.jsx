import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productImgChange } from "../../Redux/actions/ProductActions";

function ProductSuppImg(props) {

   const dispatch = useDispatch()

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
      <div onClick={() => dispatch(productImgChange(props.id))} className="profile__fotos-block">
         <img className="profile__fotos-item" src={props.imgLink} alt="" />
         <div className={props.numImg == props.id ? 'profile__fotos-opacity active' : 'profile__fotos-opacity'}></div>
      </div>
   )
}
export default ProductSuppImg