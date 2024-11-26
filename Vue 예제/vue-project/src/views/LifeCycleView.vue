<script>

export default {
  mounted() {
    console.log(`컴포넌트가 마운트 됐습니다.`);
  },
  beforeMount()  {
    console.log(`마운트 시작 이전`);
  },
  beforeUpdate()  {
    console.log(`업데이트 시작 이전`);
  },
  updated()  {
    console.log(`업데이트 완료 후`);
  },
  data(){
    return {
      count : 0
    }
  }
}
</script>

<!-- 
 <script setup>
import { onMounted, onBeforeMount, ref, onBeforeUpdate, onUpdated } from 'vue'

onMounted(() => {
  console.log(`컴포넌트가 마운트 됐습니다.`);
})
onBeforeMount(() => {
  console.log(`마운트 시작 이전`);
})
onBeforeUpdate(() => {
  console.log(`업데이트 시작 이전`);
})
onUpdated(() => {
  console.log(`업데이트 완료 후`);
})
const count = ref(0);
</script>
 -->

<template>
  {{ console.log(`초기 렌더링 시작.`) }}
  <div class="content">
    <h1>생명주기 훅</h1>
    <button @click="count++">+</button>
    <div>{{ count }}</div>
  </div>
  {{ console.log(`초기 렌더링 끝.`) }}
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
