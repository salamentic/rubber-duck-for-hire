import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import "./Chatrooms.css"
 


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
function ButtonSlide (props) {
    return (
        <div class="button">
            <p class="btnText">{props.text1}</p>
            <div class="btnTwo">
             <p class="btnText2">{props.text2}</p>
            </div>
        </div>
    );
}

function Chatrooms () {
      const classes = useStyles();
    return (
        <div className = "parent">
        <div className = "ButtonGroup">
        <ButtonSlide text1="Room 1" text2="GO !" />
        <ButtonSlide text1="Room 2" text2="GO !" />
        <ButtonSlide text1="Room 3" text2="GO !" />
        <ButtonSlide text1="Room 4" text2="GO !" />
        <ButtonSlide text1="Room 5" text2="GO !" />
        <ButtonSlide text1="Room 6" text2="GO !" />
        <ButtonSlide text1="Room 7" text2="GO !" />
        <ButtonSlide text1="Room 8" text2="GO !" />
        <ButtonSlide text1="Room 9" text2="GO !" />
        <ButtonSlide text1="Room 9" text2="GO !" />
        <ButtonSlide text1="Room 9" text2="GO !" />
        <ButtonSlide text1="Room 9" text2="GO !" />
        <ButtonSlide text1="Room 9" text2="GO !" />
        <ButtonSlide text1="Room 9" text2="GO !" />
        </div>
        </div>
    );
  }
 
export default Chatrooms;
