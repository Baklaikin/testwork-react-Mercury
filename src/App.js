import "./App.css";
import getLocation from "./Api/api";
import FormTable from "./Form/Form";
import Picture from "./Picture/Picture";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  getLocation();

  return (
    <Container className="container-sm position-absolute top-50 start-50 translate-middle">
      <Row className="rounded">
        <Col className="col-12 col-sm-6 py-3">
          <Picture />
        </Col>
        <Col className="col-12 col-sm-6 py-3">
          <FormTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
