import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
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
      <button type='button'>삭제</button>
    </div>
  );
};

export default TodoItem;
