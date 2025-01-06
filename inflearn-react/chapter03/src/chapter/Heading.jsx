export default function Heading(props) {
  if (props.type === "h2") {
    return <h2>{props.children}</h2>;
  }

  return <h1>{props.children}</h1>;
}
