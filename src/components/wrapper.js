export default function Wrapper(props) {
  return <div style={styles.wrap}>{props.children}</div>;
}
const styles = {
  wrap: {
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 30,
    borderWidth: 1,
    margin: 50,
    padding: 30,
  },
};
