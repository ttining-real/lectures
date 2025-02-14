import { useState, useRef } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
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
        type='text'
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder='새로운 Todo...'
      />
      <button type='button' onClick={onSubmit}>
        추가
      </button>
    </div>
  );
};

export default Editor;
