import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Container from "react-bootstrap/Container";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <Container id="main">
        <div className="main">
          <h1 className="title tracking-in-expand-fwd">Alanis Yates</h1>
          <h3 className="sub-text text-focus-in-1">Full Stack Developer</h3>
        </div>
        <div className="social text-focus-in-2">
          <a
            href="https://github.com/AlanisYates"
            target="_blank"
            className="github"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/alanis-yates/"
            target="_blank"
            className="linked-in"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </Container>
    </div>
  );
};
