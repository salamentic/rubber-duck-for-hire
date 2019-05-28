import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import "./Chatrooms.css"
import App from "./App.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';
 


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
        roomid : -1,
        rooms : null,

    };
    }

    handleClose() {
        this.setState({show : false, roomid : -1});
    }

    async componentDidMount() {
        const rooms = (await axios.get('http://localhost:8082/')).data;
        this.setState( {
            rooms,
        });
    }

    handleShow(i) {
        this.setState({show : true, roomid : i+1});
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
        <div>
        <div className = "parent">
        <div className = "ButtonGroup">
        {this.state.rooms === null && <div class = "button"> Loading rooms... </div>}
        {
            this.state.rooms && this.state.rooms.map(room => (
            <ButtonSlide text1= {room.name} text2="GO !" func = {() => this.handleShow(room.id)}/>
            ))
        }
        </div>
        </div>
        <Modal  dialogClassName="modal-90w" size = "lg" scrollable show={this.state.show} onHide={this.handleClose}>
          <Modal.Header >Chatroom # {this.state.roomid} </Modal.Header>
          <Modal.Body scrollable>
          <App roomid= {this.state.roomid} />
          </Modal.Body>
        </Modal>)
        </div>
    );
    }
  }
 
export default Chatrooms;
