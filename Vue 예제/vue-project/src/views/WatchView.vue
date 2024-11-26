<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('질문에는 보통 물음표가 포함됩니다. ;-)')
const answerImg = ref('');
const loading = ref(false)

watch(question, async (newQuestion)=>{
  if(newQuestion.includes('?')){
    loading.value = true;
    answer.value = '생각중...';
    try{
      const res = await fetch('https://yesno.wtf/api')
      const result = await res.json();
      answer.value = result.answer === 'yes' ? '네' : '아니오' 
      answerImg.value = result.image;
    }catch(error){
      answer.value = '에러!'+error;
    }finally {
      loading.value = false
    }
  }
})
</script>

<template>
  <div class="content">
    <h1>감시자</h1>
    <input type="text" v-model="question" :disabled="loading">
    <p>{{ answer }}</p>
    <p v-if="answerImg">
      <img :src="answerImg" alt="">
    </p>
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
