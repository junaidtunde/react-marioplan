import React, { Component } from 'react'
import createProject from './../../store/actions/createProject';
import { connect } from 'react-redux';

export class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
    }

    render() {
        return (
            <div className="container text-grey text-darken-3">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h3 style={{marginBottom: '1em'}}>Create New Project</h3>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea name="content" className="materialize-textarea" id="content" cols="30" rows="10" onChange={this.handleChange} value={this.state.content}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink grey-text text-lighten-3">Create Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(null, mapDispatchToProps)(CreateProject)
