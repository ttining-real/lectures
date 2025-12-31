<template>
  <div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);

    const obj = reactive({
      count: 0,
    });

    // watch(
    //   () => x.value + y.value,
    //   (sum, oldValue) => {
    //     console.log('sum: ', sum);
    //     console.log('oldValue: ', oldValue);
    //   }
    // );

    // 배열
    // watch([x, y], ([newX, newY]) => {
    //   console.log(newX, newY);
    // });

    // 객체
    // watch(obj, (newValue, oldValue) => {
    //   console.log('newValue: ', newValue);
    //   console.log('oldValue: ', oldValue);
    // });
    // 특정 요소를 감지하고 싶을 경우 getter 사용
    // watch(
    //   () => obj.count,
    //   (newValue, oldValue) => {
    //     console.log('newValue: ', newValue);
    //   }
    // );

    // 깊은 감시
    const person = reactive({
      name: '홍길동',
      age: 30,
      hobby: '운동',
      obj: {
        count: 0,
      },
    });

    // watch(person, newValue => {
    //   console.log('newValue: ', newValue);
    // });

    watch(
      () => person.obj,
      newValue => {
        console.log('newValue: ', newValue);
      }
    );

    return { x, y, obj, person };
  },
};
</script>

<style lang="scss" scoped></style>
