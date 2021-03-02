import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      color:'red'
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({color:'yellow'})
    }, 5000);
  }
  shouldComponentUpdate(){
    //we were told not to do
  }
  blue =()=>{
    this.setState({color:'Blue'})
  }
  render(){
    const {color} = this.state
  return (
    <>
      <header>my favorite color is {color}</header>
      <button onClick={this.blue}>change</button>
    </>
  )
  }
}

export default App;
