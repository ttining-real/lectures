/* -------------------------------------------------------------------------- */
/*                 Quiz 1. 우승자는? 광고 시청하고 오시겠습니다!                 */
/* -------------------------------------------------------------------------- */

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function main() {
  console.log("3초 후 결과를 공개하겠습니다!");
  await delay(3000);
  console.log("승자는 이정환!");
}

main();

/* -------------------------------------------------------------------------- */
/*                    Quiz 2. 주문 접수 -> 처리 -> 취소 하기                    */
/* -------------------------------------------------------------------------- */

/* 1. 주문하는 기능 (수정 X) */
function receiveOrder() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("주문 접수가 완료되었습니다.");
      resolve("주문번호: 123");
    }, 2000)
  );
}

/* 2. 주문을 처리하는 기능 (수정 X) */
function processOrder(orderId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`[${orderId}] 주문이 처리 되었습니다.`);
      resolve(orderId);
    }, 2000)
  );
}

/* 3. 주문을 취소하는 기능 (수정 X) */
function cancelOrder(orderId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`[${orderId}] 주문이 취소되었습니다`);
      resolve();
    }, 1500)
  );
}

// 여기에 코드를 작성하세요
receiveOrder()
  .then((orderId) => processOrder(orderId))
  .then((orderId) => cancelOrder(orderId))
  .catch((error) => console.error("에러 발생: ", error));
