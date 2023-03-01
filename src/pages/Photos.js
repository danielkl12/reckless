import "../App.css";
import Photogrid from "react-facebook-photo-grid";
import { Container, Row, Col } from "reactstrap";


export default function App() {
  const data = [ 'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-098.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675622418774',
  'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-067.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675622420513',
  'https://ik.imagekit.io/1fhpaowm6/mikephotogrid.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675556454471',
  'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-031.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676333357854',
  'https://ik.imagekit.io/1fhpaowm6/RAT_3_22_Crem_de_la_crem-073.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675556998056',

]


  return (
    <div className="photogrid">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Photogrid
              images={data} //required
              
            ></Photogrid>
          </Col>
          {/* <Col md="auto">
            <Photogrid
              images={data} //required
              width={300}
              maxWidth={600}
            ></Photogrid>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}