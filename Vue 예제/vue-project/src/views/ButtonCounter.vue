<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="content">
    <button @click="count++">버튼을 {{ count }}번 클릭했습니다.</button>
  </div>
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
