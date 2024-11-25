<script setup>
import { ref } from 'vue';

const count = ref(0);

// const addNum = function(){
//   count.value++;
// }

const addNum = ()=>{
  count.value++;
}

const say= (message, event)=>{
  if(event){
    event.preventdafault();
    alert(message);

  }
}

const say2= (message )=>{
    alert(message);
}

const doThis = ()=>{
  alert('버블링 차단했습니다.');
}
const doThis2 = ()=>{
  alert('doThi 실행.');
}
const doThat = ()=>{
  alert('버블링 차단, 기본속성 막기');
}

</script>

<template>
  <div class="content">
    <h1>Event</h1>
    <h2>인라인 핸들러</h2>
    <button @click="count++">+</button>
    <p>num = {{ count }}</p>
    <h2>메서드 핸들러</h2>
    <button @click="addNum">+</button>
    <p>num = {{ count }}</p>
    <h2>인라인 핸들러에서 메서드 호출하기</h2>
    <button @click="say('안녕')">안녕이라고 말하기</button>
    <button @click="say('잘가')">잘가라고 말하기</button>
    <hr>
    <form @submit.prevent>
      <button type="submit" @click="say('안녕', $event)">안녕이라고 말하기</button>
      <button type="submit" @click="event=>{say('잘가', event)}">잘가라고 말하기</button>

      <button type="submit" @click="say2('안녕', $event)">안녕이라고 말하기</button>
      <button type="submit" @click="say2('잘가')">잘가라고 말하기</button>

  </form>
  <h2>수식어</h2>
    <!-- 클릭 이벤트 전파가 중지됩니다. -->
     <div id="link">
      <span  @click.stop.prevent="doThis" >link</span>
     </div>
     <a href="http://www.naver.com" @click="doThis2">
      <span  @click.stop.prevent="doThis" >link</span>
     </a>
    <a @click.prevent="doThis" href="http://www.naver.com" :target="_blank">링크</a>

    <!-- submit 이벤트가 더 이상 페이지 리로드하지 않습니다. -->
    <form @submit.prevent="onSubmit">
      <input type="text">
      <button>Button</button>
    </form>

    <!-- 수식어를 연결할 수 있습니다. -->
    <a @click.stop.prevent="doThat">doThat</a>

    <!-- 이벤트에 핸들러 없이 수식어만 사용할 수 있습니다. -->
    <form @submit.prevent></form>

    <!-- event.target이 엘리먼트 자신일 경우에만 핸들러가 실행됩니다. -->
    <!-- 예를 들어 자식 엘리먼트에서 클릭 액션이 있으면 핸들러가 실행되지 않습니다. -->
    <div @click="doThat">doThat
      <button @click="doThis">버튼</button>
    </div>
    
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
