import { useEffect, useRef, useState } from "react";
import "./App.css";
import Editor from "./../src/components/Editor";

interface Todo {
  id: number;
  content: string;
}

function App() {
  // - Todo 아이템을 보관할 State
  const [todos, setTodos] = useState<Todo[]>([]);

  // - 아이디 요소
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <Editor onClickAdd={onClickAdd} />
    </div>
  );
}

export default App;
