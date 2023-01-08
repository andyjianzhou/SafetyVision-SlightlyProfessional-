import React, { Component } from "react";
 
class Docs extends Component {
  render() {
    return (
      <div>
        <h2>Documentation:</h2>
        <p>How to use:</p>
        <ol>
          <li>Download the code from <a href="https://github.com/deepakggn/react-googlemaps/tree/development"> Github </a></li>
          <li>Install npm and NodeJS </li>
          <li>npm start</li>
          <li>open http://localhost:3000</li>
        </ol>
        <p>Features: </p>
        <ol>
          <li>Single page application implementation using ReactJS.</li>
          <li>Google maps integrated using Google maps cloud API. </li>
          <li>Maps are customized using snazzymaps: helps with changing the map styles/colors.</li>
          <li>Default map pointers are changed to pin icons.</li>
          <li>Map data is pulled from a centralized jso file.</li>
          <li>OnClick events: Info box is added to every map pointer for pointer description.</li>
          <li>Routing: React routing is used to navigate through different pages of the App.</li>
          <li>Export data: Event data can be using exported using Export to csv option. </li>
        </ol>
      </div>
    );
  }
}
 
export default Docs;