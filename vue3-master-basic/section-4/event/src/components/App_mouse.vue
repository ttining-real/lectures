<template>
  <div>
    <div id="modifiers">
      <!-- <div @click.capture="clickDiv"> -->
      <div @click="clickDiv">
        DIV 영역
        <!-- <p @click.capture="clickP"> -->
        <p @click.self="clickP">
          P 영역
          <!-- <span @click="clickSpan">SPAN 영역</span> -->
          <!-- <span @click.stop="clickSpan">SPAN 영역</span> -->
          <span @click="clickSpan">SPAN 영역</span>

          <!-- 수식어 이어서 사용 가능 -->
          <a href="https://naver.com" @click.prevent.stop="clickA">A 영역</a>
        </p>
      </div>
      <button @click.once="clickDiv">once</button>
    </div>
    <!-- <a href="https://naver.com" @click="clickA">A 영역</a> -->
    <a href="https://naver.com" @click.prevent="clickA">A 영역</a>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv');
      // location.href = 'https://naver.com';
    };

    const clickP = () => {
      console.log('clickP');
    };

    // const clickSpan = e => {
    //   console.log('clickSpan');
    //   // 이벤트 전파 방지
    //   e.stopPropagation();
    //   alert('좋아요');
    // };
    const clickSpan = () => {
      console.log('clickSpan');
      // alert('좋아요');
    };

    // const clickA = e => {
    //   e.preventDefault();
    //   alert('어떤 기능');
    // };
    const clickA = () => {
      alert('어떤 기능');
    };

    return { clickDiv, clickP, clickSpan, clickA };
  },
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background-color: #ccc;
}

#modifiers p {
  background-color: #999;
}
#modifiers span {
  background-color: #666;
  display: block;
}
</style>
