import { Button } from "react-bootstrap";
import { FORM } from "./routes/routes";
import { useNavigate } from "react-router-dom";
import Wrapper from "./wrapper";

export default function Welcome() {
  // const data = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div margin="20px">Hi Welcome! Have a noce day !!</div>
      <Button style={{ margin: "10px" }} onClick={() => navigate(FORM)}>
        Click me
      </Button>
    </Wrapper>
  );
}
