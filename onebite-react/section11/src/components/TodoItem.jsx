import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className='TodoItem'>
      <input
        type='checkbox'
        onChange={onChangeCheckbox}
        checked={isDone}
        readOnly
      />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button type='button' onClick={onClickDeleteButton}>
        삭제
      </button>
    </div>
  );
};

export default memo(TodoItem);
