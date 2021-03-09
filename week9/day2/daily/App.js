import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import {increase} from './actions'
import {decrease} from './actions'

import {MovieList} from './components/MovieList'
import {MovieDetails} from './components/MovieDetails'

class App extends React.Component {
 /*    render(){
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
export default connect(mapStateToProps,mapDispatchToProps)(App);*/

render(){
  const {chose}=this.props
  return (
    <>
    <h1>movie List</h1>
  <MovieList />
  <h1>movie </h1>
  <MovieDetails item={chose} />
  </>
  )
}
}

const mapStateToProps = (state) => {
  return{
  chose:state.item
  }
}
const mapDispatchToProps = (dispatch) => {
return {
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
