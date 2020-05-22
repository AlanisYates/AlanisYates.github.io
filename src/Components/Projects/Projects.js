import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './Project.css'

const width = "100%";

export const Projects = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <h1
        style={{
          color: "white",
          fontWeight: "700",
          paddingTop: "1rem",
          letterSpacing: ".2rem",
          textAlign: "center",
        }}
      >
        PROJECTS
      </h1>
      <hr
        style={{
          borderTop: ".1rem solid white",
        }}
      />
      <CardColumns>
        <Card
          bg="dark"
          text="light"
          style={{
            width: width,
          }}
        >
          <Card.Img
            variant="top"
            src="'./Images/test.jpg"
          />
          <Card.Body>
            <Card.Title>
              <h2 style={{ fontWeight: "700" }}>Spot-On</h2>
            </Card.Title>
            <Button
              href="https://spot-on.netlify.app/"
              target="_blank"
              onClick={handleClose}
              variant="light"
              style={{ marginRight: "1rem", fontSize: '1.1rem', fontWeight: '700'}}
            >
              Live Demo
            </Button>
            <Button
              variant="light"
              style={{ fontSize: '1.1rem', fontWeight: '700' }}
              onClick={handleShow}
            >
              More Info
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  <h1 style={{ fontWeight: "900" }}>Spot-On</h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <p
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    A web app built with React that allows the user to create
                    spotify playlist on their account all on the same screen.{" "}
                  </p>

                  <p
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Utilized react components, state management, HTTP and JSON
                    requests to create a dynamic web application. Created and
                    implemented a responsive website design with SCSS.
                  </p>

                  <hr />
                  <h4 style={{ fontWeight: "900", fontSize: "1.5rem" }}>
                    Built With:
                  </h4>
                  <ul
                    style={{
                      fontWeight: "500",
                      listStyle: "square",
                    }}
                  >
                    <li>React.js</li>
                    <li>Spotify Api</li>
                    <li>Node.js</li>
                    <li>SCSS/SASS</li>
                  </ul>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  href="https://github.com/pokalama/Spot-"
                  target="_blank"
                  onClick={handleClose}
                  style={{
                    background: "black",
                    border: "none",
                    padding: "0.5rem 1rem",
                  }}
                >
                  View Code
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  );
};
