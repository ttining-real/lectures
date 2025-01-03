const arr = [1, 2, 3];
// const arr = [];
const text = "";

function Condition() {
  return (
    <>
      <div>
        <h1>삼항연산자</h1>
        <ul>
          <li>{1 + 1 === 2 ? "참입니다." : "거짓입니다."}</li>
        </ul>

        <h1>AND 연산자</h1>
        <ul>
          <li>{1 + 1 === 2 && "AND 연산자1"}</li>
          <li>{1 + 1 !== 2 && "AND 연산자1"}</li>
          <li>{arr.length && "AND 연산자2"}</li>
          {/* <li>{!!arr.length && "AND 연산자2"}</li> */}
        </ul>

        <h1>OR 연산자</h1>
        <ul>
          <li>{1 + 1 !== 2 || "OR 연산자1"}</li>
          <li>{text || "OR 연산자2"}</li>
        </ul>

        <h1>IF문 (즉시실행함수)</h1>
        <ul>
          <li>
            {(() => {
              if (1 + 1 === 2) return "IF";
              else return "ELSE";
            })()}
          </li>
          <li>
            {(() => {
              const data = "즉시실행함수";

              /* 어떤 연산이든 추가 가능 */
              /* 일반적으로는 이렇게 즉시실행함수가
         미리 위에서 가공하여 전달 */

              return data;
            })()}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Condition;
