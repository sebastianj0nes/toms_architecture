import { Container, Col, Row } from "react-bootstrap";
import DrawingP1 from "./DrawingP1.png";
import DrawingP2 from "./DrawingP2.jpeg";


function Drawing () {

return(
    <Container>
        <h6 className="courier">Drawn Report of 'Architecture, Technology and Environment'
</h6>
<Row>
    
    <Col xs={6}>
    <a rel="noreferrer" href="https://drive.google.com/file/d/1O_UhzDcr0Er--mD6zpmluHYpXSSX1dv-/view?usp=sharing
" target="_blank">
         <img alt="Drawing Portfolio" className="popupImage pt-3" src={DrawingP1} height={280}/>
         </a>
    </Col>
    <Col xs={6}>
    <a rel="noreferrer" href="https://drive.google.com/file/d/1O_UhzDcr0Er--mD6zpmluHYpXSSX1dv-/view?usp=sharing
" target="_blank">
    <img alt="Drawing Portfolio" className="popupImage pt-3" src={DrawingP2} height={280}/>
    </a>

    </Col>
</Row>

    </Container>
)
}

export default Drawing;