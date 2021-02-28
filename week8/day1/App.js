import React from 'react';
import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  /*componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users‏')
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }*/
  render() {
    /* const robots = [
       {id:1, name:'Leanne Smart', email:'laeanne@fatry'},
       {id:2,  name:'joeanne Smart', email:'joanne@fatry'},
       {id:3,  name:'breanne Smt', email:'nne@fatry'},
       {id:4,  name:'nne Smt', email:'nnrfe@fatry'},
       {id:5,  name:'kimnne Smt', email:'nswefne@fatry'},
     ]*/
    return (

      <div class='tc'>
        <Carousel>
          <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
