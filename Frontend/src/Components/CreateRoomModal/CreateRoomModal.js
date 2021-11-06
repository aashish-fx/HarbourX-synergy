import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Modal1 from '../Modal/Modal1';
const CreateRoomModal = (props)=>{
    return (
     <React.Fragment>
         <Backdrop/>
        <Modal1 closeModal = {props.closeModal}/>
     </React.Fragment>
    );
}
export default CreateRoomModal;