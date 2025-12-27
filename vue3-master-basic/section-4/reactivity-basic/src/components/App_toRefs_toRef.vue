<template>
  <div>
    <p>author: {{ author }}</p>
    <p>title: {{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
  setup() {
    // 반응형 상태 구조 분해하기 (Destructuring)
    const book = reactive({
      author: 'Vue Team',
      year: '2020',
      title: 'Vue 3 Guide',
      description: '당신은 지금 바로 이 책을 읽습니다,,,',
      price: '무료',
    });

    // 반응형을 잃어버림
    // const { author, title } = book;

    // 반응형 상태 동기화
    // const { author, title } = toRefs(book);

    // 하나만 가져오고 싶을 경우 toRef 사용
    const author = toRef(book, 'author');
    const title = toRef(book, 'title');

    return { author, title, book };
  },
};
</script>

<style lang="scss" scoped></style>
