import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {contentupdate,addNew,delme} from './redux/actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }
 
  render() {
  
    const {handleChange,handleSubmit,items,input,handleDel} = this.props;
    console.log("items",items,"input",input);
    return (
      <>
        <div>
          <input id='fme' type='text' onChange={handleChange} /><button onClick={()=>handleSubmit(document.getElementById('fme').value)}>ADD</button>
        </div>
        
     {items.map((item,e)=>{
       return(
         <>
         <p key={e} id={e}>{item}</p>
         <button onClick={()=>handleDel(document.getElementById({e}).value)}>DEL</button>
         </>
       )
     })}
        
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    input:state.input,
    items:state.items
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    handleChange: (event) => dispatch(contentupdate(event.target.value)),
    handleSubmit: (content) => dispatch(addNew(content)),
    handleDel: (event) => dispatch(delme(event)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
