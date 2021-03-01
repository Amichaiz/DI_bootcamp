import React,{Component} from 'react';

class Lang extends Component {
    constructor() {
        super();
        this.state={}
    }
    render(){
        const{ score }= this.props
    function incremeant(e) {
        let num = e.target.id
        if (num === 'score1') {
            score.score1++
        }
        if (num === 'score2') {
            score.score2++
        }
        if (num === 'score3') {
            score.score3++
        }
        if (num === 'score4') {
            this.setState({ score4:score.score4++})
            console.log(score.score4);
        }
    }
    return (
        <div>
            <h1>Vote Your Language!</h1>
            <h2>{score.score1} Php <button id='score1' onClick={incremeant}>Vote Here</button></h2>
            <h2>{score.score2} Python <button id='score2' onClick={incremeant}>Vote Here</button></h2>
            <h2>{score.score3} JavaScript<button id='score3' onClick={incremeant}>Vote Here</button></h2>
            <h2>{score.score4} Java<button id='score4' onClick={incremeant}>Vote Here</button></h2>
        </div>
    )
    }
}
export default Lang