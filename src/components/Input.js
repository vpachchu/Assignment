import { Form } from "react-bootstrap"

export default function Input(props) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{props.Name}</Form.Label>
      <Form.Control type={props.Type} placeholder={props.Placeholder} id={props.Id} onChange={props.onChange} />
    </Form.Group>
  )
}
