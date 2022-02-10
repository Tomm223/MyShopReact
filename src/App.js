import React, { useState, useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Account from "./components/Account/Account"
import Registration from "./components/Registration"
import Cataloge from "./components/Cataloge"
import Gender from "./components/Gender"
import Product from "./components/Products/Product"
import Welcome from "./components/Welcome"

import ThemeContext from "./components/Context/ThemeContext"
import ProductsContext from "./components/Context/ProductsContext"

import AccountBasket from "./components/Account/AccountBasket"
import AccountInfo from "./components/Account/AccountInfo"
import AccountLikes from "./components/Account/AccountLikes"
import AccountZakaz from "./components/Account//AccountZakaz"
import AccountZakazMore from "./components/Account//AccountZakazMore"


function App() {
  //theme
  const { theme } = useContext(ThemeContext)
  console.log(theme);
  //products
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(data => data.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className={`App ${theme}`}>
      <ProductsContext.Provider value={{ products }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="product" element={<Product />} />
            <Route path="men/" element={<Gender />} />
            <Route path="women/" element={<Gender />} />
            <Route path="cataloge" element={<Cataloge />} />
            <Route path="gender" element={<Gender />} />
          </Route>
        </Routes>
      </ProductsContext.Provider>


      <Routes>
        <Route path="/account/" element={<Account />} >
          <Route path="info" element={<AccountInfo />} />
          <Route path="basket" element={<AccountBasket />} />
          <Route path="likes" element={<AccountLikes />} />
          <Route path="zakaz" element={<AccountZakaz />} />
          <Route path="zakaz/more" element={<AccountZakazMore />} />
        </Route>
        <Route path="registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
