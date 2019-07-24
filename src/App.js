import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectSummary from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/project/create" component={CreateProject} />
            <Route path="/project/:id" component={ProjectSummary} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
