import React, { Component } from "react";
import {
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import './Main.css';

import Chatrooms from "./Chatrooms";
import Home from "./Home";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <Route render={({location}) => (
        <TransitionGroup>
        <CSSTransition 
          key={location.key}
          timeout = {450}
          classNames = "fade">
        <Switch> 
        <Route path="/" exact component={Home}/>
        <Route path="/Chatrooms" component={Chatrooms}/>
        </ Switch>
        </ CSSTransition>
        </TransitionGroup>
        )} />
        </HashRouter>
    );
  }
}
 
export default Main;
