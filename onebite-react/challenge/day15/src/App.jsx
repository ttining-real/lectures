import { useReducer, useRef } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

const mockData = [
  {
    id: 0,
    name: "공정환",
    contact: "king199777@gmail.com",
  },
  {
    id: 1,
    name: "일정환",
    contact: "king199777@gmail.com",
  },
  {
    id: 2,
    name: "이정환",
    contact: "king199777@gmail.com",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [contactList, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  const onCreate = (name, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: name,
        contact: contact,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <div className='App'>
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contactList={contactList} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
