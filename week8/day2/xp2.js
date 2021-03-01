import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //exercise 1
  const Alert = (props) => {
    /*return (
      <div className="alert alert-danger" role="alert">
        {props.text}
      </div>
    )*/
    //exercise 2
    if(props.show === false){
      return null;
  }
  else{
    return (
      <div className="alert alert-danger" role="alert">
        {props.text}
      </div>
    )
  }
}
  const ColorClasses=(props) => {
    const colorClasses = {
      red: 'alert-danger',
      orange: 'alert-warning',
      green: 'alert-success'
    };
    if(colorClasses[props.color]===undefined){
      return (alert ("wrong color bro"))
    }
    return (
      
      <div className={`alert ${colorClasses[props.color]}`} role="alert">
      This is a primary alert-check it out!
      </div>
    )
}

  return (
    <>
      <Alert text="OMG! Something really bad has happended!" />

<Alert text="Are you sure?" show={true} />

<Alert text="Are you sure?" show={false} />
<ColorClasses color='yello' />
<ColorClasses color='green' />
    </>
  );
}

export default App;
