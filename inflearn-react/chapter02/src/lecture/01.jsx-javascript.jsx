let text = "Hello, world!";
const num = 15;
const obj = { key: 0, a: 1, b: 2 };
const arr = ["a", "b", "c"];
const imageUrl =
  "https://dst6jalxvbuf5.cloudfront.net/static/img/logo/logo.svg";

const element = (
  <div>
    <h1>변수 넣기</h1>
    <ul>
      <li>{text}</li>
      <li>{text + " test"}</li>
    </ul>
    <h1>숫자 및 계산식 넣기</h1>
    <ul>
      <li>{num}</li>
      <li>{num + 15}</li>
    </ul>
    <h1>Boolean, Nullish 값 넣기</h1>
    <ul>
      <li>{true}</li>
      <li>{false}</li>
      <li>{undefined}</li>
      <li>{null}</li>
    </ul>
    <h1>Object, Array 넣기</h1>
    <ul>
      {/* Error - 객체 타입은 JSX 문법으로 바로 사용할 수 없다. */}
      {/* <li>{obj}</li> */}
      {Object.keys(obj).map((key) => (
        <li key={key}>
          {key}: {obj[key]}
        </li>
      ))}
      <li>{arr}</li>
      <li>
        {[
          <div key='1'>111</div>,
          <div key='2'>222</div>,
          <div key='3'>333</div>,
        ]}
      </li>
    </ul>
    <h1>주석 넣기</h1>
    <ul>
      <li>{/* 주석입니다. */}</li>
    </ul>
    <h1>태그 속석에 넣기</h1>
    <ul>
      <li>
        <img src={imageUrl} alt='logo' />
      </li>
    </ul>
  </div>
);

function JavaScript() {
  return <>{element}</>;
}

export default JavaScript;
