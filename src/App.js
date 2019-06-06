// create your App component here
import React, { Component } from 'react';


class App extends Component{
  constructor(){
    super();
    this.state = {
      fetchObj: {}
    }
  }
  componentDidMount = () => {
    return fetch('http://api.open-notify.org/astros.json')
      .then(r => r.json())
      .then( object => {
        this.setState({fetchObj: object})
      })
  }
  render(){
    return(
      <div>
        {this.componentDidMount()}
        App{this.state.fetchObj}
      </div>
    );
  }
}

export default App
