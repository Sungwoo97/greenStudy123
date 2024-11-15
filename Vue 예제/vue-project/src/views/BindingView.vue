<script setup>
import { ref, reactive, computed } from 'vue';

  const isActive = ref(true);
  const hasError = ref(false);

  // const classObj = reactive ({
  //   active:true,
  //   error:true
  // })
  const myfunc = computed(()=> {
    return {
      active:isActive.value ,
      error:hasError.value   
    }
  })
</script>

<template>
  <div class="about">
    <h1>클래스와 스타일 바인딩</h1>
    <div class="static" :class="myfunc">content</div>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
