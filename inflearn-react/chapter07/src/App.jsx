import "./App.css";

// components
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { useState, useCallback } from "react";
import { getItem, setItem } from "./lib/storage";
import debounce from "lodash.debounce";

const debouncedSetItem = debounce(setItem, 5000);

function App() {
  // const [memos, setMemos] = useState([
  //   {
  //     title: "Memo 1",
  //     content: "This is memo 1",
  //     createAt: 1736311072077,
  //     updateAt: 1736311072077,
  //   },
  //   {
  //     title: "Memo 2",
  //     content: "This is memo 2",
  //     createAt: 1736311085316,
  //     updateAt: 1736311085316,
  //   },
  // ]);
  const [memos, setMemos] = useState(getItem("memo") || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  // const setMemo = (newMemo) => {
  //   memos[selectedMemoIndex] = newMemo;
  //   console.log("memos", memos);
  //   setMemos([...memos]);
  // };

  const setMemo = useCallback(
    (newMemo) => {
      // 불변성 유지
      // const newMemos = [...memos];
      // newMemos[selectedMemoIndex] = newMemo;
      // setMemos(newMemos);
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem("memo", newMemos);

        return newMemos;
      });

      // 로컬 스토리지
      // localStorage.setItem("memo", JSON.stringify(newMemos));
      // setItem("memo", newMemos);
      // debouncedSetItem("memo", newMemos);
    },
    [selectedMemoIndex]
  );

  const addMemo = useCallback(() => {
    setMemos((memos) => {
      const now = new Date().getTime();
      const newMemos = [
        ...memos,
        {
          title: "Untitled",
          content: "",
          createAt: now,
          updateAt: now,
        },
      ];

      debouncedSetItem("memo", newMemos);
      return newMemos;
    });

    setSelectedMemoIndex(memos.length);
  }, [memos]);

  // const deleteMemo = (index) => {
  //   memos.splice(index, 1);

  //   setMemos(memos);
  // };

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(index, 1);
        debouncedSetItem("memo", newMemos);

        return newMemos;
      });

      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex]
  );

  return (
    <div className='App'>
      <h1 className='heading_title'>React Memo Project</h1>
      <div className='container'>
        <SideBar
          memos={memos}
          setSelectedMemoIndex={setSelectedMemoIndex}
          selectedMemoIndex={selectedMemoIndex}
          addMemo={addMemo}
          deleteMemo={deleteMemo}
        />
        <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
      </div>
    </div>
  );
}

export default App;
