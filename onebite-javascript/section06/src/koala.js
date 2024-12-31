const API_URL = "https://animal-api-two.vercel.app/";

const $content = document.querySelector("div.content");

let template = [];

// API를 비동기 처리 해주기 위해 async await 키워드 사용
const getData = async (name) => {
  // fetch 메서드를 사용해 API 호출
  let res = await fetch(`${API_URL}${name}`);

  // try catch 문을 사용해 에러 처리
  try {
    if (res) {
      let data = await res.json();
      // console.log(data);

      data.photos.forEach((elm) => {
        // console.log(elm);
        template += `<img src=${elm.url}></img>`;
      });

      $content.innerHTML = template;
    }
  } catch (err) {
    console.log(err);
  }
};

getData("koala");
