import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
const App = ({state:{profilePage,dialogsPage:{messages,dialogs}}}) => {
   return (
         <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
              <Routes>
              <Route path="/dialogs" element={<Dialogs  messages={messages} dialogs={dialogs}  />} />
              <Route path="/profile" element={<Profile posts={profilePage.posts}/>} />

              <Route path="/news" element={<News/>} />
              <Route path="/music" element={<Music/>} />
              <Route path="/settings" element={<Settings/>} />
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
