import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {plus,minus,plusodd,plussync} from './redux/actions'

class App extends React.Component {
  constructor() {
    super();
    this.state = {    }
  }
  render() {
    const {plus,minus,plusodd,plussync,poses}=this.props
    return (
      <>
      {poses}
       <button onClick={plus}>+</button>
       <button onClick={minus}>-</button>
       <button onClick={plusodd}>incifodd</button>
       <button onClick={plussync}>async</button>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    poses:state.amount
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    plus: () => dispatch(plus()),
    minus: () => dispatch(minus()),
    plusodd: () => dispatch(plusodd()),
    plussync: () => dispatch(plussync()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

