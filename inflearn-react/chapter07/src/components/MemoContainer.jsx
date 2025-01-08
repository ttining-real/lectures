import { shape, string, number, func } from "prop-types";

function MemoContainer({ memo, setMemo }) {
  if (memo === undefined) {
    return (
      <div className='MemoContainer'>
        <h1>메모가 없습니다.</h1>
        <p>새로운 메모를 추가해주세요.</p>
      </div>
    );
  }
  return (
    <div className='MemoContainer'>
      <div>
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
      </div>
      <div style={{ height: "100%" }}>
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
