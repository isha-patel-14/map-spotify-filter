import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sidebar from './components/Sidebar.jsx'
import MainBody from './components/MainBody.jsx'
import Controls from './components/Controls.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sidebar/>
    <MainBody/>
    <Controls/>
  </StrictMode>,
)
