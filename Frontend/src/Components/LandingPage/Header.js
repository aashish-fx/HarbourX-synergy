import React,{useRef} from 'react'
import './Header.css';
import image from '../../assests/logo.png';
import user3 from '../../assests/user3.jpg'

const Header = props => {
    const Proimage = localStorage.getItem("image");
    const isLogin = localStorage.getItem("isLogin");
    const userName = localStorage.getItem("userName");
    const showProfile = useRef();
    const dropDownHandler =  ()=>{
        showProfile.current.classList.toggle('active');
    }
    const onLogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("image");
        localStorage.removeItem("userName");
        localStorage.removeItem("email");
        localStorage.removeItem("isLogin");
        window.location.reload()
    }
    return <div className="header">
        <div className="logo-content">
            <div className="logo">
                <img src={image} alt='logo' />
            </div>
            <div className="logo-name">
                <p><span>Expense</span>Tracker</p>
            </div>
        </div>
        <div className='user-info'>
            {isLogin &&
                <div className="user">
                    <img src={Proimage} alt='user' onClick={dropDownHandler}/>
                    <div className="dropdown_menu1" ref={showProfile}>
                        <h3>{userName}</h3>
                        <ul>
                            <l1 onClick = {onLogout}>Logout</l1>
                        </ul>
                    </div>
                </div>
            }
        </div>
    </div>
}

export default Header;