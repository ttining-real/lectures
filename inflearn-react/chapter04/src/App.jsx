import "./App.css";

// Components
// import Counter from "./components/Counter";
// import ClassComponent from "./components/ClassComponent";
// import FunctionalComponent from "./components/FunctionComponent";
import Accordion from "./components/Accordion";

// import { useState } from "react";

function App() {
  // const [toggle, setToggle] = useState(true);

  return (
    <div style={{ fontSize: "2rem", padding: 30 }}>
      <h1>LifeCycle과 Hooks</h1>
      {/* <Counter /> */}
      {/* <hr /> */}
      {/* {toggle && <ClassComponent />}
      {toggle || <FunctionalComponent />} */}
      {/* <hr /> */}
      {/* <button onClick={() => setToggle((t) => !t)}>toggle</button> */}
      {/* <hr /> */}
      <Accordion title='This is a Title' content='This is a content' />
    </div>
  );
}

export default App;
