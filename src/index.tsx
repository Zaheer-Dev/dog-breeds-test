import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from "react-redux";
import {store} from './reduxToolkit/store'
import { theme } from './theme/MuiCustomTheme';
import { ThemeProvider } from '@mui/material';
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
     <Provider store={store}>
      <App />
    </Provider>
       </ThemeProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
