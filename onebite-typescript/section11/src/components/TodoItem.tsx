import { useTodoDispatch } from "../App";
import { Todo } from "../types";

interface Props extends Todo {
  // onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
