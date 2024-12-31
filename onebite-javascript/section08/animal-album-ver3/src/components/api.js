const API_URL = "https://animal-api-two.vercel.app/";

// API를 비동기 처리 해주기 위해 async await 키워드 사용
export const request = async (name) => {
  // 버튼에 알맞은 동물 사진 출력을 위해 name 매개변수 전달
  // fetch 메서드를 사용해 API 호출
  // let res = await fetch(API_URL);

  // name이 존재하면? AP 주소 뒤에 매개변수 값을 넣어서 출력 : 매개변수가 존재하지 않으면 기본 API 주소로 호출
  let res = await fetch(name ? `${API_URL}${name}` : API_URL);

  // try catch 문을 사용해 에러 처리
  try {
    if (res) {
      let data = await res.json();
      return data.photos;
    }
  } catch (err) {
    console.log(err);
  }
};
