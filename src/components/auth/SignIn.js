import React, { Component } from 'react'

export class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form className="white grey-text" onSubmit={this.handleSubmit}>
                    <h3 className="grey-text text-darken-3" style={{marginBottom: '1em'}}>Sign In</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink grey-text text-lighten-3">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
