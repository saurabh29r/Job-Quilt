import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";

function Jobs() {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            <div>
              <h1> This is job page</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Jobs;
