import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = props => {

  let postsElements = props.posts.map(p =>
    <Post message={p.message} likesCount={p.likesCount} id={p.id}/>
  );
  let newPostElement=React.createRef();

  let onAddPost = function (){
    props.addPost();

  }
  let onPostChange=()=>{
    let text = newPostElement.current.value;
    props.UpdateNewPostText(text);

  }



   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
            </div>
            <div>
               <button onClick={onAddPost}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>{postsElements}</div>
      </div>
   );
};

export default MyPosts;
