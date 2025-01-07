function EventType() {
  return (
    <div className='types'>
      <button
        onClick={() => {
          console.log("onClick");
        }}
        onMouseDown={() => {
          console.log("onMouseDown");
        }}
        onMouseUp={() => {
          console.log("onMouseUp");
        }}
      >
        Button
      </button>
      <div
        className='box'
        onClick={() => {
          console.log("onClick");
        }}
        onMouseEnter={() => {
          console.log("onMouseEnter");
        }}
        onMouseLeave={() => {
          console.log("onMouseLeave");
        }}
        onMouseMove={() => {
          console.log("onMouseMove");
        }}
        style={{
          width: 250,
          height: 100,
          background: "#6666ffaa",
          marginBottom: 20,
        }}
      ></div>
      <div>
        <input
          type='text'
          onKeyDown={() => {
            console.log("onKeyDown");
          }}
          onKeyUp={() => {
            console.log("onKeyUp");
          }}
          onKeyPress={() => {
            console.log("onKeyPress");
          }}
          onFocus={() => {
            console.log("onFocus");
          }}
          onBlur={() => {
            console.log("onBlur");
          }}
          onChange={() => {
            console.log("onChange");
          }}
        />
      </div>
    </div>
  );
}

export default EventType;
