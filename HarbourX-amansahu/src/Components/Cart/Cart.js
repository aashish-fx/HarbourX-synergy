import React from 'react';
import styles from './Cart.module.css';
import Modal from '../Modal/Modal';
import CartItem from './CartItem';


const Cart = props => {

    const Cartitems = props.Cartitems;
    const Items = <ul className={styles['cart-items']}>
        {Cartitems.map(item => { return <CartItem key={item.id} name={item.item} price={item.price} amount={item.amount} category={item.category} /> })}
    </ul>


    const totalAmount = Cartitems.reduce((prev, current) => {
        return prev + (current.price * current.amount);
    }, 0)


    return <Modal onClose={props.onClose}>
        {Cartitems.length === '0' && <p>Cart Is Empty</p>}
        {Items}
        <div className={styles.total}>
            <span>Total</span>
            <span>&#8377;{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
        </div>
    </Modal>
}

export default Cart;