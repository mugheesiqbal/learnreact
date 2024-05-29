import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Todos from './Components/Todos.jsx'
import AddTodo from './Components/AddTodo.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <AddTodo/>
    <Todos/>
   
  </Provider>,
)
