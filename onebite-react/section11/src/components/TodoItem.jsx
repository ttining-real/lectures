import { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
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

// 고차 컴포넌트 (HOC, Higher-Order Component)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라 Props가 바뀌었는지, 안 바뀌었는지 판단

//   // F → Props 바뀜 → 리렌더링 ⭕
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   // T → Props 바뀌지 않음 → 리렌더링 ❌
//   return true;
// });

export default memo(TodoItem);
