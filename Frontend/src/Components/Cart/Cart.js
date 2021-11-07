import React,{useState} from 'react';
import styles from './Cart.module.css';
import Modal from '../Modal/ModalCart';
import CartItem from './CartItem';
import { CSVLink } from 'react-csv';


const Cart = props => {
    const [isSplitClicked, setIsSplitClicked] = useState(false);
    const Cartitems = props.Cartitems;
    const headers = [
        { label: 'Id', key: 'id' },
        { label: 'Name', key: 'item' },
        { label: 'Price', key: 'price' },
        { label: 'Amount', key: 'amount' },
        { label: 'Category', key: 'category' }
    ]

    const csvImport = {
        filename: 'Expense.csv',
        headers: headers,
        data: Cartitems
    };
    const Items = <ul className={styles['cart-items']}>
        {Cartitems.map(item => { return <CartItem key={item.id} name={item.item} price={item.price} amount={item.amount} category={item.category} /> })}
    </ul>


    const totalAmount = Cartitems.reduce((prev, current) => {
        return prev + (current.price * current.amount);
    }, 0)

    const splitButtonHandler = () => {
        setIsSplitClicked(!isSplitClicked);
    }

    const splitClasses = `${styles.splitSummary} ${isSplitClicked && styles.active}`;
    const splitAmt = totalAmount / 5;
    return <Modal onClose={props.onClose}>
        {Cartitems.length === '0' && <p>Cart Is Empty</p>}
        {Items}
        <div className={styles.total}>
            <span>Total</span>
            <span>&#8377;{totalAmount}</span>
            <div className={styles.split} >
                <button onClick={splitButtonHandler}>Split</button>
            </div>
        </div>
        <div className={splitClasses}>
            <p>We are group of 5 people.</p>
            <div>Each one have to pay <span>&#8377;{splitAmt}</span></div>
        </div>
        
        <div className={styles.actions}>
        <button className={styles['button--import']}><CSVLink className={styles.csv}  {...csvImport} >Download CSV File</CSVLink></button>
            <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
        </div>
    </Modal>
}

export default Cart;