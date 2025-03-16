import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from '@routers/AppRouter'

//import redux
import { Provider } from 'react-redux'
import store from '@store/index'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store ={store}>
      <AppRouter />
    </Provider>
  </StrictMode>,
)
