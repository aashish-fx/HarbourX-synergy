import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import {GoogleLogin} from 'react-google-login';
//import { Link } from 'react-router-dom';
const Modal = (props)=>{
    const handleGoogleLogin =async (googleData,event)=>{
         fetch('http://localhost:8080/auth/googleauth',{
             method:"POST",
             body:JSON.stringify({
                 token:googleData.tokenId
             }),
             headers:{
                 "Content-Type":"application/json"
             }
         })
         .then(res=>{
             if(res.status===422)
             {
                 throw new Error("Error Occured")
             }
             return res.json()
         })
         .then(resData=>{
             console.log(resData);
             localStorage.setItem("isLogin",true);
                localStorage.setItem("token", resData.token);
                localStorage.setItem("userId", resData.userId);
                localStorage.setItem("userName", resData.userName); 
                localStorage.setItem("image",resData.image);
                localStorage.removeItem("logout");
                props.loginHandler();    
         })
         .catch(err=>{
             console.log(err)
         })
    }
    return (
    ReactDOM.createPortal(
    <div className="modal">
        <header className="modal_header">
            <h1>Login to continue</h1>
        </header>
        <div className="modal_container">
        <GoogleLogin
             className="google_login"
             clientId="881992624037-5sok9qlba3un1el7itc5nm984k4835iq.apps.googleusercontent.com"
             buttonText="Login with Google"
             onSuccess={handleGoogleLogin}
             onFailure={handleGoogleLogin}
             cookiePolicy={'single_host_origin'}
        />
        </div>
    </div>
    ,document.getElementById('modal-root'))
    );
}
export default Modal;