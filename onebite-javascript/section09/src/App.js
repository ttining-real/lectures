// 컴포넌트
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetail.js";

// API
import { request, requestCityDetail } from "./components/api.js";

export default function App($app) {
  // 새로 고침 시, 정렬 값과 검색 결과 유지
  const getSortBy = () => {
    if (window.location.search) {
      return window.location.search.split("sort=")[1].split("&")[0];
    }
    return "total";
  };

  const getSearchWord = () => {
    if (window.location.search && window.location.search.includes("search=")) {
      return window.location.search.split("search=")[1];
    }
    return "";
  };

  // 상태
  this.state = {
    startIdx: 0,
    sortBy: getSortBy(),
    searchWord: getSearchWord(),
    region: "",
    cities: "",
    currentPage: window.location.pathname,
  };

  // 생성자 함수 - 컴포넌트 인스턴스 생성
  const renderHeader = () => {
    new Header({
      $app,
      initialState: {
        sortBy: this.state.sortBy,
        searchWord: this.state.searchWord,
        currentPage: this.state.currentPage,
      },
      handleSortChange: async (sortBy) => {
        const pageUrl = `/${this.state.region}?sort=${sortBy}`;
        history.pushState(
          null,
          null,
          this.state.searchWord
            ? pageUrl + `&search=${this.state.searchWord}`
            : pageUrl
        );
        const cities = await request(
          0,
          this.state.region,
          sortBy,
          this.state.searchWord
        );
        this.setState({
          ...this.state,
          startIdx: 0,
          sortBy: sortBy,
          cities: cities,
        });
      },
      handleSearch: async (searchWord) => {
        history.pushState(
          null,
          null,
          `/${this.state.region}?sort=${this.state.sortBy}&search=${searchWord}`
        );
        const cities = await request(
          0,
          this.state.region,
          this.state.sortBy,
          searchWord
        );
        this.setState({
          ...this.state,
          startIdx: 0,
          searchWord: searchWord,
          cities: cities,
        });
      },
    });
  };

  const renderRegionList = () => {
    new RegionList({
      $app,
      initialState: this.state.region,
      handleRegion: async (region) => {
        history.pushState(null, null, `/${region}?sort=total`);
        const cities = await request(0, region, "total");
        this.setState({
          ...this.state,
          startIdx: 0,
          sortBy: "total",
          region: region,
          searchWord: "",
          cities: cities,
        });
      },
    });
  };

  const renderCityList = () => {
    new CityList({
      $app,
      initialState: this.state.cities,
      // 더보기 버튼 클릭 시
      handleLoadMore: async () => {
        const newStartIdx = this.state.startIdx + 40;
        const newCities = await request(
          newStartIdx,
          this.state.region,
          this.state.sortBy,
          this.state.searchWord
        );
        this.setState({
          ...this.state,
          startIdx: newStartIdx,
          cities: {
            cities: [...this.state.cities.cities, ...newCities.cities],
            isEnd: newCities.isEnd,
          },
        });
      },
      handleItemClick: (id) => {
        history.pushState(null, null, `/city/${id}`);
        this.setState({
          ...this.state,
          currentPage: `/city/${id}`,
        });
      },
    });
  };

  const renderCityDetail = async (cityId) => {
    // API 호출
    try {
      const cityDetailData = await requestCityDetail(cityId);

      // 생성자
      new CityDetail({ $app, initialState: cityDetailData });
    } catch (err) {
      console.log(err);
    }
  };

  // 상태 값 변경
  this.setState = (newState) => {
    this.state = newState;
    render();
  };

  // render 함수
  const render = () => {
    const path = this.state.currentPage;
    $app.innerHTML = "";

    if (path.startsWith("/city/")) {
      const cityId = path.split("/city/")[1];

      renderHeader();
      renderCityDetail(cityId);
    } else {
      renderHeader();
      renderRegionList();
      renderCityList();
    }
  };

  // 뒤로 가기, 앞으로 가기
  window.addEventListener("popstate", async () => {
    const urlPath = window.location.pathname; // 현재 페이지의 URL

    const prevRegion = urlPath.replace("/", "");
    const prevSortBy = getSortBy();
    const prevSearchWord = getSearchWord();
    const prevStartIdx = 0;
    const prevCities = await request(
      prevStartIdx,
      prevRegion,
      prevSortBy,
      prevSearchWord
    );

    this.setState({
      ...this.state,
      startIdx: prevStartIdx,
      sortBy: prevSortBy,
      region: prevRegion,
      searchWord: prevSearchWord,
      cities: prevCities,
      currentPage: urlPath,
    });
  });

  // 웹 사이트 처음 접속 시 실행할 코드
  const init = async () => {
    const path = this.state.currentPage;
    $app.innerHTML = "";

    if (path.startsWith("/city/")) {
      render();
    } else {
      const cities = await request(
        this.state.startIdx,
        this.state.region,
        this.state.sortBy,
        this.state.searchWord
      );
      this.setState({
        ...this.state,
        cities: cities,
      });
    }
  };

  // init 함수 호출
  init();
}
