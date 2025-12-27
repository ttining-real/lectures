<template>
  <div :style="styleObject">
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil facere,
      nemo facilis dolorem ullam possimus temporibus labore commodi. Ipsam
      veritatis quis, sunt quidem consequatur ab eum explicabo doloremque
      numquam deserunt!
    </div>
    <button v-on:click="fontSize--">-</button>
    <button v-on:click="fontSize++">+</button>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  setup() {
    // const styleObject = reactive({
    //   color: 'red',
    //   fontSize: '13px',
    // });

    const fontSize = ref(13);

    const styleObject = computed(() => {
      return {
        color: 'red',
        fontSize: fontSize.value + 'px',
      };
    });

    return { styleObject, fontSize };
  },
};
</script>

<style lang="scss" scoped></style>
