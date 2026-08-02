import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './Context/AuthProvider.jsx'
import AppRouter from './AppRouter/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <AppRouter></AppRouter>
  </AuthProvider>
  </StrictMode>,
);
