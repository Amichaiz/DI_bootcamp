import React from 'react';
import countries from './components/countries';

class Daily1 extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',  
            contriesleft: [],
        }
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ [e.target.name]: value })
        console.log(e.target.value);
        this.setState({contriesleft:countries.filter(word =>(word.charAt(0).toLowerCase()===e.target.value.charAt(0))&&(word.toLocaleLowerCase().includes(e.target.value)))})
        console.log(this.state.contriesleft);
    }
    fill = (e) => {
        document.getElementById('contry').value=e.target.innerHTML
        this.setState({contriesleft: [],title: ''})
    }
       
    render() {
        const {contriesleft}=this.state        
        return (
            <>
            <input id='contry' type='text' name='title' onChange={this.handleChange} placeholder='Contries' />
            {contriesleft.map(item=>{return(
            <div>
                <p onClick={this.fill}>{item}</p><br/>
            </div>)
        })}
        <h5>{contriesleft.length}</h5>
            </>
        )
    }
}

export default Daily1;  