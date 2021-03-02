import './App.css';
import React from 'react';
import Lang from './components/Lang.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score1: 0,  
      score2: 0, 
      score3: 0,  
      score4: 0
  }
}
  render() {   
    return (
      <>
        <Lang score={this.state} />
      </>
    )
  }
}


export default App;
