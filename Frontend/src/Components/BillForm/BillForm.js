import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './BillForm.module.css';
import { useState } from 'react';

const expensesArray = [
    {
        key: 'rent',
        id: 'rent',
        name: 'Rental',
        category: 'Rental'
    },
    {
        key: 'food',
        id: 'food',
        name: 'food',
        category: 'food'
    },
    {
        key: 'travel',
        id: 'travel',
        name: 'travel',
        category: 'travel'
    },
    {
        key: 'groceries',
        id: 'groceries',
        name: 'groceries',
        category: 'groceries'
    },
    {
        key: 'gym',
        id: 'gym',
        name: 'gym-subscription',
        category: 'Rental'
    },
    {
        key: 'recharge',
        id: 'recharge',
        name: 'Internet-Bill',
        category: 'recharge'
    },
    {
        key: 'other',
        id: 'other',
        name: 'Other',
        category: 'other'
    }
]

const BillForm = props => {
    const history = useHistory();
    const [expenseCategory, setExpenseCategory] = useState();
    const [enteredName, setEnteredName] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');

    const expenses = expensesArray.map(expense => {
        return <option value={expense.id} key={expense.id}>{expense.name}</option>
    })

    const categoryChangeHandler = (event) => {
        setExpenseCategory(event.target.value);
    };

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();

        const formData = {
            category: event.target[0].value,
            paidFor: event.target[1].value,
            paidAmt: event.target[2].value
        };

        props.onSubmit(formData);
        setExpenseCategory('Rental')
        setEnteredName('');
        setEnteredPrice('');
    }
    const onClose = () => {
        history.replace('/')
    }

    return (
        <div className={styles.bill_form_container}>
            <div className={styles['bill-form']}>
                <form className={styles.form} onSubmit={formSubmitHandler}>
                    <div className={styles.selectbox}>
                        <label htmlFor='expense-category'>Select Category</label>
                        <select required name='expense-category' id='expense-category' onChange={categoryChangeHandler} value={expenseCategory}>
                            {expenses}
                        </select>
                    </div>
                    <div className={styles.expense}>
                        <div className={styles['expense-name']}>
                            <label htmlFor=''>Paid For</label>
                            <input type='text' name='' id='' required onChange={nameChangeHandler} value={enteredName} />
                        </div>

                        <div className={styles['expense-prize']}>
                            <label htmlFor=''>Paid Amount <span>(in Rupees)</span></label>
                            <input type='number' min='1' name='' id='' required onChange={priceChangeHandler} value={enteredPrice} />
                        </div>

                    </div>
                    <div className={styles.buttons}>
                        <button type='button' onClick={props.onClick} className={styles.cart}>Cart</button>
                        <button type='submit' className={styles.submit}>Submit</button>
                    </div>
                    <div className={styles.close} >
                        <button type='button' onClick={onClose}>Close Form</button>
                    </div>
                </form >
            </div >
        </div>
    )
}

export default BillForm;