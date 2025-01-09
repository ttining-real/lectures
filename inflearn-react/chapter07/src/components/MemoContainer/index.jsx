import "./index.css";
import { shape, string, number, func } from "prop-types";

function MemoContainer({ memo, setMemo }) {
  // 모든 메모가 삭제됐을 경우
  if (memo === undefined) {
    return (
      <div className='MemoContainer'>
        <h2 className='MemoContainer_title'>메모가 없습니다.</h2>
        <p className='MemoContainer_content'>새로운 메모를 추가해주세요.</p>
      </div>
    );
  }

  return (
    <div className='MemoContainer'>
      <div className='layout'>
        <input
          type='text'
          className='MemoContainer_title'
          value={memo.title}
          onChange={(e) => {
            setMemo({
              ...memo,
              title: e.target.value,
              updateAt: new Date().getTime(),
            });
          }}
        />
        <textarea
          name=''
          id=''
          className='MemoContainer_content'
          value={memo.content}
          onChange={(e) => {
            setMemo({
              ...memo,
              content: e.target.value,
              updateAt: new Date().getTime(),
            });
          }}
        ></textarea>
      </div>
    </div>
  );
}

MemoContainer.propTypes = {
  memo: shape({
    title: string,
    content: string,
    createAt: number,
    updateAt: number,
  }),
  setMemo: func,
};

export default MemoContainer;
