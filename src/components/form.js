import { Button, Form } from "react-bootstrap";
import Input from "./Input";
import { useContext, useState } from "react";
import { MyContext } from "../App.js";
import Welcome from "./welcome";
import { useNavigate } from "react-router-dom";
import { WELCOME } from "./routes/routes";

export default function MyForm(props) {
  const [detail, setDetail] = useState([]);

  const handleChange = (event) => {
    // console.log(event.target.value)
    const det = { ...detail };
    det[event.target.id] = event.target.value;
    setDetail(det);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(detail);
    //props.onSaveItem(detail);
  };
  const data = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <Form style={styles.form} className="p-5 pt-3 m-5" onSubmit={handleSubmit}>
      <h4>Add Item</h4>
      <Input Name="Stationary Item" Id="name" onChange={handleChange} />
      <Input Name="Price" Id="price" onChange={handleChange} />
      <Button
        variant="primary"
        style={styles.button}
        type="submit"
        onClick={() => {
          navigate(WELCOME);
        }}
      >
        App
      </Button>
      {data}
    </Form>
  );
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
};
