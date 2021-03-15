import styled from 'styled-components';
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <div className="app">
      <Router>
      {!user ? (
        <Login />
      ) : (
          <>
            <Header/>
            <AppBody>
              <SideBar/>
              <Switch>
                <Route path="/" exact>
                  <Chat/>
                </Route>
              </Switch>
            </AppBody>
          </>
      )}
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;