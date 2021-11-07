import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import FormSubmit from './Components/FormSubmit/FormSubmitHandler';
import BillForm from "./Components/BillForm/BillForm";
import { UsersProvider } from "./usersContext";
import { MainProvider } from "./mainContext";
import { SocketProvider } from "./socketContext";
import Header from "./Components/LandingPage/Header";
import Main from "./Components/LandingPage/Main";
import { ChakraProvider } from '@chakra-ui/react';
import Chat from './Components/Chat/Chat';
function App() {
  return (

    <ChakraProvider>
      <MainProvider>
        <UsersProvider>
          <SocketProvider>

            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/chat' component={Chat} />
              <Route exact path='/form' component={FormSubmit} />
            </Switch>
          </SocketProvider>
        </UsersProvider>
      </MainProvider>
    </ChakraProvider>

  );
}

export default App;
