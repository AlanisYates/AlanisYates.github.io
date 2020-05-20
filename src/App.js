import React from 'react';
import { Home } from './Components/Home';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Projects } from './Components/Projects';
import { Experiencs } from './Components/Experiencs';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Alanis Yates</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
              <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/experience">
            <Experiencs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
