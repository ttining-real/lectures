<template>
  <div>
    <h2>보간법</h2>

    <!-- 텍스트 보간법 {{ data }} -->
    <p>문자열: {{ message }}</p>

    <!-- v-once : 디렉티브를 사용하여 데이터가 변경되어도 갱신(반응)되지 않는 일회성 보간 수행 -->
    <p v-once>문자열: {{ message }}</p>

    <button v-on:click="message = message + '!'">Click!</button>

    <hr />
    <!-- v-html : XSS 취약점 주의 -->
    <h2>v-html</h2>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <hr />
    <!-- v-bind -->
    <h2>속성 바인딩</h2>
    <div title="안녕하세요">마우스를 올려보세요</div>
    <div v-bind:title="dynamicTitle">마우스를 올려보세요</div>
    <div :title="dynamicTitle">마우스를 올려보세요</div>

    <input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />

    <!-- 디중 속성을 하나의 객체로 한꺼번에 바인딩 -->
    <input v-bind="attrs" />
    <hr />

    <!-- {{  }} 는 데이터 뿐만 아니라 자바스크립트 표현식도 가능 -->
    <h2>JavaScript</h2>
    {{ message.split('').reverse().join('') }} <br />
    {{ isInputDisabled ? '예' : '아니오' }}
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('안녕하세요');
    const rawHtml = ref('<strong>안녕하세요</strong>');

    const dynamicTitle = ref('안녕하세요');
    const isInputDisabled = ref(true);

    const attrs = ref({
      type: 'password',
      value: '12345678',
      disabled: false,
    });

    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs,
    };
  },
};
</script>

<style lang="scss" scoped></style>
