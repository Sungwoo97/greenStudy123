<script setup>
import {  ref, computed  } from 'vue';


const langs = ref(
  [
    {
      parentLangs: 'front' ,
      items:[
        { lang: 'HTML'},
        { lang: 'CSS'},
      ]
    }
  ,   
  
    {
      parentLangs: 'back' ,
      items:[
        { lang: 'node.js'},
        { lang: 'python'},
      ]
    }
  ]   
);
const numbers = ref([1,2,3,4,5]);

const evenNumber = computed(()=>
  numbers.value.filter(num=> num % 2 === 0 )
);

</script>

<template>
  <div class="content">
    <h1>조건부 렌더링</h1>
    <ul>
      <li v-for="(item, idx) in langs" :key="idx">
        {{ item.parentLangs }} 
        <ul>
          <li v-for="(item, idx) in item.items" :key="idx">
            {{ idx }}번째 {{ item.lang }} 
          </li>
        </ul>
      </li>
    </ul>
    <hr>
    <span v-for="num in 10" :key="num">{{ num }}</span>
    <hr>
    <ul>
      <template v-for="item in langs" :key="item.id">
        <li>{{ item.parentLangs }}</li>
      </template>
    </ul>
    <h2>배열 교체</h2>
    {{  evenNumber }}
    <ul>
      <li v-for="even in evenNumber" :key="even.id"> {{ even }}</li>
    </ul>
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
