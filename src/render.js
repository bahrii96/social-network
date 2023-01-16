import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Router} from "react-router-dom";
import state, {addNewPost, updateNewPostText} from './Redux/store.js'

export let rerenderEntireTree=()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter basename="/social-network/">
        <App state={state} addNewPost={addNewPost} updateNewPostText={updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>,
  );

}

