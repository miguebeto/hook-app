import React from 'react';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

//creamos la rutas que serán accesibles desde el menu mediante los link
export const AppRouter = () => {
  return (
      <Router>
          <div>
              <NavBar />
              <div className='container'>
              <Switch>
                  <Route exact path="/" component={ HomeScreen } />

                  <Route exact path="/about" component={ AboutScreen } />
                  <Route exact path="/login" component={ LoginScreen } />

                  {/* <Route component={ HomeScreen } /> */}
                  <Redirect to='/' />
              </Switch>
              </div>
          </div>
      </Router>
  )
};
