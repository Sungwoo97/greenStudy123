<script setup>
import {  ref } from 'vue';

  const awesome = ref(true);
  const type = ref('D');
  const page = ref(true);
  //computed 함수는 값을 계산하고 반환만 할 수 있다. 상태변경은 불가능하다
  const myfunc = ()=>{
    return awesome.value = !awesome.value;
  }

</script>

<template>
  <button @click="page = !page">페이지 전환</button>
  <!-- <div class="content">
    <h1>조건부 렌더링</h1>
    <h2 v-if="awesome">Vue 멋져요!</h2>
    <h2 v-else>몰라요</h2>
    <button @click="myfunc">Toggle Button</button>
    <hr>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      A/B/C 아님
    </div>
  </div> -->
  <template v-if="page">
    <h1>page 1</h1>
  </template>
  <template v-if="page == false">
    <h1>page 2</h1>
  </template>
</template>

<style>
@media (min-width: 1024px) {
  .content {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
