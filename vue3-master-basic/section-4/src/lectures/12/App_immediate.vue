<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const message = ref('Hello Vue3');
    const reverseMessage = ref('');

    // (2)
    // const reverseFunction = newValue => {
    //   console.log('즉시 실행함!');
    //   reverseMessage.value = newValue.split('').reverse().join('');
    // };

    // (3)
    const reverseFunction = () => {
      console.log('즉시 실행함!');
      reverseMessage.value = message.value.split('').reverse().join('');
    };

    // (1)
    // watch(
    //   message,
    //   newValue => {
    //     console.log('즉시 실행함!');

    //     reverseMessage.value = newValue.split('').reverse().join('');
    //   },
    //   // 즉시 실행하고 싶은 경우, 3번 째 인자 사용
    //   {
    //     immediate: true,
    //   }
    // );

    watch(message, reverseFunction);

    // (2)
    // reverseFunction(message.value);

    // (3)
    reverseFunction();

    return { message, reverseMessage };
  },
};
</script>

<style lang="scss" scoped></style>
