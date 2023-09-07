import Card from "react-bootstrap/Card"

export default function ItemCard(props) {
  return (
    <Card body>
      One {props.Item} is Rs.{props.Price}.00 .
    </Card>
  )
}
