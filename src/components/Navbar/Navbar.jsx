import React from 'react';
import s from './Navbar.module.css';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, NavLink} from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <Link to="/profile" activeclassname={s.activeLink}>
               Profile
            </Link>
         </div>
      <div className={`${s.item} ${s.active}`}>
            <Link to="/dialogs" activeclassname={s.activeLink}>
               Messages
            </Link>
         </div>
         <div className={s.item}>
            <Link to="/news" activeclassname={s.activeLink}>
               News
            </Link>
         </div>
         <div className={s.item}>
            <Link to="/music" activeclassname={s.activeLink}>
               Music
            </Link>
         </div>
         <div className={s.item}>
            <Link to="/settings" activeclassname={s.activeLink}>
               Settings
            </Link>
         </div>
      </nav>
   );
};

export default Navbar;
