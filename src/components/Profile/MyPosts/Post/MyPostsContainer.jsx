import React from 'react';


import MyPosts from "../MyPosts";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";


const MyPostsContainer = props => {

  let state= props.store.getState()



  let addPost = function (){
    props.store.dispatch(addPostActionCreator());
  }


  let onPostChange=(text)=>{
    let action=UpdateNewPostTextActionCreator(text);
    props.store.dispatch(action)
  }
  return (
  <MyPosts UpdateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
  newPostText={state.profilePage.newPostText}/>
  );
};

export default MyPostsContainer;
