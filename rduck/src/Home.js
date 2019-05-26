import React, { Component } from "react";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

import './Home.css';
import Chatrooms from "./Chatrooms";
 
class Home extends Component {
  render() {
    return (
        <fragment>
        <p className = "startText"> Got some ideas to bounce? Join us. </p>
        <Button size = 'large' fullWidth = 'true' variant = 'contained' color = 'secondary' component={Link} to="/Chatrooms" >
        Rooms
        </Button>
        </fragment>
    );
  }
}
 
export default Home;
