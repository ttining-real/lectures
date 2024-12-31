export default function Content({ $app, initialState }) {
  this.state = initialState;

  // <div class="content"></div> 생성
  this.$target = document.createElement("div");
  this.$target.className = "content";
  $app.appendChild(this.$target);

  // temp에 this.state에 알맞은 img 태그 할당
  this.template = () => {
    let temp = [];
    if (this.state) {
      this.state.forEach((elm) => {
        temp += `<img src="${elm.url}"></img>`;
      });
    }

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
