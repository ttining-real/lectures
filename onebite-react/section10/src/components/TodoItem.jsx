import "./TodoItem.css";
import { memo } from "react";

function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {
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
        checked={isDone}
        onChange={onChangeCheckbox}
        readOnly
      />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 콜백 함수의 반환값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
//   // T 반환 -> Props 바뀌지 X -> 리렌더링 X
//   // F 반환 -> Props 바뀜 O -> 리렌더링 O
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);
