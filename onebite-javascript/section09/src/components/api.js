const API_URL = "https://trip-wiki-api.vercel.app/";

export const request = async (startIdx, region, sortBy, searchWord) => {
  try {
    let url = `${API_URL}`;

    // 만약, region이라는 값이 존재하고, 'All'과 동일하지 않다면
    if (region && region !== "All") {
      url += `${region}?start=${startIdx}`;
    } else {
      url += `?start=${startIdx}`;
    }

    // 정렬 필터의 값이 존재할 경우
    if (sortBy) {
      url += `&sort=${sortBy}`;
    }

    // 검색어의 값이 존재할 경우
    if (searchWord) {
      url += `&search=${searchWord}`;
    }

    // console.log(url);

    // API 호출
    const response = await fetch(url);

    // response 값이 존재한다면
    if (response) {
      // data라는 변수에
      // await 키워드를 사용해 전달받은 response 값을 json으로 파싱
      let data = await response.json();
      console.log(data);

      // data 리턴
      return data;
    }
  } catch (err) {
    // 에러 메시지 출력
    console.log(err);
  }
};

// CityDetail API
export const requestCityDetail = async (cityId) => {
  try {
    const response = await fetch(`${API_URL}city/${cityId}`);
    if (response) {
      let data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};
