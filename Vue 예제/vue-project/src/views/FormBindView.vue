<script setup>
import { ref } from 'vue';

const message1 = ref('');
const message2 = ref('');
const message3 = ref('');
const checked = ref(false);
const names = ref([]);
const food = ref('짜장');
const options = ref ([
  {text:'하나', value:1},
  {text:'둘', value:2},
  {text:'셋', value:3},
])
const selected = ref(1);

</script>


<template>
  <div class="content">
    <h1>Form 입력 바인딩</h1>
    <h5>@input</h5>
    <input type="text" @input="e=> message1 = e.target.value">
    <p>{{ message1 }}</p>
    <hr>
    <h5>v-model</h5>
    <input type="text" v-model="message2">  <!-- 한글 실시간 지원 X -->
    <p>{{ message2 }}</p>
    <hr>
    <textarea name="" id="" v-model="message3"></textarea>
    <p>{{ message3 }}</p>
    <hr>
    <input type="checkbox" name="" id="checked" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <hr>
    <p>체크한 이름 : {{ names }}</p>
    <input type="checkbox" value="홍길동" id="hong" v-model="names">
    <label for="hong">홍길동</label>
    <input type="checkbox" value="이도령" id="lee" v-model="names">
    <label for="lee">이도령</label>
    <input type="checkbox" value="성춘향" id="sung" v-model="names">
    <label for="sung">성춘향</label>
    <hr>
    <div>점심 메뉴 : {{ food }}</div>
    <input type="radio" value="짜장면" id="jjazang" v-model="food">
    <label for="jjazang">짜장면</label>
    <input type="radio" value="짬뽕" id="jjambong" v-model="food">
    <label for="jjambong">짬뽕</label>
    <hr>
    <select name="" id="" v-model="selected" >
      <option :value="option.value" v-for="option in options" :key="option.id">{{ option.text }}</option>
    </select>
    <p>{{ selected }}</p>
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
