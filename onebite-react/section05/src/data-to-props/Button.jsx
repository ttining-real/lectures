function Button({ text, color = 'black', children }) {
  // console.log(props);

  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text}-{color.toUpperCase()}
      {children}
    </button>
  );
}

// Props의 기본값 설정
// Button.defaultProps = {
//   color: "black",
// };

export default Button;
