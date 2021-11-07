import React,{useState,useEffect, useContext} from 'react';
import styles from './Main.module.css';
import background from '../../assests/background.jpg'
import {useNavigate} from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';
import addFriends from '../../assests/addFriends.png'
import {UsersContext} from '../../usersContext';
import { MainContext } from '../../mainContext'
import { SocketContext } from '../../socketContext'
import {useToast} from '@chakra-ui/react';
import CreateRoomModal from '../CreateRoomModal/CreateRoomModal';

const Main = ()=> {
    const toast = useToast();
    
    const socket = useContext(SocketContext)
    const {name,setName,room,setRoom} = useContext(MainContext)
    const {setUsers} = useContext(UsersContext);
    const navigate = useNavigate();
    const [isAuth,setIsAuth] = useState(false);
    const [token,setToken] = useState(null);
    const [showLogin,setShowLogin] = useState(false);
    const [roomLink,setRoomLink] = useState('');
    const [showLink,setShowLink] = useState(false);
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token)
        { 
            setToken(token);
            setIsAuth(true);

        }
        else{
            return;
        }
        socket.on("users",users=>{
            setUsers(users)
        })
    },[])
     
   const  CreateGrpHandler = (event)=>{
        if(!isAuth)
        {
            setShowLogin(true)
           
        }
        else{
            setShowLink(true)
            
        }
    }
    const closeModalHandler = (event)=>{
        setShowLink(false);
        
    }
    const loginHandler = (event)=>{
        console.log("hello")
        setIsAuth(true);
        setShowLogin(false);
        window.location.reload();
    }
    const joinTeamHandler = (event)=>{
        setRoomLink(event.target.value);
        setRoom(event.target.value);
        console.log(event.target.value);
    }
    const handleClick = (event)=>{
        event.preventDefault();
        const userName = localStorage.getItem("userName")
        const room = roomLink
        setName(userName);
        console.log(userName);
        socket.emit('login',{userName,room},error=>{
            if(error){
                console.log(error)
                return toast({
                    positon:"top",
                    title:"Error",
                    description:error,
                    status:"error",
                    duration:5000,
                    isClosable:true,
                })
            }
            console.log(userName);
            navigate('/chat');
            return toast({
                position:"top",
                title:"Hey there",
                description:5000,
                isClosable:true
            })
        })
    }
    
        return (
        <div className={styles.container}>
        <div className={styles['main-section']}>
            <div className={styles['buttons-info']}>
                <div className={styles.summary}>
                    Now you can distribute your expenses with your friends and can help each other by paying your amount.
                </div>
                <div className={styles.buttons}>
                    <p>Create New Group</p>
                    <div className={styles.create}>
                        <button onClick={CreateGrpHandler}>+ Create Group</button>
                    </div>
                    <p className={styles.or}>
                        OR
                    </p>
                    <p>Join Existing Group</p>
                    <div className={styles.join}>

                        <form className={styles.form}>
                            <input placeholder='Enter Invitation Code'  value = {roomLink} onChange = {joinTeamHandler}/>
                            <button className={styles.join} onClick={handleClick}>Join Team</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.images}>
                {/* <img src={addFriends} alt='on landing page' /> */}
            </div>
        </div>
            {showLogin && <LoginModal loginHandler1 = {loginHandler}/>}
            {showLink &&<CreateRoomModal closeModal = {closeModalHandler}/>}
        </div>
        )
    
}

export default Main;