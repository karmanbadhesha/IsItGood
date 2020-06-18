import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Box from "@material-ui/core/Box";
import Display from './Components/Display';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <Display />
        <Footer />
      </div>
    )
  }
}

export default App;
