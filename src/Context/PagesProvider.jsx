import React, { useCallback } from "react";
import { useState } from "react";
export const PagesContext = React.createContext()

function PagesProvider({ children }) {
   const pageY0 = () => document.documentElement.scrollTop = 0
   const [tabs, setTabs] = useState(null)
   const [brand, setBrand] = useState([])
   const [category, setCategory] = useState([])
   const [material, setMaterial] = useState([])
   const [color, setColor] = useState([])
   const [season, setSeason] = useState([])
   const [basic, setBasic] = useState([])
   const massFilters = [brand, category, material, season, basic]
   const setMassFilters = [setBrand, setCategory, setMaterial, setSeason, setBasic]
   const [finishFilter, setFinishFilter] = useState([])
   const DELETEFiltresState = (products) => {
      console.log('true');
      setMassFilters.map((item) => {
         item(null)
      })
   }
   function searchForFilter(products) {
      setFinishFilter(prev => [])
      for (var i = 0; i < 6; i++) {
         if (i == 1) {
            if (brand.length) {
               const massiv = []
               brand.map((item) => {
                  const massivSupp = products.filter((prod) => prod.brand == item)
                  massivSupp.map((item) => massiv.push(item))
               })
               setFinishFilter(massiv)
            }
         }
         else if (i == 2) {
            if (category.length) {
               if (brand.length) {
                  const massiv = []
                  category.map((item) => {
                     const massivSupp = finishFilter.filter((prod) => prod.filter_name == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
               else {
                  const massiv = []
                  category.map((item) => {
                     const massivSupp = products.filter((prod) => prod.filter_name == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
            }
         }
         else if (i == 3) {
            if (material.length) {
               if (brand.length || category.length) {
                  const massiv = []
                  material.map((item) => {
                     const massivSupp = finishFilter.filter((prod) => prod.material == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
               else {
                  const massiv = []
                  material.map((item) => {
                     const massivSupp = products.filter((prod) => prod.material == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
            }
         }
         else if (i == 4) {
            if (season.length) {
               if (brand.length || category.length || material.length) {
                  const massiv = []
                  season.map((item) => {
                     const massivSupp = finishFilter.filter((prod) => prod.season == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
               else {
                  const massiv = []
                  season.map((item) => {
                     const massivSupp = products.filter((prod) => prod.season == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
            }
         }
         else if (i == 5) {
            if (color.length) {
               if (brand.length || category.length || material.length || season.length) {
                  const massiv = []
                  color.map((item) => {
                     const massivSupp = finishFilter.filter((prod) => prod.color == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
               else {
                  const massiv = []
                  color.map((item) => {
                     const massivSupp = products.filter((prod) => prod.color == item)
                     massivSupp.map((item) => {
                        massiv.push(item)
                     }
                     )
                  })
                  setFinishFilter(massiv)
               }
            }
         }
         else if (i == 6) {
            if (basic.length) {
               if (brand.length || category.length || material.length || season.length || color.length) {
                  const massiv = []
                  basic.map((item) => {
                     if (item == 'sales') {
                        const massivSub = finishFilter.filter((prod) => prod.sales == true)
                        massivSub.map((item) => massiv.push(item))
                     }
                     else if (item == 'moda') {
                        const massivSub = finishFilter.filter((prod) => prod.moda == true)
                        massivSub.map((item) => massiv.push(item))

                     } else if (item == 'news') {
                        const massivSub = finishFilter.filter((prod) => prod.news == true)
                        massivSub.map((item) => massiv.push(item))

                     }
                  })
                  setFinishFilter(massiv)
               }
               else {
                  const massiv = []
                  basic.map((item) => {
                     if (item == 'sales') {
                        const massivSub = products.filter((prod) => prod.sales == true)
                        massivSub.map((item) => massiv.push(item))
                     }
                     else if (item == 'moda') {
                        const massivSub = products.filter((prod) => prod.moda == true)
                        massivSub.map((item) => massiv.push(item))

                     } else if (item == 'news') {
                        const massivSub = products.filter((prod) => prod.news == true)
                        massivSub.map((item) => massiv.push(item))

                     }
                  })
                  setFinishFilter(massiv)
               }
            }
         }
      }
   }
   const ProductBuild = async (product, size) => {
      const body = {}
      body.id = Math.random() * 1234443254534
      body.amount = 1
      body.size = size
      body.product_id = product.id
      return body
   }

   const [gallery, setGallery] = useState(JSON.parse(localStorage.getItem('GenderGallery')))
   function usGetGalleryGen(obj) {
      localStorage.setItem('GenderGallery', JSON.stringify(obj))
      setGallery(JSON.parse(localStorage.getItem('GenderGallery')))
   }
   return (
      <PagesContext.Provider value={{
         ProductBuild,
         massFilters,
         finishFilter, DELETEFiltresState, usGetGalleryGen, gallery, setGallery,
         brand, setBrand, color, setColor, category, setCategory, material, setMaterial, season,
         setSeason, basic, setBasic, searchForFilter, pageY0, tabs, setTabs
      }}>
         {children}
      </PagesContext.Provider>
   )
}

export default PagesProvider
