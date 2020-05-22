import React, { useState } from "react";
import { Home } from "./Components/Home/Home";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Projects } from "./Components/Projects/Projects";
import { Experiencs } from "./Components/Experience/Experiencs";
import Container from "react-bootstrap/Container";

const App = () => {
  const [expActive, setExpActive] = useState();
  const [projectActive, setProjectActive] = useState();
  const [expand, setExpand] = useState();
  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar
            collapseOnSelect
            expand="md"
            variant="dark"
            style={{
              backgroundColor: "black",
              fontSize: "1.5rem",
            }}
            expanded={expand}
          >
            <Navbar.Brand
              href="#"
              as={Link}
              to="/"
              style={{
                fontSize: "1.7rem",
              }}
              onClick={() => {
                setProjectActive(false);
                setExpActive(false);
                setExpand(false);
              }}
            >
              Alanis Yates
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => {
                setExpand(!expand);
              }}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link
                  href="#"
                  eventKey={1}
                  as={Link}
                  active={projectActive}
                  to="/projects"
                  onClick={() => {
                    setProjectActive(true);
                    setExpand(false);
                    setExpActive(false);
                  }}
                >
                  Projects
                </Nav.Link>
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
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
