import React, { useState } from 'react';
import styles from './Cart.module.css';
import { CSVLink } from 'react-csv';
import ModalCart from '../Modal/ModalCart';
import Modal from '../Modal/ModalCart';
import CartItem from './CartItem';


const Cart = props => {

    const [isSplitClicked, setIsSplitClicked] = useState(false);

    const splitButtonHandler = () => {
        setIsSplitClicked(!isSplitClicked);
    }

    const Cartitems = props.Cartitems;
    const Items = <ul className={styles['cart-items']}>
        {Cartitems.map(item => { return <CartItem key={item.id} name={item.item} price={item.price} amount={item.amount} category={item.category} /> })}
    </ul>

    const headers = [
        { label: 'Id', key: 'id' },
        { label: 'Name', key: 'item' },
        { label: 'Price', key: 'price' },
        { label: 'Amount', key: 'amount' },
        { label: 'Category', key: 'category' }
    ]

    const csvReport = {
        filename: 'Expenses.csv',
        headers: headers,
        data: Cartitems
    };


    const totalAmount = Cartitems.reduce((prev, current) => {
        return prev + (current.price * current.amount);
    }, 0)

    const split = totalAmount / 5;

    const splitClass = `${styles.splitSummary} ${isSplitClicked && styles.active}`

    return <ModalCart onClose={props.onClose}>
        {Cartitems.length === '0' && <p>Cart Is Empty</p>}
        {Items}
        <div className={styles.total}>
            <span>Total Expense</span>
            <span>&#8377;{totalAmount}</span>
            <div className={styles.split}>
                <button onClick={splitButtonHandler}>split</button>
            </div>
        </div>
        <div className={splitClass}>
            <p>This Expense will be devided into 5 People.</p>
            <div>Each one have to pay <span>&#8377;{split}</span></div>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--export']}><CSVLink className={styles.csvlink} {...csvReport}><span className={styles.csv}>Download in CSV</span></CSVLink></button>
            <button className={styles['button--alt']} onClick={props.onClose}>Close</button>

        </div>
    </ModalCart>
}

export default Cart;