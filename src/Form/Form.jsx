import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function FormTable() {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control type="name" placeholder="First Name"></Form.Control>
                    </Form.Group>
                <Form.Group>
                <Form.Control type="text" placeholder="Last name"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" placeholder="Email"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="phone" placeholder="Phone"></Form.Control>
                </Form.Group>
                <Button>Отправить</Button>
            </Form>
    </div>
)
}