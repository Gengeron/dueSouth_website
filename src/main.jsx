
import ReactDOM from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'

import App from './App.jsx'
import './App.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
