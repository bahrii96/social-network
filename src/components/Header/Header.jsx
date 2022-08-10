import React from 'react';
import s from './Header.module.css';
import reactLogo from './../../images/vadim.jpg';

const Header = () => {
   return (
      <header className={s.header}>
         <img src={reactLogo} />
      </header>
   );
};

export default Header;
