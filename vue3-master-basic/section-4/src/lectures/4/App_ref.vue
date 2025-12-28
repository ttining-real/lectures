<template>
  <div>
    <!-- <p>{{ message }}</p> -->
    <!-- <p>{{ message.value }}</p> -->
    <p>{{ message }}</p>
    <button type="button" v-on:click="addMessage">add Click</button>
  </div>
</template>

<script>
// import { reactive, ref } from 'vue';
import { ref } from 'vue';

export default {
  // setup() {
  //   let message = reactive('Hello Vue!');
  //   const addMessage = () => {
  //     message = message + '!';
  //   };

  //   return { message, addMessage };
  // },

  // reactive로 primitive 값 변경하기
  setup() {
    // let message = reactive({ value: 'Hello Vue!' });

    let message = ref('Hello Vue!');

    const addMessage = () => {
      message.value = message.value + '!';
    };

    console.log(message);

    console.log('message: ', message.value);
    console.log('message typeof: ', typeof message.value);

    return { message, addMessage };
  },
};
</script>

<style lang="scss" scoped></style>
