import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BillForm from "./Components/BillForm/BillForm";

import Header from "./Components/LandingPage/Header";
import Main from "./Components/LandingPage/Main";
import Cart from "./Components/Cart/Cart";

const Cartitems = [{ id: 'a', item: 'pizza', amount: '1', price: '400', category: 'Food' }, { id: 'b', item: 'Uber Cab', amount: '1', price: '200', category: 'Travel' }, { id: 'c', item: 'Monthly Internet bill', amount: '1', price: '300', category: 'Internet-Bill' }]

function App() {

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
    <Router>
      {cartIsShown && <Cart onClose={cartHideHandler} Cartitems={cartItemsState} />}
      {/* <Header /> */}
      {/* <Main /> */}
      {formIsShown && <BillForm onClick={cartShownHandler} onClose={formHideHandler} onSubmit={formDataHandler} />}
      {/* <Routes> */}
      {/* <Route path='/'>
          <Main />
        </Route>
        <Route path='home'>
          <Main />
        </Route> */}
      {/* <Route path='/form'>
          <Form/>
        </Route> */}
      {/* </Routes> */}
    </Router>
  );
}

export default App;
