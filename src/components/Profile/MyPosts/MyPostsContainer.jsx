import React from 'react';

import MyPosts from './MyPosts';
import { addPostActionCreator, UpdateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import { connect } from 'react-redux';

// const MyPostsContainer = props => {
//    let state = props.store.getState();

//    let addPost = function () {
//       props.store.dispatch(addPostActionCreator());
//    };

//    let onPostChange = text => {
//       let action = UpdateNewPostTextActionCreator(text);
//       props.store.dispatch(action);
//    };
//    return <MyPosts UpdateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />;
// };

let mapStateToProps = state => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
   };
};

let mapDispatchToProps = dispatch => {
   return {
      addPost: () => {
         dispatch(addPostActionCreator());
      },
      UpdateNewPostText: text => {
         let action = UpdateNewPostTextActionCreator(text);
         dispatch(action);
      },
   };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
