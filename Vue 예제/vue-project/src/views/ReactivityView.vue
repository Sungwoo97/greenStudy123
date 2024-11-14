<script setup>
import { ref } from 'vue'

// 상태(State)
const count = ref(0)

// 기능(Actions)
function increment() {
  count.value++
}
</script>

<!-- 뷰(view) -->

<template>
  <div class="content">
    <h1>반응 기초</h1>
    <div>{{ count }}</div>
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
