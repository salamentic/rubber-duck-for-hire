import Messages from "./Messages.js"
import Input from "./Input.js"
import "./App.css"
import {Component} from "react";
import React from "react";
import openSocket from 'socket.io-client';
import axios from 'axios';

function randomName() {
  const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
  const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

    const socket = openSocket('http://localhost:8082');
class App extends Component
{
    state = {
        messages : [],
        member: {
            username: randomName(),
            color: randomColor()
        }
    }
   constructor(props) {
    super(props);
    socket.on('sent', (data) => {
        const messages = this.state.messages;
        messages.push({username: data.username, color : randomColor(), text:data.message });
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        this.setState({messages});
    });
         socket.emit('message');
    }

  onSendMessage = (message) => {
      console.log(this.props.roomid);
      axios.post('http://localhost:8082/' + (this.props.roomid-1),{username:this.state.member.username,message: message,});
      socket.emit('message');
    }

    scrollEnd()
    {
                if(this.messagesEnd)
        this.messagesEnd.scrollIntoView({ behavior: "smooth" })
    }

    componentDidUpdate() {
        this.scrollEnd();
    }

    
    render() {
        return (
            <div>
        <div className = "App">
            <Messages
                messages={this.state.messages}
                currentMember={this.state.member}/>
            <div style={{height:"1px", float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
        </div>
        <Input onSendMessage = {this.onSendMessage}/>
        </div>
        );
    }
}
export default App;
