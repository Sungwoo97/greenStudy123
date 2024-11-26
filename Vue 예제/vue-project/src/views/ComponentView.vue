<script setup>
import { ref } from 'vue';
import ButtonCounter from './ButtonCounter.vue';
import BlogPost from './BlogPost.vue';
import tab1 from './tabs/tab1.vue';
import tab2 from './tabs/tab2.vue';
import tab3 from './tabs/tab3.vue';

const posts = ref([
  {id:1, title:'title1'},
  {id:2, title:'title2'},
  {id:3, title:'title3'},
])
const fontsize = ref(1);
const tabs = {tab1, tab2, tab3};
const currentTab = ref('tab1');
const arr = ['a', 'b', 'c'];
const arrObj = {a:1, b:2, c:3};
arr.forEach((m1,m2,m3)=>{
  console.log(m1,m2,m3);
})
for(let tab in tabs){
  console.log(tab)
}
for(let arr in arrObj){
  console.log(arr, arrObj[arr])
}
Object.entries(arrObj).forEach(([key,value], idx)=>{
  console.log(key, value, idx);
})
</script>

<template>
  <div class="content">
    <h1>컴포넌트</h1>
    <ButtonCounter/>
    <ButtonCounter/>
    <ButtonCounter/>
    <hr>
    <div :style="{fontSize:fontsize+'em'}">
      <BlogPost 
        v-for="post in posts" 
        :key="post.id" 
        :title="post.title"
        @enlarge-text="fontsize += 0.1" 
        @smaller-text="fontsize -= 0.1"
      />
    </div>
    <hr>
    <h2>Tab</h2>
    <button 
      v-for="(tab, idx, value) in tabs" 
      :key="tab.id"
      @click="currentTab = idx"
    >{{ idx  }}
 </button>
    <component :is="tabs[currentTab]"/>
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
