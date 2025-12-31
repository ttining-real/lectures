<template>
  <div>
    <section>
      <!-- * input -->
      <h2>input value</h2>
      <!-- * 정방향 바인딩 -->
      <!-- <p>정방향 바인딩</p>
      <input type="text" :value="inputValue" />
      <div>{{ inputValue }}</div> -->

      <!-- * 정방향 → 양방향 -->
      <!-- <p>정방향 → 양방향</p>
      <input
        type="text"
        :value="inputValue"
        @input="event => (inputValue = event.target.value)"
      />
      <div>{{ inputValue }}</div> -->

      <!-- * 양방향 바인딩 -->
      <p>양방향 바인딩</p>
      <!-- <input type="text" v-model.lazy="inputValue" />
      <input type="text" v-model.number="inputValue" /> -->
      <input type="text" v-model.trim="inputValue" />
      <div>{{ inputValue }}</div>
      <div>{{ typeof inputValue }}</div>

      <hr />

      <!-- * textarea -->
      <h2>textarea value</h2>
      <!-- <textarea
        :value="textareaValue"
        @input="event => (textareaValue = event.target.value)"
      ></textarea> -->
      <textarea v-model="textareaValue"></textarea>
      <div>{{ textareaValue }}</div>
    </section>

    <hr />

    <section>
      <!-- * checkbox -->
      <h2>checkbox value</h2>
      <label for="checkbox">{{ checkboxValue }}</label>
      <!-- <input
        type="checkbox"
        id="checkbox"
        :checked="checkboxValue"
        @change="event => (checkboxValue = event.target.checked)"
      /> -->
      <input
        type="checkbox"
        id="checkbox"
        v-model="checkboxValue"
        true-value="Yes"
        false-value="No"
      />
      <br />
      <h3>checkbox values</h3>
      <label for="">
        <input type="checkbox" value="html" v-model="checkboxValues" />
        HTML
      </label>
      <label for="">
        <input type="checkbox" value="css" v-model="checkboxValues" />
        CSS
      </label>
      <label for="">
        <input type="checkbox" value="javascript" v-model="checkboxValues" />
        JavaScript
      </label>
      <div>{{ checkboxValues }}</div>

      <hr />

      <!-- * radio -->
      <h2>radio value</h2>
      <label for="">
        <input type="radio" name="type" id="" value="O" v-model="radioValue" />
        <!-- :checked="radioValue === 'O'"
          @change="event => (radioValue = event.target.value)" -->
        O형
      </label>
      <label for="">
        <input type="radio" name="type" id="" value="A" v-model="radioValue" />
        <!-- :checked="radioValue === 'A'"
          @change="event => (radioValue = event.target.value)" -->
        A형
      </label>
      <div>
        {{ radioValue }}
      </div>

      <hr />

      <!-- * select -->
      <h2>select</h2>
      <select v-model="selectValue">
        <!-- :value="selectValue"
      @change="event => (selectValue = event.target.value)" -->
        <option value="html">HTML 수업</option>
        <option value="css">CSS 수업</option>
        <option value="javascript">JavaScript 수업</option>
      </select>
      <div>{{ selectValue }}</div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref('');
    const textareaValue = ref('');
    const checkboxValue = ref('YES');
    const checkboxValues = ref([]);
    const radioValue = ref('O');
    const selectValue = ref('html');
    return {
      inputValue,
      textareaValue,
      checkboxValue,
      checkboxValues,
      radioValue,
      selectValue,
    };
  },
};
</script>

<style lang="scss" scoped></style>
