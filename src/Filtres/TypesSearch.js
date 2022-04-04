//export const ALL_TYPES_SEARCH = [SEARCH_SALES, SEARCH_NO_SHOES, SEARCH_LUXERY, SEARCH_MODA]

export function BuildType(type) {
   if (type == 'news') {
      return SEARCH_NEWS
   }
   else if (type == 'noshoes') {
      return SEARCH_WEAR
   }
   else if (type == 'shoes') {
      return SEARCH_SHOES
   }
   else if (type == 'sale') {
      return SEARCH_SALES
   }
   else if (type == 'moda') {
      return SEARCH_MODA
   }
   else if (type == 'luxery') {
      return SEARCH_LUXERY
   }
   else if (type == 'all') {
      return SEARCH_ALL
   }
   else if (type == 't-shirt') {
      return SEARCH_TSHIRT
   }
   else if (type == 'bottom') {
      return SEARCH_BOTTOM
   }

}


export const SEARCH_NEWS = "news"
export const SEARCH_SALES = "sales"
export const SEARCH_WEAR = "no_shoes"
export const SEARCH_SHOES = "shoes"
export const SEARCH_LUXERY = "luxery_brand"
export const SEARCH_MODA = "moda"
export const SEARCH_ALL = "all"

export const SEARCH_TSHIRT = 't-shirt'
export const SEARCH_BOTTOM = 'bottom'

export const SEARCH_MARTINS = 'dr.martins'
export const SEARCH_TNF = 'the_north_face'
export const SEARCH_NIKE = 'nike'
export const SEARCH_CARHARTT = 'carhartt'
export const SEARCH_ELLESSE = 'ellesse'