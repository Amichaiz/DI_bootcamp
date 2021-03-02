import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      toggle:true
    }
  }
  shot =()=>{
    alert('Great Shot!')
  }
  shot2 =(e)=>{
    alert(e)
  }
  shot4 =(e)=>{
    alert(e)
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      alert (e.target.value)
    }
  }
  
  render(){
    const click =() => alert('I feel violated')
    const toggle =()=>{
      if(this.state.toggle===true){
        document.getElementById('toggle').innerHTML='off'
        this.setState({toggle:false})
      }
      else{
        document.getElementById('toggle').innerHTML='on'
        this.setState({toggle:true})
      }

    }
  return (
    <>
      <button onClick={this.shot}>Take the shot!</button>
      <button onClick={this.shot}>Shoot Again</button>
      <button onClick={()=>this.shot2()}>Keep Shooting!</button>
      <button onClick={()=>this.shot4('goal')}>Keep Shooting!</button>
      <button onClick={()=>click()}>click me</button>
      <input type='text'onKeyPress={this.handleKeyPress} />

      <button id='toggle' onClick={()=>toggle()}>on</button>
      <div></div>
    </>
  )
  }
}

export default App;
