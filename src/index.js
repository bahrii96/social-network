import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Router } from 'react-router-dom';
import store from './Redux/redux-store.js';
import { Provider } from 'react-redux';
let rerenderEntireTree = state => {
   ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
         <BrowserRouter basename="/social-network/">
            <Provider store={store}>
               <App
               //  state={state} dispatch={store.dispatch.bind(store)} store={store}
               />
            </Provider>
         </BrowserRouter>
      </React.StrictMode>,
   );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
   let state = store.getState();
   rerenderEntireTree(state);
});
