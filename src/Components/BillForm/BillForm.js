import React from 'react';

import styles from './BillForm.module.css';

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

const expenses = expensesArray.map(expense => {
    return <option value={expense.id} key={expense.id}>{expense.name}</option>
})
const BillForm = props => {

    return <div className={styles['bill-form']}>
        <form className={styles.form}>
            <div className={styles.selectbox}>
                <label htmlFor='expense-category'>Select Category</label>
                <select required name='expense-category' id='expense-category'>
                    {expenses}
                </select>
            </div>
            <div className={styles.expense}>
                <div className={styles['expense-name']}>
                    <label htmlFor=''>Paid For</label>
                    <input type='text' name='' id='' required />
                </div>

                <div className={styles['expense-prize']}>
                    <label htmlFor=''>Paid Amount <span>(in Rupees)</span></label>
                    <input type='number' min='1' name='' id='' required />
                </div>

            </div>
            <div className={styles.buttons}>
                <button type='button' className={styles.cart}>Cart</button>
                <button type='submit' className={styles.submit}>Submit</button>
            </div>
            <div className={styles.close} >
                <button type='button' >Close Form</button>
            </div>
        </form >
    </div >
}

export default BillForm;