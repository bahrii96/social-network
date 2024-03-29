import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
const App = props => {
   return (
      <div className="app-wrapper">
         <Header />
         <Navbar />
         <div className="app-wrapper-content">
            <Routes>
               <Route path="/dialogs" element={<DialogsContainer store={props.store} />} />
               <Route path="/profile" element={<Profile store={props.store} />} />

               {/* <Route path="/news" element={<News />} />
               <Route path="/music" element={<Music />} />
               <Route path="/settings" element={<Settings />} /> */}
            </Routes>
            {/* <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />  */}
            {/*<Route path="/profile" render={() => <Profile posts={props.posts} />} />*/}
            {/* <Route path="/news" component={News} />*/}
            {/* <Route path="/music" component={Music} />*/}
            {/* <Route path="/settings" component={Settings} />*/}
         </div>
      </div>
   );
};

export default App;
