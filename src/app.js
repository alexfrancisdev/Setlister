import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './scss/style.scss'

import Header from './components/Header'
import Main from './components/Main'

class App extends React.Component {

  render() {
    return(
      <main>
        <Header />
        <Main />
      </main>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
