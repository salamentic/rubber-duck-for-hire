import React, { Component } from "react";
 
class Chatrooms extends Component {
  render() {
    return (
        <div>
          <button className = "room"> Start </button>
          <button className = "room"> Start </button>
          <button className = "room"> Start </button>
          <button className = "start"> Start </button>
          <button className = "start"> Start </button>
          <div className="content">
          <div class="chat-list">
          <button>room1</button>
          <button>room2</button>
          <button>room3</button>
          <button>room5</button>
          </div>
          </div>
        </div>
    );
  }
}
 
export default Chatrooms;
