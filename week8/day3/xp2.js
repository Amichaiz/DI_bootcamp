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
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        // If we have a snapshot value, we've just added new items.
       // Adjust scroll so these new items don't push the old ones out of view.
       // (snapshot here is the value returned from getSnapshotBeforeUpdate)
       if (snapshot !== null) {
          const list = this.listRef.current;
           list.scrollTop = list.scrollHeight - snapshot;
           console.log(snapshot);
        }
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
      <div></div>
    </>
  )
  }
}

export default App;
