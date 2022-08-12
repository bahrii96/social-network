import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Router} from "react-router-dom";
import state from './Redux/state.js'


ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <BrowserRouter basename="/social-network/">
      <App state={state}/>
         </BrowserRouter>
   </React.StrictMode>,
);
