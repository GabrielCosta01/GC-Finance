import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalStyle from "./styles/GlobalStyle.js"
import AccountProvider from './provider/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AccountProvider>
      <GlobalStyle/>
      <App />
    </AccountProvider>
  </React.StrictMode>,
)
