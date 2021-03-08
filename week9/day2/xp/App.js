import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import {increase} from './actions'
import {decrease} from './actions'

class App extends React.Component {
     render(){
      const {amount,handleup,handledown}=this.props
      return (
        <>   
           <button onClick={handleup}>+</button>
            <p>{amount}</p>
            <button onClick={handledown}>-</button>      
        </>
      ); 
  }
}
const mapStateToProps = (state) => {
 return {
   amount:state.amount,
 }
}
const mapDispatchToProps = (dispatch) => {

  return {
    handleup: (e) => dispatch(increase()),
    handledown: (e) => dispatch(decrease())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
