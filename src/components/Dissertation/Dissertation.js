import { Col, Container } from "react-bootstrap";
import DissP1 from "../../Images/DissP1.png"


function Dissertation () {
return(
    <Container>
      <Col xs={4}>
            <h6 className="text-center courier">DISSERTATION </h6>
            <a href="https://drive.google.com/file/d/1BOUtGoGa8Gru6lzkMmOGnBt70A2O-KD4/view?usp=sharing" target="_blank" rel="noreferrer" >
            <img className="popupImage" src={DissP1}
            height={370}
            alt="Dissertation cover"
            />
             </a>

            </Col>
    </Container>
)
}

export default Dissertation;