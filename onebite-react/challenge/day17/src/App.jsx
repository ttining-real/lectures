import { createContext, useCallback, useMemo, useReducer, useRef } from "react";
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

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [contactList, dispatch] = useReducer(reducer, mockData);

  const idRef = useRef(3);

  const onCreate = useCallback((name, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: name,
        contact: contact,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => ({ onCreate, onDelete }), []);

  return (
    <div className='App'>
      <ContactStateContext.Provider value={contactList}>
        <ContactDispatchContext.Provider value={memoizedDispatch}>
          <h2>Contact List</h2>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
