function Controller({ onClickButton }) {
  return (
    <>
      <div style={{ display: "flex", gap: "4px" }}>
        <button
          onClick={() => {
            onClickButton(-1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            onClickButton(-10);
          }}
        >
          -10
        </button>
        <button
          onClick={() => {
            onClickButton(-100);
          }}
        >
          -100
        </button>
        <button
          onClick={() => {
            onClickButton(100);
          }}
        >
          +100
        </button>
        <button
          onClick={() => {
            onClickButton(10);
          }}
        >
          +10
        </button>
        <button
          onClick={() => {
            onClickButton(1);
          }}
        >
          +1
        </button>
      </div>
    </>
  );
}

export default Controller;
