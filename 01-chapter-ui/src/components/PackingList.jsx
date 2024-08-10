// 조건부 렌더링
function Item({ name, isPacked, importance }) {
  // if 문 사용
  // if (isPacked) {
  //   return <li className="item">{name} ✔</li>;

  //   // true인 항목을 보여주고 싶지 않을 경우
  //   // return null;
  // }
  // return <li className="item">{name}</li>;

  // 삼항 조건 연산자
  // return <li className="item">{isPacked ? <del>{name + '✔'}</del> : name}</li>;
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'} {importance > 0 && ' '}
      {importance > 0 && <i>(Importance: {importance})</i>}
    </li>
  );

  // 논리 AND 연산자 (&&)
  // return (
  //   <li className="item">
  //     {name}
  //     {isPacked && '✔'}
  //   </li>
  // );

  // 변수에 조건부로 JSX 할당
  // let itemContent = name;
  // if (isPacked) {
  //   itemContent = <del>{name + '✔'}</del>;
  // }
  // return <li className="item">{itemContent}</li>;
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" importance={9} />
        <Item isPacked={true} name="Helmet with a golden leaf" importance={0} />
        <Item isPacked={false} name="Photo of Tam" importance={6} />
      </ul>
    </section>
  );
}

export default PackingList;
