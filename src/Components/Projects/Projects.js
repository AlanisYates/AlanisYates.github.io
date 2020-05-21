import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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
          color: 'white',
          fontWeight: ''
        }}
      >
        Projects
      </h1>
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
            src="https://alanisyates.github.io/img/projects/Spot-on.png"
          />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Button variant="primary" onClick={handleShow} style={{marginRight: '1rem'}}>
              More Info
            </Button>
       

            <Modal show={show} onHide={handleClose}

              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Spor On
                </Modal.Title>
              </Modal.Header>
              <Modal.Body >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolorem numquam culpa, repellendus quod ipsum alias saepe ex sapiente laudantium fugiat voluptatibus aliquam dignissimos quibusdam autem. Dicta molestias adipisci rem facere quae corrupti itaque animi veritatis fugit quidem quisquam suscipit culpa voluptates eius incidunt, natus in ipsum hic nostrum! Quos hic dolorem aperiam nisi odit laborum eum laboriosam, vero dolor minima? Earum veniam dolorum nihil delectus recusandae animi dolore corrupti porro velit assumenda beatae, deleniti voluptates inventore. Architecto neque, eum quos in ipsam quae sunt aut, iste commodi vero aliquid. Quidem neque eum alias, voluptatum fuga atque. Maiores, ipsum iusto.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button href="https://spot-on.netlify.app/" target="_blank" onClick={handleClose}>View Code</Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  );
};
