import React from 'react'
import { createRoot } from 'react-dom/client'
import Modal from 'react-modal'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { store } from './store/configureStore'
const container = document.getElementById('root')
const root = createRoot(container)

// const customStyles = {
//     content: {},
// }

Modal.setAppElement('#root')

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
    </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
