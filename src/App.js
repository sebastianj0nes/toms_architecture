import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Dissertation from "./components/Dissertation/Dissertation";
import Sketchbook from "./components/Sketchbook/Sketchbook";
import Essay from "./components/Essay/Essay";
import Videos from "./components/Videos/Videos";
import Drawing from "./components/Drawing/Drawing";


function App() {
  return (
    <Container>
      <Row id="topRow">

        <h3 className="text-center tomName" id="firstHeader">O'R Architecture</h3>
        <br />
        <h3 className="text-center tomName">Tom O'Reilly</h3>

      </Row>

      <Container className="pt-5" id="groupLinks">
        <About />

        <Portfolio />

      <Row className="pt-5 d-flex justify-content-between">

        <Col xs={12}>
        <h6 className="courier p-3">MORE WORK: </h6>
        </Col>
        <Col xs={12} md={4}>
          <Dissertation />
        </Col>

        <Col xs={12} md={4}>
          <Sketchbook />
        </Col>

        <Col xs={12} md={4}>
          <Essay />
        </Col>

        <Col className="pt-5" xs={12}>
          <Videos/>
        </Col>

        <Col xs={12} className="pt-5">
          <Drawing/>
        </Col>
        
      </Row>
      </Container >
      <Col id="paddingCol"></Col>
    </Container>
  );
}

export default App;
