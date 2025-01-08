import { func, node, bool } from "prop-types";

function MemoItem({ children, onClickItem, onClickDelete, isSelected }) {
  // console.log(isSelected);

  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onClickItem}
    >
      <span>{children}</span>
      <button onClick={onClickDelete}>❌</button>
      {/* <button>❎</button> */}
      {/* 00D26A */}
    </div>
  );
}

MemoItem.propTypes = {
  children: node,
  onClickItem: func,
  onClickDelete: func,
  isSelected: bool,
};

export default MemoItem;
