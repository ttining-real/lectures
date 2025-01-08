import MemoItem from "./MemoItem";
import { arrayOf, func, number, shape, string } from "prop-types";

function MemoList({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  deleteMemo,
}) {
  // console.log(memos);
  // console.log(selectedMemoIndex);

  return (
    <div className='MemoList'>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClickItem={() => {
            setSelectedMemoIndex(index);
          }}
          onClickDelete={(e) => {
            deleteMemo(index);
            e.preventDefault();
            e.stopPropagation();
          }}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

MemoList.propTypes = {
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
  deleteMemo: func,
};

export default MemoList;
