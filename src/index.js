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
import ThemeContext from "./components/Context/ThemeContext"

function Main() {
  const [theme, setTheme] = useState('defaulte')
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <App />
        </ThemeContext.Provider>
      </BrowserRouter>
    </React.StrictMode >
  )
}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


