<script setup>
import { ref, nextTick } from 'vue'

// 상태(State)
const count = ref(0)

// 기능(Actions)
async function increment() {
  count.value++;

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
    <h1>상태관리(ref)</h1>
    <div id="counter">{{ count }}</div>
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
