import Portfolio1 from "../../Images/ArchP1.png";
import Portfolio2 from "../../Images/ArchP2.png";
import { Col, Container, Row } from "react-bootstrap";
import "../../App.css";
import "../Portfolio/Portfolio.css";


function Portfolio() {

    return (
        <Container>
            <h6 className="pt-4 pb-3 courier">PORTFOLIO :</h6>
            <Row>
                <Col xs={12} md={4}>      
                <a href="https://drive.google.com/file/d/119Iah-I7LEDJb4AA73mKIOcP7j_TAtAQ/view?usp=sharing">
                   <img alt="Portfolio cover images" className="popupImage" src={Portfolio1} height={400} />
                   </a>
                </Col>
                <Col class="d-sm-none .d-md-block" md={6}>        
                <a href="https://drive.google.com/file/d/119Iah-I7LEDJb4AA73mKIOcP7j_TAtAQ/view?usp=sharing">
                 <img alt="Portfolio cover images" className="popupImage" src={Portfolio2} height={400} />
                 </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio;