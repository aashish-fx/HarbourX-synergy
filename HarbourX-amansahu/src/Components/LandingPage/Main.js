import React from 'react';
import styles from './Main.module.css';
import background from '../../assests/background.jpg'

import addFriends from '../../assests/addFriends.png'

const Main = props => {
    return <div className={styles.container}>

        <div className={styles['main-section']}>
            <div className={styles['buttons-info']}>
                <div className={styles.summary}>
                    Now you can distribute your expenses with your friends and can help each other by paying your amount.
                </div>
                <div className={styles.buttons}>
                    <p>Create New Group</p>
                    <div className={styles.create}>
                        <button>+ Create Group</button>
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
    </div>
}

export default Main;