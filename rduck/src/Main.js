import React, { Component } from "react";
import {
  Route,
  NavLink,
  Link,
  HashRouter
} from "react-router-dom";
import './Main.css';
import Button from '@material-ui/core/Button';

import Chatrooms from "./Chatrooms";
import Home from "./Home";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div> 
        <Route path="/" exact component={Home}/>
        <Route path="/Chatrooms" component={Chatrooms}/>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;
