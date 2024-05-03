import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.tsx'

const rootElement = document.getElementById('root')

if (rootElement == null) {
  throw new Error('Could not find root element')
}

createRoot(rootElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
