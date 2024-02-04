import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { StateProvider } from './context/StateContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <StateProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </StateProvider>
  // </React.StrictMode>
);

