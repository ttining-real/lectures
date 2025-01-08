import "./App.css";

// components
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [memos, setMemos] = useState([
    {
      title: "Memo 1",
      content: "This is memo 1",
      createAt: 1736311072077,
      updateAt: 1736311072077,
    },
    {
      title: "Memo 2",
      content: "This is memo 2",
      createAt: 1736311085316,
      updateAt: 1736311085316,
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  // const setMemo = (newMemo) => {
  //   memos[selectedMemoIndex] = newMemo;
  //   console.log("memos", memos);
  //   setMemos([...memos]);
  // };

  const setMemo = (newMemo) => {
    // 불변성 유지
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;

    setMemos(newMemos);
  };

  const addMemo = () => {
    const now = new Date().getTime();

    setMemos([
      ...memos,
      {
        title: "Untitled",
        content: "",
        createAt: now,
        updateAt: now,
      },
    ]);
    setSelectedMemoIndex(memos.length);
  };

  // const deleteMemo = (index) => {
  //   memos.splice(index, 1);

  //   setMemos(memos);
  // };

  const deleteMemo = (index) => {
    const newMemos = [...memos];

    newMemos.splice(index, 1);

    setMemos(newMemos);

    if (index === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    }
  };

  return (
    <div className='App'>
      <h1>React Memo Project</h1>
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
