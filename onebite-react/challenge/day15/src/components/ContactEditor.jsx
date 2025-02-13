import { useRef, useState } from "react";
import "./ContactEditor.css";

export default function ContactEditor({ onCreate }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const nameRef = useRef();
  const contactRef = useRef();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeContact = (e) => {
    setContact(e.target.value);
  };
  const onSubmit = () => {
    if (name === "") {
      nameRef.current.focus();
      return;
    } else if (contact === "") {
      contactRef.current.focus();
      return;
    }

    onCreate(name, contact);
    setName("");
    setContact("");
  };

  return (
    <div className='ContactEditor'>
      <div className='title'>Add Contact</div>
      <div className='input_wrapper'>
        <input
          ref={nameRef}
          value={name}
          onChange={onChangeName}
          className='name'
          placeholder='이름 ...'
        />
        <input
          ref={contactRef}
          value={contact}
          onChange={onChangeContact}
          className='contact'
          placeholder='연락처(이메일) ...'
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
