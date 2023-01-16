import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Router} from "react-router-dom";
import store from './Redux/redux-store.js'
import {Provider} from "react-redux";
let rerenderEntireTree=(state)=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter basename="/social-network/">
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
      </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );

}
rerenderEntireTree(store.getState());

store.subscribe(()=>{
  let state= store.getState()
  rerenderEntireTree(state);
});


