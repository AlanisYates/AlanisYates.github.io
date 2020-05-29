import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Project.css";

const width = "100%";

export const Projects = () => {
  const [modalState, setModalState] = useState(
    "modal-one" |
      "modal-two" |
      "modal-three" |
      "modal-four" |
      ("close" > "close")
  );

  const handleShowModalOne = () => {
    setModalState("modal-one");
  };

  const handleShowModalTwo = () => {
    setModalState("modal-two");
  };

  const handleShowModalThree = () => {
    setModalState("modal-three");
  };

  const handleShowModalFour = () => {
    setModalState("modal-four");
  };

  const handleClose = () => {
    setModalState("close");
  };

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
          <Card.Img variant="top" src={require("./Images/test.jpg")} />
          <Card.Body>
            <Card.Title>
              <h2 style={{ fontWeight: "700" }}>Spot-On</h2>
            </Card.Title>
            <Button
              href="https://spot-on.netlify.app/"
              target="_blank"
              onClick={handleClose}
              variant="light"
              style={{
                marginRight: "1rem",
                fontSize: "1.1rem",
                fontWeight: "700",
              }}
            >
              Live Demo
            </Button>
            <Button
              variant="light"
              style={{ fontSize: "1.1rem", fontWeight: "700" }}
              onClick={handleShowModalOne}
            >
              More Info
            </Button>

            <Modal
              show={modalState === "modal-one"}
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
                    spotify playlist. Users are authenticated with their spotify
                    account. The user can then seach for any song on spotify,
                    add that song to a playlist and save that playlist to their
                    account.{" "}
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    {" "}
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
        <Card
          bg="dark"
          text="light"
          style={{
            width: width,
          }}
        >
          <Card.Img variant="top" src={require("./Images/travel.jpg")} />
          <Card.Body>
            <Card.Title>
              <h2 style={{ fontWeight: "700" }}>Travel Logger</h2>
            </Card.Title>
            <Button
              href="https://ay-travel-log.now.sh"
              target="_blank"
              onClick={handleClose}
              variant="light"
              style={{
                marginRight: "1rem",
                fontSize: "1.1rem",
                fontWeight: "700",
              }}
            >
              Live Demo
            </Button>
            <Button
              variant="light"
              style={{ fontSize: "1.1rem", fontWeight: "700" }}
              onClick={handleShowModalFour}
            >
              More Info
            </Button>

            <Modal
              show={modalState === "modal-four"}
              onHide={handleClose}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  <h1 style={{ fontWeight: "900" }}>Travel Logger</h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <p
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    This is a personal travel-log web application. Users can
                    double click anywhere on the map and fill out a form with a
                    comment about their personal story with that location and a
                    picture.
                  </p>

                  <p
                    style={{
                      fontWeight: "500",
                    }}
                  ></p>

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
                    <li>Mongo DB</li>
                    <li>Express</li>
                    <li>Mapbox GL</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  href="https://github.com/AlanisYates/travel_logger"
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
        {/* Card End --------------------------------------------------- */}
        <Card
          bg="dark"
          text="light"
          style={{
            width: width,
          }}
        >
          <Card.Img variant="top" src={require("./Images/Product Page.png")} />
          <Card.Body>
            <Card.Title>
              <h2 style={{ fontWeight: "700" }}>File Deliver</h2>
            </Card.Title>
            <Button
              href="https://goofy-gates-a6d6a8.netlify.app/"
              target="_blank"
              onClick={handleClose}
              variant="light"
              style={{
                marginRight: "1rem",
                fontSize: "1.1rem",
                fontWeight: "700",
              }}
            >
              Live Demo
            </Button>
            <Button
              variant="light"
              style={{ fontSize: "1.1rem", fontWeight: "700" }}
              onClick={handleShowModalTwo}
            >
              More Info
            </Button>

            <Modal
              show={modalState === "modal-two"}
              onHide={handleClose}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  <h1 style={{ fontWeight: "900" }}>File Deliver</h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <p
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    This is a static landing page for a file delivery app.
                  </p>

                  <p
                    style={{
                      fontWeight: "500",
                    }}
                  ></p>

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
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>SASS/CSS</li>
                  </ul>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  href="https://github.com/AlanisYates/FreeDlivery_lpage"
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
        {/* Card End --------------------------------------------------- */}
        <Card
          bg="dark"
          text="light"
          style={{
            width: width,
          }}
        >
          <Card.Img variant="top" src={require("./Images/rest.jpg")} />
          <Card.Body>
            <Card.Title>
              <h2 style={{ fontWeight: "700" }}>Rosa</h2>
            </Card.Title>
            <Button
              href="https://goofy-hodgkin-8367af.netlify.app/"
              target="_blank"
              onClick={handleClose}
              variant="light"
              style={{
                marginRight: "1rem",
                fontSize: "1.1rem",
                fontWeight: "700",
              }}
            >
              Live Demo
            </Button>
            <Button
              variant="light"
              style={{ fontSize: "1.1rem", fontWeight: "700" }}
              onClick={handleShowModalThree}
            >
              More Info
            </Button>

            <Modal
              show={modalState === "modal-three"}
              onHide={handleClose}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  <h1 style={{ fontWeight: "900" }}>Rosa</h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <p
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    This is a static landing page for a resturant with. All the
                    animations were built with custom CSS. A on-scroll library
                    was used for the scroll events.{" "}
                  </p>

                  <p
                    style={{
                      fontWeight: "500",
                    }}
                  ></p>

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
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>SASS/CSS</li>
                  </ul>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  href="https://github.com/AlanisYates/resposive-page"
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
        {/* Card End --------------------------------------------------- */}
      </CardColumns>
    </div>
  );
};
