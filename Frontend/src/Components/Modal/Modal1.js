import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './Modal1.css';
//import GoogleImg from '../../assests/google-img.jpg';
//import { Link } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import uniqid from 'uniqid';
const Modal1 = (props)=>{
    //const [value,setValue] = useState('');
    const [copied,setCopied] = useState(false);
    const value = uniqid()
    
    return (
    ReactDOM.createPortal(
    <div className="modal">
        <header className="modal_header">
            <h1>Create your Room using Link</h1>
            <i class="fa fa-times" aria-hidden="true"onClick={props.closeModal} ></i>
        </header>
        <div className="modal_container">
            <input value={value} className="modal1_input"/>
            <CopyToClipboard text={value} >
            <i class="fa fa-clone" aria-hidden="true"></i>
            </CopyToClipboard>
        </div>
    </div>
    ,document.getElementById('modal1-root'))
    );
}
export default Modal1;