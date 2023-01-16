import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import store, {sendMassageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const DialogsContainer = props => {

  let state=props.store.getState().dialogsPage;


   let onSentMessageClick=()=>{
     props.store.dispatch(sendMassageCreator())
   };
   let onNewMassageChange=(body)=>{
    props.store.dispatch(updateNewMessageBodyCreator(body));

   };
   return <Dialogs updateNewMessageBody={onNewMassageChange} sendMassage={onSentMessageClick} dialogsPage={state}/>

};
let mapStateToProps=()=>{
  return{
    dialogsPage:state.dialogsPage
  }
}
let mapDispatchToProps=()=>{
  return{}
}
const SuperDialogsContainer=connect()(Dialogs);
export default DialogsContainer;
