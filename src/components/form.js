import { Button, Container, Form } from "react-bootstrap"
import Input from "./Input"
import { useState } from "react"

export default function MyFrorm(props) {
  const [detail, setDetail] = useState({
    item: "",
    price: "",
  })

  const handleChange = (event) => {
    // console.log(event.target.value)
    const det = { ...detail }
    det[event.target.id] = event.target.value
    setDetail(det)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(detail)
  }
  return (
    <Form style={styles.form} className="p-5 pt-3 m-3" onSubmit={handleSubmit}>
      <h4>Add Item</h4>
      <Input Name="Stationary Item" Id="item" onChange={handleChange} />
      <Input Name="Price" Id="price" onChange={handleChange} />
      <Button variant="primary" style={styles.button} type="submit">
        Add
      </Button>
    </Form>
  )
}
const styles = {
  form: {
    backgroundColor: "var(--theme-text-color)",
    // fontFamily: "var( --font-englebrt)",
    color: "var(--theme-color-two)",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "var(--theme-color-two)",
    border: "var(--theme-color-two)",
  },
}
