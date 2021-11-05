import React from 'react'
import styles from './Header.module.css';
import image from '../../assests/logo.png';
import user3 from '../../assests/user3.jpg'

const Header = props => {
    return <div className={styles.header}>
        <div className={styles['logo-content']}>
            <div className={styles.logo}>
                <img src={image} alt='logo' />
            </div>
            <div className={styles['logo-name']}>
                <p><span>Expense</span>Tracker</p>
            </div>
        </div>
        <div className={styles['user-info']}>
            <div className={styles.user}>
                <img src={user3} alt='user' />
            </div>
        </div>
    </div>
}

export default Header;