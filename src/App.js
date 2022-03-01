import React, { useState, useContext, useEffect, useMemo, useCallback } from "react"
import { Routes, Route } from "react-router-dom"
//pages
import Layout from "./components/Layout"
import Account from "./components/Account/Account"
import Registration from "./components/Registration/Registration"
import FormGet from "./components/Registration/FormGet"
import FormPost from "./components/Registration/FormPost"
//cataloge
import Cataloge from "./components/Cataloge/Cataloge"

import Gender from "./components/Gender/Gender"
import Product from "./components/Products/Product"
import Welcome from "./components/Welcome"
//context
import { PagesContext } from "./components/Context/PagesProvider"
import ProductsContext from "./components/Context/ProductsContext"
//acc
import AccountProvider from "./components/Context/AccountProvider"
import AccountBasket from "./components/Account/AccountBasket"
import AccountInfo from "./components/Account/AccountInfo"
import AccountLikes from "./components/Account/AccountLikes"
import AccountZakaz from "./components/Account//AccountZakaz"
import AccountZakazMore from "./components/Account//AccountZakazMore"
//hoc
import { ReqAuthAcc, ReqAuthReg } from "./hoc/ReqAuth"


function App() {
  //gender gallery
  const { usGetGalleryGen } = useContext(PagesContext)
  useEffect(() => {
    if (!localStorage.getItem('GenderGallery')) {

      fetch("http://localhost:3000/GalleryProduct")
        .then(data => data.json())
        .then(data => usGetGalleryGen(data))
    }

  }, [])


  //products
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")))
  console.log(products);
  const [compliteLStorage, setCompliteLStorage] = useState('')

  const giveLocalProduct = () => {
    setProducts(JSON.parse(localStorage.getItem('products')))
  }

  useEffect(() => {
    if (products == null || products == false) {
      fetch("http://localhost:3000/products")
        .then(data => data.json())
        .then(data => localStorage.setItem('products', JSON.stringify(data)))
        .then(setProducts(prev => "null"))
        .then(giveLocalProduct)
    }

  }, [])
  return (
    <div className={`App`}>
      <ProductsContext.Provider value={{ products }}>
        <AccountProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Welcome />} />
              <Route path="product" element={<Product />} />
              <Route path="men/" element={<Gender />} />
              <Route path="women/" element={<Gender />} />
              <Route path="cataloge/" element={<Cataloge />} />
            </Route>
          </Routes>
          <Routes>
            <Route path="/account/" element={
              <ReqAuthAcc>
                <Account />
              </ReqAuthAcc>
            } >
              <Route path="info" element={<AccountInfo />} />
              <Route path="basket" element={<AccountBasket />} />
              <Route path="likes" element={<AccountLikes />} />
              <Route path="zakaz" element={<AccountZakaz />} />
              <Route path="zakaz/more" element={<AccountZakazMore />} />
            </Route>
          </Routes>
          <Routes>
            <Route path="/registration/" element={
              <ReqAuthReg>
                <Registration />
              </ReqAuthReg>
            } >
              <Route path="post" element={<FormPost />} />
              <Route path="get" element={<FormGet />} />
            </Route>
          </Routes>
        </AccountProvider>
      </ProductsContext.Provider>


    </div>
  );
}

export default App;