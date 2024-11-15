<script setup>
import { computed, reactive } from 'vue';

const author = reactive({
  name : '홍길동',
  books:[
    'Vue 1 - Vue Basic',
    'Vue 2 - Vue Guide',
    'Vue 3 - Vue Advanced',
  ]
})
const myfunc = computed(()=> 
  author.books.length > 0 ? '있습니다' : '없습니다'
)

</script>

<template>
  <div class="about">
    <h1>계산된 속성</h1>
    <p>책이 있습니까?</p>
    <span>{{ myfunc }}</span>
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
