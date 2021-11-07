import styles from './CartItem.module.css';

const CartItem = (props) => {
    // const price = `&#8377;${props.price.toFixed(2)}`;

    return (
        <li className={styles['cart-item']}>
            <div>
                <h3 className={styles.name}>{props.name}</h3>
                <div className={styles.summary}>
                    <span className={styles.price}>&#8377;{props.price}</span>
                    <span className={styles.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={styles.category}>
                <h3>category</h3>
                <span>{props.category}</span>
            </div>
        </li>
    );
};

export default CartItem;
