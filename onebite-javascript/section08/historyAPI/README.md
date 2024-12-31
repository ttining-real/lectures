### Section 8-5. SPA와 라우팅

**✨ `history` API란, ✨**
브라우저가 관리하는 세션 히스토리(Session History)를 제어할 수 있도록 HTML5에서 제공하는 웹 API이다.
이를 통해 사용자가 웹 브라우저를 사용해 방문한 페이지의 목록을 다룰 수 있으며,
SPA(Single Page Application)와 라우팅을 구현할 때 자주 사용된다.

<br>

**🙌 `history` API 사용하기 🙌**

- `history` 객체의 `pushState` 메서드 (세션 히스토리에 현재 상태 추가하기)

  ```
  history.pushState(state, title, url);
  ```

- `addEventListener`의 `popstate` 사용하기 (히스토리 값이 변경될 때 발생하는 이벤트)

  ```
  window.addEventListener('popstate', (event) => {});
  ```
