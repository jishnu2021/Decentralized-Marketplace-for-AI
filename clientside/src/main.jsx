import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WalletProvider } from './components/WalletContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </StrictMode>
);
