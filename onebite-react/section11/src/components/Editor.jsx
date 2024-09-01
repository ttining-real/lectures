import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

function Editor() {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState("");

  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onsubmit();
    }
  };

  const onsubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className='Editor'>
      <input
        ref={contentRef}
        type='text'
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder='새로운 ToDo...'
      />
      <button onClick={onsubmit}>추가</button>
    </div>
  );
}

export default Editor;
