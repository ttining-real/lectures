import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className='App'>
      <h1>To do List</h1>
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
