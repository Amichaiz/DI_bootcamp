import React from 'react';

class Xp1 extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            genre: '',
            pub: '',
            sent: '',
            sent2: '',
        }
    }
    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [e.target.name]: value })
    }
    handleSubmit = (e) => {
        const { title, author, genre, pub } = this.state
        const obj = { title, author, genre, pub };
        console.log(obj);
        e.preventDefault();
        this.setState({ sent: true })
    }
    handleSubmit2 = (e) => {
        e.preventDefault();
        this.setState({ sent2: true })
    }

    clear = () => {
        this.setState({ sent2: '' })
    }
    render() {

        let sent = ''
        if (this.state.sent === true) {
            sent = (<h3>data sent!</h3>)
        }

        let but=''
        let data=''
        if (this.state.sent2 === true) {
             data = (this.state.title+this.state.author+this.state.genre+this.state.pub)
             but=<button onClick={this.clear}>clear</button>
             
        }
        else {
            but=''
            data=(
            <form onSubmit={this.handleSubmit2}>
                    <h2>welcome</h2>
                    
                    <h4>please provide your info below</h4>
                    <input type='text' name='title' onChange={this.handleChange} placeholder='first name' required />
                    <br />
                    <input type='text' name='author' onChange={this.handleChange} placeholder='last name' required />
                    <br />
                    <input type='text' name='genre' onChange={this.handleChange} placeholder='phone' required />
                    <br />
                    <input type='text' name='pub' onChange={this.handleChange} placeholder='email' required />

                    <input type='submit' value='submit' />
                </form>
        )}
        return (
            <>
                exercise 1
                <form onSubmit={this.handleSubmit}>
                    <h2>New Book</h2>
                    {sent}
                Title <input type='text' name='title' onChange={this.handleChange} required />
                    <br />
                Author <input type='text' name='author' onChange={this.handleChange} required />
                    <br />
                Genre<input type='text' name='genre' onChange={this.handleChange} required />
                    <br />
                Year Published<input type='text' name='pub' onChange={this.handleChange} required />

                    <input type='submit' value='submit' />
                </form>
            exercise 2
            {data}
            {but}
                
            </>
        )
    }
}

export default Xp1; 