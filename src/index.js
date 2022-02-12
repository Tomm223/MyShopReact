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
import PagesContext from "./components/Context/PagesContext"
import { AuthProvider } from './components/Context/AuthProvider'
function Main() {
  const pageY0 = () => document.documentElement.scrollTop = 0

  return (
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <PagesContext.Provider value={{ pageY0 }}>
            <App />
          </PagesContext.Provider>
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode >
  )
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


