import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: ""
  }
    onChange(e) { this.setState({text : e.target.value});}
    onSubmit(e) { e.preventDefault(); this.setState({text : ""});if(e!=null || e!=undefined || this.state.text!= "")this.props.onSendMessage(this.state.text);}
    render ()
    {
        return (
            <div className = "input">
            <form onSubmit = {e => this.onSubmit(e)}>
            <input onChange = {e => this.onChange(e)}
                   value = {this.state.text}
                   type="text"
                   placeholder = "Enter message"
                   autofocus = "True"
            />
            <button 
             disabled = {!this.state.text}
             > Send </button>
          </form>
          </div>
         );
    }
             
}

export default Input;
