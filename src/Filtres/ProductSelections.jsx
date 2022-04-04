import { useContext } from "react"
import { useController } from "react-hook-form"
import { useSelector } from "react-redux"
import ProductsContext from "../Context/ProductsContext"
import { SEARCH_ALL, SEARCH_BOTTOM, SEARCH_CARHARTT, SEARCH_ELLESSE, SEARCH_LUXERY, SEARCH_MARTINS, SEARCH_MODA, SEARCH_NIKE, SEARCH_NO_SHOES, SEARCH_SALES, SEARCH_SHOES, SEARCH_TNF, SEARCH_TSHIRT, SEARCH_WEAR } from "./TypesSearch"


export function CheckFilterType(type) {
   if (type == SEARCH_SALES) {
      return Sales_Selector()
   }
   else if (type == SEARCH_LUXERY) {
      return Luxery_Brand_Selector()
   }
   else if (type == SEARCH_MODA) {
      return Moda_Selector()
   }
   else if (type == SEARCH_WEAR) {
      return WEAR_Selector()
   }
   else if (type == SEARCH_SHOES) {
      return ShoesSelector()
   }
   else if (type == SEARCH_ALL) {
      return AllSelector()
   }
   else if (type == SEARCH_MARTINS) {
      return Martins_Selector()
   }
   else if (type == SEARCH_TNF) {
      return TNF_Selector()
   }
   else if (type == SEARCH_NIKE) {
      return Nike_Selector()
   }
   else if (type == SEARCH_CARHARTT) {
      return NewLook_Selector()
   }
   else if (type == SEARCH_ELLESSE) {
      return Ellesse_Selector()
   }
   else if (type == SEARCH_BOTTOM) {
      return BOTTOM_Selector()
   }
   else if (type == SEARCH_TSHIRT) {
      return TSHIRT_Selector()
   }

}


const Luxery_Brand_Mass = ["Tommy Hilfiger", "Fred Perry", "Dr. Martens", "Ellesse"]

const products = JSON.parse(localStorage.getItem('products'))

export const Sales_Selector = () => products.filter((item) => item.sales == "true")
export const Luxery_Brand_Selector = () => products.filter((item) =>
   Luxery_Brand_Mass.find((brand) => brand == item.brand)
)
export const Moda_Selector = () => products.filter((item) => item.moda == "true")
export const WEAR_Selector = () => products.filter((item) => item.filter_name.toLowerCase() != "обувь")
export const AllSelector = () => products.filter((item) => item)
export const ShoesSelector = () => products.filter((item) => item.filter_name.toLowerCase() == "обувь")

// Gallery Gender
export const TSHIRT_Selector = () => products.filter((item) => item.filter_name.toLowerCase() == "футболка")
export const BOTTOM_Selector = () => products.filter((item) => item.filter_name.toLowerCase() == "штаны")

//component MODA
export const Martins_Selector = () => products.filter((item) => item.brand.toLowerCase() == "dr. martens")
export const Ellesse_Selector = () => products.filter((item) => item.brand.toLowerCase() == "ellesse")
export const TNF_Selector = () => products.filter((item) => item.brand.toLowerCase() == 'the north face')
export const Nike_Selector = () => products.filter((item) => item.brand.toLowerCase() == 'nike')
export const NewLook_Selector = () => products.filter((item) => item.brand.toLowerCase() == 'new look')


// filters cataloge

export const FilterCataloge_filterName = (type) => type ? products.filter((item) => item.filter_name == type) : []
export const FilterCataloge_Brand = (type) => type ? products.filter((item) => item.brand == type) : []
export const FilterCataloge_Material = (type) => type ? products.filter((item) => item.material == type) : []
export const FilterCataloge_Season = (type) => type ? products.filter((item) => item.season == type) : []
export const FilterCataloge_Color = (type) => type ? products.filter((item) => item.color == type) : []
export const FilterCataloge_Sales = (bool) => bool ? products.filter((item) => item.sales == bool) : []
export const FilterCataloge_News = (bool) => bool ? products.filter((item) => item.news == bool) : []
export const FilterCataloge_Moda = (bool) => bool ? products.filter((item) => item.moda == bool) : []
export const mass = [...FilterCataloge_filterName(), ...FilterCataloge_Brand(), ...FilterCataloge_Material(),
...FilterCataloge_Season(), ...FilterCataloge_Color(), ...FilterCataloge_Color(), ...FilterCataloge_Sales(),
...FilterCataloge_News(), ...FilterCataloge_Moda()]

