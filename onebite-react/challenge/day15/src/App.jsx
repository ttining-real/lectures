import { useState } from "react";
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

function App() {
  const [contactList, setContactList] = useState(mockData);

  const onCreate = (name, contact) => {
    const newContact = {
      id: 3,
      name: name,
      contact: contact,
    };

    setContactList([newContact, ...contactList]);
  };

  const onDelete = (targetId) => {
    setContactList(contactList.filter((item) => item.id !== targetId));
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
