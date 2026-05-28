import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoListApp from './TodoListApp.jsx'
import HomeApp from './HomeApp.jsx'
import './reset.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeApp />
  </StrictMode>,
)
