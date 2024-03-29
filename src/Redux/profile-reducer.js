const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initialState={
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 },
  ],
  newPostText: 'react'
}
const profileReducer= (state=initialState,action)=>{
  if(action.type === ADD_POST){

    let newPost={
      id: 5, message: state.newPostText, likesCount: 0
    }
    state.posts.push(newPost);
    state.newPostText='';

  } else if(action.type=== UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }
  return state;
}

export const addPostActionCreator=()=>({type: ADD_POST})


export const UpdateNewPostTextActionCreator=(text)=>{

  return {type:UPDATE_NEW_POST_TEXT, newText: text}
};
export default profileReducer;