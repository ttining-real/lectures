// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

// 음식 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "ice cream";
    callback(food);
  }, 3000);
}

function meltFood(food, callback) {
  setTimeout(() => {
    const meltedFood = `녹아내린 ${food}`;
    callback(meltedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `다시 얼린 ${food}`;
    callback(freezedFood);
  }, 1500);
}

// 콜백 헬
orderFood((food) => {
  console.log(food);

  meltFood(food, (meltedFood) => {
    console.log(meltedFood);

    freezeFood(food, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
