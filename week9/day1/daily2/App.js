import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: {input:''},
    }
  }
  handleChange = (e) => {
    const value = e.target.type==='checkbox'? e.target.checked: e.target.value;
    this.setState({[e.target.name]:value})
}
  /*using get
  getdata = () => {
    fetch(`http://localhost:3001/getInput?input=${this.state.data}`)
      .then(res => res.json())
      .then(data => {
        this.setState({info:data});
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }*/
  getdata = () => {
    console.log(this.state.data);
    fetch(`http://localhost:3001/getInput`,{
      method: "POST",
      body: JSON.stringify(this.state.data) ,
      headers: {
        'Content-Type': 'application/json', // this needs to be defined
      },
      
    })
    
      .then(data => {
        this.setState({info:data});
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  

  render() {
    let all=''
    //if(this.state.info.input.length>0)
     {
      all=<p>this is what the server recieved {this.state.info.input}</p>
      }
     
    return (
      <>
      <h1>Hello from Express</h1>
      <h2>Post to Server:</h2>
      <input id='ini' type='text' onChange={this.handleChange} name='data'/><input type='submit' value='submit' onClick={this.getdata}/>
      {all}
      </>
    )
  }

}
export default App;
