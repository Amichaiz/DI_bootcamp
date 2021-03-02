import React from 'react';
import Nav from './components/Nav'
import Content from './components/Content'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      age: '',
      gender: '',
      nuts: '',
      lac: '',
      vegan: '',
      destination:'',
    }
  }
  info = (e) => {
    let getid = e.target.id
    let data = e.target.value
    switch (getid) {
      case "fn":
        this.setState({ fname: data })
        break;
      case "ln":
        this.setState({ lname: data })
        break;
      case "age":
        this.setState({ age: data })
        break;
      case "m":
        this.setState({ gender: data })
        break;
      case "f":
        this.setState({ gender: data })
        break;
      case "nu":
        if(data===this.state.nuts){
        this.setState({ nuts: '' })
        }
        else this.setState({ nuts: data })
        break;
      case "la":
        if(data===this.state.lac){
          this.setState({ lac: '' })
          }
          else this.setState({ lac: data })
        break;
      case "ve":
        if(data===this.state.vegan){
          this.setState({ vegan: '' })
          }
          else this.setState({ vegan: data })
        break;
      default:
    }

  }

  render() {
    return (
      <>
        <Nav />
        <form style={{ backgroundColor: 'lightgoldenrodyellow' }} action="http://localhost:3000/login" method="GET" target="_blank"><br></br><br></br>
          <div><input id='fn' name="fname" type="text" placeholder="First Name" onChange={this.info}></input></div><br></br>
          <div><input id='ln' name="lname" type="text" placeholder="Last Name" onChange={this.info}></input></div><br></br>
          <div><input id='age' name="age" type="text" placeholder="Age" onChange={this.info}></input></div><br></br>

          <div><br></br>
            <input id='m' type="radio" name='gen' value='Male' onChange={this.info} />Male
      <input id='f' type="radio" name='gen' value='Female' onChange={this.info} />Female
      </div>
          <div><br></br>
            <h4>Dietary restrictions:</h4><br></br>
            <input id='nu' name="nuts" type="checkbox" value='Nuts free' onChange={this.info} />Nuts free
      <input id='la' name="lac" type="checkbox" value='Lactose free' onChange={this.info} />Lactose free
      <input id='ve' name="vegan" type="checkbox" value='Vegan' onChange={this.info} />Vegan
      </div>
          <br></br>
          <button type='submit' onClick={this.info}>Submit</button>
        </form>
        <Content info={this.state} />
      </>
    )
  }
}

export default App;
