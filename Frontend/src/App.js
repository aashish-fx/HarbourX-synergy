import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BillForm from "./Components/BillForm/BillForm";

import Header from "./Components/LandingPage/Header";
import Main from "./Components/LandingPage/Main";

function App() {
  return (
    <Router>
      {/* {cartIsShown && <Cart onClose={cartHideHandler} />} */}
<<<<<<< HEAD:Frontend/src/App.js
      <Header />
      <Main/>
   
=======
      {/* <Header /> */}
      {/* <Main /> */}
      <BillForm />
      {/* <Routes> */}
>>>>>>> f63dc6cd9089bedededb0a7eb276117db12622b2:src/App.js
      {/* <Route path='/'>
          <Main />
        </Route>
        <Route path='home'>
          <Main />
        </Route> */}
      
    </Router>
  );
}

export default App;
