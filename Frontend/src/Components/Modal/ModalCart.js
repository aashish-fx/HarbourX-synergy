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

const ModalCart = props => {
    return <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, modalPortalRefrence)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalPortalRefrence)}
    </React.Fragment>
}

export default ModalCart;
