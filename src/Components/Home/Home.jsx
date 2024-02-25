import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <div className="bg-container">
              <h1> Find a job which suits you</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
