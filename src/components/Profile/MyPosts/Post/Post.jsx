import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/37810235_2126258640956656_916298360267210752_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=yR3s53Gt3MEAX-U87rU&_nc_ht=scontent-lga3-2.xx&oh=00_AT8Oqakv0cPtY5CkxZZLE28MNCedoTaZMDRQGrxSZeOwWw&oe=63181EBC' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;