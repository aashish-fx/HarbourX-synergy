import React,{useState,useEffect,Component} from 'react';
import styles from './Main.module.css';
import background from '../../assests/background.jpg'
import LoginModal from '../LoginModal/LoginModal';
import addFriends from '../../assests/addFriends.png'
//import uniqid from 'uniqid';
import CreateRoomModal from '../CreateRoomModal/CreateRoomModal';
class Main extends Component {
    state = {
        isAuth:false,
        token:null,
        showLogin:false,
        showLink:false
    }
    componentDidMount()
    {
        const token = localStorage.getItem("token");
        if(token)
        {
            this.setState({isAuth:true,token:token});

        }
        else{
            return;

        }
        /*fetch('http://localhost:8080/auth/googleauth/')
        .then(res=>{
            if(res.status!==200)
            {
                throw new Error("Error occured");
            }
            console.log(res);
            return res.json();
        })
        .then(resData=>{
            console.log(resData);
            if(resData!==undefined)
            {
               this.setState({showLogin:false,isAuth:true});
                localStorage.setItem("isLogin",true);
                localStorage.setItem("token", resData.token);
                localStorage.setItem("userId", resData.user._id);
                localStorage.setItem("userName", resData.user.name); 
                localStorage.setItem("date",resData.user.date);
                localStorage.setItem("image",resData.user.image);
                localStorage.removeItem("logout");
            }
        })
        .catch(err=>{
            console.log(err);
        })
*/
    }
        
    CreateGrpHandler = (event)=>{
        if(!this.state.isAuth)
        {
            this.setState({showLogin:true})
        }
        else{
            this.setState({showLink:true})
        }
    }
    closeModalHandler = (event)=>{
        this.setState({showLink:false})
    }
    loginHandler = (event)=>{
        console.log("hello")
        this.setState({isAuth:true});
        window.location.reload();
    }
    render(){
        return <div className={styles.container}>

        <div className={styles['main-section']}>
            <div className={styles['buttons-info']}>
                <div className={styles.summary}>
                    Now you can distribute your expenses with your friends and can help each other by paying your amount.
                </div>
                <div className={styles.buttons}>
                    <p>Create New Group</p>
                    <div className={styles.create}>
                        <button onClick={this.CreateGrpHandler}>+ Create Group</button>
                    </div>
                    <p className={styles.or}>
                        OR
                    </p>
                    <p>Join Existing Group</p>
                    <div className={styles.join}>

                        <form className={styles.form}>
                            <input placeholder='Enter Invitation Code' />
                            <button className={styles.join}>Join Team</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.images}>
                {/* <img src={addFriends} alt='on landing page' /> */}
            </div>
        </div>
            {this.state.showLogin && <LoginModal loginHandler1 = {this.loginHandler}/>}
            {this.state.showLink &&<CreateRoomModal closeModal = {this.closeModalHandler}/>}
        </div>
    }
    
}

export default Main;