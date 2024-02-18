import { Col, Container } from "react-bootstrap";
import EssayP1 from "../../Images/EssayP1.png"


function Essay () {
return(
    <Container>
      <Col xs={4}>
            <h6 className="text-center courier">ESSAY </h6>
            <a rel="noreferrer" href="https://drive.google.com/file/d/1cvn_Oh9dD-ds1xOk5CvG9bnrr_t9kQgI/view?usp=sharing" target="_blank">

            <img className="popupImage" src={EssayP1}
            height={370}
            alt="Essay cover"
            />
            </a>

                
            </Col>
    </Container>
)
}

export default Essay;