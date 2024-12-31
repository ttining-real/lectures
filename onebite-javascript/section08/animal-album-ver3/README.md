### Section 8-6. 동물 앨범 만들기 3️⃣

<br>

1. 히스토리 API를 활용해 웹 페이지 라우팅 기능 추가

   ```
   history.puahState(null, `${name} 사진`, name);
   ```

2. `popstate` 이벤트가 발생하면 `URL/` 뒤쪽에 알맞은 `state` 업데이트

   ```
   window.addEventListener('popstate', ()=>{})
   ```

   `popstate` 이벤트는 '뒤로 가기', '앞으로 가기' 등의 이벤트로
   히스토리 API를 통해 브라우저 히스토리의 상태가 변경될 때마다 발생한다.

3. URL 문자열 판단 - `window.location.pathname`

   ```
   window.addEventListener('popstate', ()=>{
    console.log(window.location.pathname);
   })
   ```

<br>

🚫 **새로 고침 시 `init` 함수 실행으로 페이지를 찾을 수 없게 된다.**

🟢 **해결 방법**

1. `init` 함수 내부의 `request()`에 `currentTab` 전달
2. 서버에 어떤 요청이 오더라도 `index.html`을 반환하도록 설정
   1. `index.html` 파일 읽기
   2. `index.js` 파일 실행
   3. `app.js` 파일 실행
   4. `init` 함수 실행 ➡️ 알맞은 페이지 출력
3. 서버 환경 구축
   - Node.js
   - Express.js

<br>

#### Node.js와 Express.js

**Node.js**
Node.js는 크롬 브라우저의 v8 엔진으로 빌드된 자바스크립트의 실행 환경(런타임 환경)을 말한다.
이를 사용하면 웹 브라우저의 외부에서 자바스크립트를 실행할 수 있다.

**Express.js**
Node.js의 기능을 확장하여, 더욱 간결하고 효율적으로 웹 서버를 개발할 수 있게 도와주는 프레임워크이다.

- 복잡한 라우팅 처리
- 요청 처리 및 응답 관리
