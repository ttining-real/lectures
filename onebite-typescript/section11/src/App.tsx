import React, { useContext, useEffect, useReducer, useRef } from "react";
import "./App.css";
import Editor from "./../src/components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);

  // 타입 좁히기
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가 있습니다.");
  return dispatch;
}

function App() {
  // - Todo 아이템을 보관할 State
  const [todos, dispatch] = useReducer(reducer, []);

  // - 아이디 요소
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={{
            onClickAdd,
            onClickDelete,
          }}
        >
          <Editor />
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
