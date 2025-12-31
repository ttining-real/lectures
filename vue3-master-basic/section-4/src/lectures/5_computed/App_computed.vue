<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <!-- <p>{{ teacher.lectures.length > 0 ? '있음 🙆' : '없음 🙅‍♀️' }}</p> -->
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <p>{{ existLecture() }}</p>
    <button v-on:click="counter++">Counter: {{ counter }}</button>
    <h2>이름</h2>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
  setup() {
    const teacher = reactive({
      name: '짐코딩',
      // lectures: [],
      lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
    });

    // 계산된 결과를 캐시 (비용 ↓ / 성능면에서 유리함)
    const hasLecture = computed(() => {
      console.log('computed');

      return teacher.lectures.length > 0 ? '있음 🙆' : '없음 🙅‍♀️';
    });

    // 실행될 때마다 계산
    const existLecture = () => {
      console.log('method');

      return teacher.lectures.length > 0 ? '있음 🙆' : '없음 🙅‍♀️';
    };

    const counter = ref(0);

    const firstName = ref('홍');
    const lastName = ref('길동');
    // const fullName = computed(() => firstName.value + ' ' + lastName.value);

    // 쓰기가 필요할 경우, getter와 setter 함수 적용 가능
    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value;
      },
      set(value) {
        // console.log('value: ', value);
        // console.log(value.split(' '));
        // const [first, last] = value.split(' ');
        // console.log('first: ', first);
        // console.log('last: ', last);

        [firstName.value, lastName.value] = value.split(' ');
      },
    });

    console.log('Console 출력: ', fullName.value);
    fullName.value = '짐 코딩'; // readonly 경고 발생

    return {
      teacher,
      hasLecture,
      existLecture,
      counter,
      fullName,
    };
  },
};
</script>

<style lang="scss" scoped></style>
