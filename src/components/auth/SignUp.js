import React, { Component } from 'react'

export class SignUp extends Component {
    state = {
        email: '',
        password: '',
        lastname: '',
        firstname: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <div className="container grey-text text-darken-3">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h3 style={{marginBottom: '1em'}}>Register</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" id="lastname" value={this.state.lastname} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" id="firstname" value={this.state.firstname} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink text-lighten-3">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
