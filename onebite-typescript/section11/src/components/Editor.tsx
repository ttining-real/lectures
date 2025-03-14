import { useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {
  // onClickAdd: (text: string) => void;
  // children: ReactElement;
}

export default function Editor(props: Props) {
  // const dispatch = useContext(TodoDispatchContext);
  const dispatch = useTodoDispatch();

  // - 사용자로부터 입력 받는 Todo를 저장할 State
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input type='text' value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}
