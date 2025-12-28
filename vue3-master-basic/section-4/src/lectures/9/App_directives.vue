<template>
  <div>
    <p>{{ msg }}</p>
    <p v-text="msg"></p>
    <p v-html="htmlStr"></p>
    <p v-text="htmlStr"></p>
    <!-- v-once : 업데이트가 한 번만 일어난다. -->
    <p v-once>{{ msg }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('안녕하세요');
    const htmlStr = ref('<strong>안녕!!!</strong>');

    return { msg, htmlStr };
  },
};
</script>

<style lang="scss" scoped></style>
