import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter } from 'react-router-dom'
import "./styles/allhtml.scss"
import "./styles/cataloge.scss"
import "./styles/footer.scss"
import "./styles/gender.scss"
import "./styles/header.scss"
import "./styles/index.scss"
import "./styles/item.scss"
import "./styles/kabinet.scss"
import "./styles/registration.scss"
import "./styles/reset.css"
import "./styles/vars.scss"
import PagesProvider from "./Context/PagesProvider"
import { AuthProvider } from './Context/AuthProvider'
function Main() {


  return (
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <PagesProvider>
            <App />
          </PagesProvider>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode >
  )
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


