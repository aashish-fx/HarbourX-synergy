import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';
const LoginModal = (props)=>{
    return (
     <React.Fragment>
         <Backdrop/>
        <Modal loginHandler = {props.loginHandler}/>
     </React.Fragment>
    );
}
export default LoginModal;