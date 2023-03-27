import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SimpleContainer from "./components/Container/Container"
// COMPONENTS
import Header from "./components/Header/Header";

class App extends Component {
  render(){
    return(
      <div className="App">
        <NavBar/>
        <Header/>

      </div>
    )
  }
}
export default App;