// * 타입 추론
// 타입스크립트가 타입을 추론하는 기준 : 변수의 초기값

// let a: number = 10;

let a = 10; // number 타입으로 추론

let b = "hello"; // string 타입으로 추론

let c = {
  id: 1,
  name: "ttining",
  profile: {
    nickname: "ttining._.",
  },
  urls: ["https://github.com/ttining-real"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// * 타입이 변신하듯이 계속 바뀌는 상황 : Any 타입의 진화
let d; // 암묵적 any 타입으로 추론
d = 10; // any → number 타입으로 진화
d.toFixed();
d.toUpperCase(); // Property 'toUpperCase' does not exist on type 'number'.

d = "hello"; // number → string 타입으로 진화
d.toUpperCase();
d.toFixed(); // Property 'toFixed' does not exist on type 'string'. Did you mean 'fixed'?

const num = 10; // number literal 타입으로 추론
const str = "hello"; // string literal 타입으로 추론

let arr = [1, "string"]; // (string | number)[] Union 타입으로 추론
