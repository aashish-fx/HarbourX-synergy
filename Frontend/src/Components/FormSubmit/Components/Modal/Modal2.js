import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalCart.module.css';

const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}>

    </div>
};

const ModalOverlay = props => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
    </div>
};

const modalPortalRefrence = document.getElementById('overlays');

<<<<<<< HEAD:Frontend/src/Components/FormSubmit/Components/Modal/Modal2.js
const Modal2 = props => {
=======
const ModalCart = props => {
>>>>>>> e68074b9cbb8cd909edc1ae73ffae0d04dc5468c:Frontend/src/Components/Modal/ModalCart.js
    return <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, modalPortalRefrence)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalPortalRefrence)}
    </React.Fragment>
}

<<<<<<< HEAD:Frontend/src/Components/FormSubmit/Components/Modal/Modal2.js
export default Modal2;
=======
export default ModalCart;
>>>>>>> e68074b9cbb8cd909edc1ae73ffae0d04dc5468c:Frontend/src/Components/Modal/ModalCart.js
