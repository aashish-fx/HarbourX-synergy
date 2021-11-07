import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BillForm from "./Components/BillForm/BillForm";
import { UsersProvider } from "./usersContext";
import { MainProvider } from "./mainContext";
import { SocketProvider } from "./socketContext";
import Header from "./Components/LandingPage/Header";
import Main from "./Components/LandingPage/Main";
import {ChakraProvider} from '@chakra-ui/react';
import Chat from './Components/Chat/Chat';
function App() {
  return (

    <ChakraProvider>
    <MainProvider>
      <UsersProvider>
        <SocketProvider>
          <Router>
            <Header/>
            <Chat/>
            <Routes>
            <Route exact path="/chat" exact element={<Chat/>}/>
            <Route exact path="/chat" exact element={<Chat/>}/>
           </Routes>
          </Router>
        </SocketProvider>
      </UsersProvider>
    </MainProvider>
    </ChakraProvider>
   
  );
}

export default App;
