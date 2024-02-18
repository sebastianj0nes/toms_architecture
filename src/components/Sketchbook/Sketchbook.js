import { Col, Container } from "react-bootstrap";
import SketchP1 from "../../Images/SketchP1.png"
import SketchP2 from "../../Images/SketchP2.png"



function Sketchbook () {
return(
    <Container>
      <Col xs={4}>
            <h6 className="text-center courier">SKETCHBOOK </h6>
            <a rel="noreferrer" href="https://drive.google.com/file/d/19BVzcBj9fOTtXFadTr-u130msb3zrz0R/view?usp=sharing
" target="_blank">
            <img alt="Sketchbook cover images" className="popupImage" src={SketchP1}
            height={185}
            />
            <img alt="Sketchbook cover images" className="popupImage pt-4" src={SketchP2} height={185} width={260}/>
            </a>
            </Col>
    </Container>
)
}

export default Sketchbook;