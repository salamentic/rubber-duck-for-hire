import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/Navbar";
import {
  Route,
  Switch,
  Link,
  Link as myLink,
  HashRouter
} from "react-router-dom";
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Chatrooms from "./Chatrooms";
import Home from "./Home";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
 
class Main extends Component {
  render() {
    return (
        <div>
        <HashRouter>
        <Navbar bg = "light">
        <Navbar.Brand>
        <Link to="/"> 
        <img
          src= "http://freevector.co/wp-content/uploads/2011/06/74698-rubber-ducky.png"
          width = "30"
          height = "30"
          className = "d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        </ Link>
        </Navbar.Brand>
        </Navbar>
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
        </div>
    );
  }
}
 
export default Main;
