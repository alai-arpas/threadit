import  React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './index.css'
import Myapp from './Myapp.js'

const rootElement = document.getElementById('app');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Myapp />
    </StrictMode>,
  );
} else {
  console.error('Root element not found');
}