import React, { Component } from 'react';
import './App.css';
import * as locationdata from './LocationData.json'
import Locations from './Locations'

class App extends Component {
  state = {
    locations: [],
    sidebarShow: true,
    issue: true
  }

  // load locations array
  componentDidMount() {
    this.addContents();
  }

  // add Contents from data to locations array
  addContents = () => {
    let locations = [];
    locations.push(...locationdata)
    this.setState({ locations: locations });
  }

  //hide or show sidebar
  menuClick = () => {
    this.state.sidebarShow === true ? this.setState({sidebarShow: false}) : this.setState({ sidebarShow: true})
  }

    render() {
    return (
      <div className="app">
        <header role="banner">
            <nav className="menu" role="navigation" aria-label="Main" tabIndex="0" onClick={this.menuClick}>
                <span></span>
                <span></span>
                <span></span>
            </nav>
            <h1>My Favorite square in Nantes</h1>
        </header>
          <Locations locations={this.state.locations} menu={this.state.sidebarShow} issue={this.state.issue}/>     
        
      </div> 
    );
  }
}

export default App;