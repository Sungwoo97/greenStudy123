<script setup>
// import { ref, nextTick } from 'vue'
// const count = ref(0)

import { reactive, nextTick } from 'vue';
const state = reactive({count:0})

// 기능(Actions)
async function increment() {
  state.count++;

   // 아직 DOM 업데이트되지 않음.
   console.log(document.getElementById('counter').textContent) // 0

    await nextTick()
    // 이제 DOM 업데이트됨.
    console.log(document.getElementById('counter').textContent) // 1
}
</script>

<!-- 뷰(view) -->

<template>
  <div class="content">
    <h1>상태관리(reactive)</h1>
    <div id="counter">{{ state.count }}</div>
    <button @click="increment">Add Count</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .content {
    min-height: 100vh;
  }
}
</style>
