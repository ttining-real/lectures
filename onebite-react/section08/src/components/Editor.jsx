import "./Editor.css";

const Editor = () => {
  return (
    <div className='Editor'>
      <input type='text' placeholder='새로운 Todo...' />
      <button type='button'>추가</button>
    </div>
  );
};

export default Editor;
