import { Row, Col, Container} from "react-bootstrap";
import "../../App.css";


function About() {
    return(
        <Container>
        <Row>
        <Col xs={12}>
          <h6 className="courier">ABOUT ME :</h6>
          <p className="links century">
          I am 21 years old and live in Bristol. I am in my third and final year studying BSc(Hons) Architecture (RIBA/ARB Part 1) at the University of the West of England. I want to continue my career in architecture by finding a placement job for one year in London, beginning in September 2024. Afterward, I would like to begin studying my Part 2 education in architecture.

I am interested in timber construction, the design of public spaces in cities, and social housing. I love to draw, discuss the subjective, and be creative. 

Below, please find my 'Architecture Portfolio' and 'More Work' if you would like to look further. 
          </p>
        </Col>
      </Row>
      </Container>
    )
}

export default About;