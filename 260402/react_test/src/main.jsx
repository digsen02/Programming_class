import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoListApp from './TodoListApp.jsx'
import './reset.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListApp />
  </StrictMode>,
)
