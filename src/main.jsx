import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import GlobalStyle from  './assets/css/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
)
