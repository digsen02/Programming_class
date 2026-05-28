import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoListApp from './TodoListApp.jsx'
import HomeApp from './HomeApp.jsx'
import './reset.css'
import RouterApp from './RouterApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
