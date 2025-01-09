import "./index.css";
import { arrayOf, shape, string, number, func } from "prop-types";
import MemoList from "../MemoList";
import SideBarHeader from "../SideBarHeader";
import SideBarFooter from "../SideBarFooter";

function SideBar({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  addMemo,
  deleteMemo,
}) {
  return (
    <div className='SideBar'>
      {/* Header */}
      <SideBarHeader />
      {/* MemoList */}
      <MemoList
        memos={memos}
        setSelectedMemoIndex={setSelectedMemoIndex}
        selectedMemoIndex={selectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      {/* Footer */}
      <SideBarFooter onClick={addMemo} />
    </div>
  );
}

SideBar.propTypes = {
  memos: arrayOf(
    shape({
      title: string,
      content: string,
      createAt: number,
      updateAt: number,
    })
  ),
  setSelectedMemoIndex: func,
  selectedMemoIndex: number,
  addMemo: func,
  deleteMemo: func,
};

export default SideBar;
