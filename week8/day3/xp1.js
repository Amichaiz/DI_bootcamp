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
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(this.props, this.state);
    return false;  
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
