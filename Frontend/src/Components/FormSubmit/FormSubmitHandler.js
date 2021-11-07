import React, { useState } from "react";
import BillForm from "../BillForm/BillForm";
import Cart from "../Cart/Cart";

const Cartitems = [{ id: 'a', item: 'pizza', amount: '1', price: '400', category: 'Food' }, { id: 'b', item: 'Uber Cab', amount: '1', price: '200', category: 'Travel' }, { id: 'c', item: 'Monthly Internet bill', amount: '1', price: '300', category: 'Internet-Bill' }]

function FormSubmit() {

  const [cartIsShown, setCartShown] = useState(false);
  const [formIsShown, setFormIsShown] = useState(true);
  const [cartItemsState, setCartItemsState] = useState(Cartitems);

  const cartShownHandler = () => {
    setCartShown(true);
  }

  const cartHideHandler = () => {
    setCartShown(false);
  }

  const formShownHandler = () => {
    setFormIsShown(true);
  }

  const formHideHandler = () => {
    setFormIsShown(false);
  }

  const formDataHandler = data => {
    setCartItemsState(prev => {
      return [...prev, { id: Math.random() * 1000, item: data.paidFor, amount: '1', price: data.paidAmt }]
    })
  }

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClose={cartHideHandler} Cartitems={cartItemsState} />}
      
      {formIsShown && <BillForm onClick={cartShownHandler} onClose={formHideHandler} onSubmit={formDataHandler} />}
      
    </React.Fragment>
  );
}

export default FormSubmit;
