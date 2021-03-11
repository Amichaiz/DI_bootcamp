import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import {Route, Switch} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {    }
  }

 componentDidMount(){
 }

  render() {
    return (
      <>
<Navbar />
<Switch>
        <Route path='/' component={() => <Home /> } exact/>
        <Route path='/About' render={ () => <About />} />
        <Route path='/Contact' children={<Contact />} />
        </Switch>
      </>       
    )
  }
}
const mapStateToProps = (state) => {
  return {
   
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
