import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
 


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
function Chatrooms () {
      const classes = useStyles();
    return (
        <div className = {classes.root}>
        <List dense='true'>
        <ListItem button>
          <ListItemText primary="Room 1" />
        </ListItem>
      <Divider />
        <ListItem button>
          <ListItemText primary="Room 2" />
        </ListItem>
      <Divider />
        <ListItem button>
          <ListItemText primary="Room 4" />
        </ListItem>
      <Divider />
        <ListItem button>
          <ListItemText primary="Room 5" />
        </ListItem>
      </List>
      <Divider />
      <List dense = 'true' >
        <ListItem button>
          <ListItemText primary="Room 3" />
        </ListItem>
      </List>
      </div>
    );
  }
 
export default Chatrooms;
