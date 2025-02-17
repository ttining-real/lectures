import "./App.css";

import { createContext, useReducer, useRef } from "react";
import { Route, Routes } from "react-router-dom";

import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2025-02-15").getTime(),
    emotionId: 1,
    content: "이럴수가..",
  },
  {
    id: 2,
    createdDate: new Date("2025-02-14").getTime(),
    emotionId: 2,
    content: "정말 벌써 끝나가는 건가..?",
  },
  {
    id: 3,
    createdDate: new Date("2025-02-10").getTime(),
    emotionId: 3,
    content: "환장하겠구만,,",
  },
  {
    id: 4,
    createdDate: new Date("2025-02-10").getTime(),
    emotionId: 4,
    content: "제 삼행시 어떤가요? ^-^ 씨익",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  // 일기를 관리할 새로운 State
  const [data, dispatch] = useReducer(reducer, mockData);

  // id 레퍼런스 객체 생성
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
