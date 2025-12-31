<template>
  <div>
    <!-- <div class="text" :class="{ active: isActive, 'text-danger': hasError }">
      텍스트 입니다.
    </div> -->
    <!-- <div class="text" :class="classObject">텍스트 입니다.</div> -->
    <div
      class="text"
      :class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
    >
      텍스트 입니다.
    </div>
    <button type="button" v-on:click="toggle">toggle</button>
    <button type="button" v-on:click="hasError = !hasError">toggleError</button>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  setup() {
    const isActive = ref(true);
    const hasError = ref(false);

    // 클래스를 객체로 관리하기
    // const classObject = reactive({
    //   active: true,
    //   'text-danger': true,
    // });

    // 액티브 상태가 여러 개일 때, computed 활용
    const classObject = computed(() => {
      return {
        active: true && true,
        'text-danger': true && true,
        'text-blue': true,
      };
    });

    const activeClass = ref('active');
    const errorClass = ref('error');

    const toggle = () => {
      isActive.value = !isActive.value;
    };

    return { isActive, toggle, hasError, classObject, activeClass, errorClass };
  },
};
</script>

<style scoped>
.active {
  font-weight: 900;
}

.text-danger {
  color: red;
}
</style>
