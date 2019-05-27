import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import "./Chatrooms.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
 


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ButtonSlide (props) {
    return (
        <div class="button" onClick={props.func}>
            <p class="btnText">{props.text1}</p>
            <div class="btnTwo">
             <p class="btnText2">{props.text2}</p>
            </div>
        </div>
    );
}

    const items = []
class Chatrooms extends React.Component {
    constructor(props, context) {
    super(props,context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        show : false,
        rooms : [false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false],
        roomid : -1,

    };
    }

    handleClose() {
        const temp = this.state.rooms.slice();
        temp[0] = false;
        this.setState({show : false, roomid : -1, rooms : temp});
    }

    handleShow(i) {
        const temp = this.state.rooms.slice();
        temp[i] = true;
        this.setState({show : true, rooms : temp, roomid : i+1});
    }


    makeModals() {
    items = [];
    for (const [index, value] in this.state.rooms) {
    items.push(
        <Modal show={this.state.rooms[index]} onHide={this.handleClose}>
          <Modal.Header>Chatroom # {index+1} </Modal.Header>
          <Modal.Body> I have messages in me </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>)
    }
    }

    render() { return (
        <div className = "parent">
        <div className = "ButtonGroup">
        <ButtonSlide text1="Room 1" text2="GO !" func = {() => this.handleShow(0)}/>
        <ButtonSlide text1="Room 2" text2="GO !" func = {() => this.handleShow(1)}/>
        <ButtonSlide text1="Room 3" text2="GO !" func = {() => this.handleShow(2)}/>
        <ButtonSlide text1="Room 4" text2="GO !" func = {() => this.handleShow(3)}/>
        <ButtonSlide text1="Room 5" text2="GO !" func = {() => this.handleShow(4)}/>
        <ButtonSlide text1="Room 6" text2="GO !" func = {() => this.handleShow(5)}/>
        <ButtonSlide text1="Room 7" text2="GO !" func = {() => this.handleShow(6)}/>
        <ButtonSlide text1="Room 8" text2="GO !" func = {() => this.handleShow(7)}/>
        <ButtonSlide text1="Room 9" text2="GO !" func = {() => this.handleShow(8)}/>
        <ButtonSlide text1="Room 10" text2="GO !" func = {() => this.handleShow(9)}/>
        <ButtonSlide text1="Room 11" text2="GO !" func = {() => this.handleShow(10)}/>
        <ButtonSlide text1="Room 12" text2="GO !" func = {() => this.handleShow(11)}/>
        <ButtonSlide text1="Room 13" text2="GO !" func = {() => this.handleShow(12)}/>
        <ButtonSlide text1="Room 14" text2="GO !" func = {() => this.handleShow(13)}/>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>Chatroom # {this.state.roomid} </Modal.Header>
          <Modal.Body> I have messages in me </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>)
        </div>
    );
    }
  }
 
export default Chatrooms;
