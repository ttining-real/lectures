/* -------------------------------------------------------------------------- */
/*                               label + select                               */
/* -------------------------------------------------------------------------- */

// let $fruitSelect = document.getElementById("fruitSelect");

// select 요소의 옵션을 변경할 때마다 이벤트를 감지하여 작업 처리
// $fruitSelect.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

// 옵션 태그 중 특정 값 삭제하기
// $fruitSelect.remove(1);

/* -------------------------------------------------------------------------- */
/*                                label + input                               */
/* -------------------------------------------------------------------------- */

let $userName = document.getElementById("userName");
let $password = document.getElementById("password");

const $loginButton = document.querySelector("button");

$loginButton.addEventListener("click", () => {
  console.log($userName.value);
  console.log($password.value);
});

// userName의 값 수정하기
$userName.value = "맘마";

// 입력 폼에 값이 입력될 때마다 입력된 값 가져오기
$password.addEventListener("input", (event) => {
  console.log(event.target.value);
});
