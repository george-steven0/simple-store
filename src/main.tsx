import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'
import { store } from './Components/Redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './Components/Redux/store.ts'
import axios from 'axios'
import { HelmetProvider } from 'react-helmet-async';

axios.defaults.baseURL = 'https://fakestoreapi.com'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        limit={5}
      />
      <HelmetProvider>
        <Router>
          <PersistGate persistor={persistor} loading={null}>
              <App />
          </PersistGate>
        </Router>
      </HelmetProvider>
    </Provider>
  </StrictMode>,
)
