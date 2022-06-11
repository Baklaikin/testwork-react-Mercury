import "./App.css";
import FormTable from "./Form/Form";
import Picture from "./Picture/Picture";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container className="container-sm mt-4 desktop">
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
