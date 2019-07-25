import React from 'react';
import Welcome from "./Welcome";

function App() {
  return React.createElement("div", {
    className: "App"
  }, React.createElement("header", {
    className: "App-header"
  }, React.createElement(Welcome, {
    name: "YNAP"
  })));
}

export default App;