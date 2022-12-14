import React from 'react';
import s from '.././Dialogs.module.css';
import {Link, NavLink} from 'react-router-dom';

const DialogItem = props => {
   let path = '/dialogs/' + props.id;
   return (

      <div className={s.dialog + ' ' + s.active} key={props.id}>
         <Link to={path} >{props.name}</Link>
      </div>
   );
};

export default DialogItem;
