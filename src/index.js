import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { StateProvider } from './context/StateContext';
import { DataContextProvider } from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <DataContextProvider>
  <StateProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </StateProvider>
    </DataContextProvider>
  // </React.StrictMode>
);

