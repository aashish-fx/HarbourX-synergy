import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from "./Components/LandingPage/Header";
import Main from "./Components/LandingPage/Main";

function App() {
  return (
    <Router>
      {/* {cartIsShown && <Cart onClose={cartHideHandler} />} */}
      <Header />
      <Main />
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
