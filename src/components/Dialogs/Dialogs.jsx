import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import store, {sendMassageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";


const Dialogs = props => {

  let state=props.dialogsPage;


  let dialogsElements = state.dialogs.map(d => {
      return <DialogItem name={d.name} id={d.id}/>;
   });
   let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);
  let newMessageBody= state.newMessageBody;


   let onSentMessageClick=()=>{
     props.sendMassage();
   };


   let onNewMassageChange=(e)=>{
    let body=e.target.value;
    props.updateNewMessageBody(body);


   };
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>{dialogsElements}</div>
         <div className={s.messages}>
           <div>{messagesElements}</div>
           <div>
             <div>
               <textarea value={newMessageBody} placeholder="enter your massage" onChange={onNewMassageChange}></textarea>
             </div>
             <div><button onClick={onSentMessageClick}>send</button></div>
           </div>
         </div>
       </div>
   );
};

export default Dialogs;
