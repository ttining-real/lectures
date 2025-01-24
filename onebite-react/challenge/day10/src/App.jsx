import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Welcome name='ttining' isMember={true} />
      <Welcome name='ttining' isMember={false} />
      <Welcome />
    </>
  );
}

export default App;
