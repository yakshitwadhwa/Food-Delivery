import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Storecontextprovider from './context/Storecontext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Storecontextprovider>
  <App />
  </Storecontextprovider>
   
  </BrowserRouter>,
)
