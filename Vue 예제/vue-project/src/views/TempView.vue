<script setup>
  const rawHTML = '<a href="">Link</a>';
  const pid = 10;
  const isButtonDisabled = true;

  const objectAttr = {
    id: 'container',
    class : 'wrapper'
  }

  const number = 30;
  const ok = false;
  const message = "안녕";

  const sayHello = (msg)=>{
    // alert(msg);
    return '인사';
  }
  const seen = true;

  const items = [
    {id:1, title:'제목1'},
    {id:2, title:'제목2'},
    {id:3, title:'제목3'},
  ]
  const url = 'http://www.abc.com';
  const openAlert = (txt)=>{
    alert(txt);
  }
  let attrName = 'href';
</script>
<template>
  <div class="temp">
    <h1>기초문법 페이지</h1>
    <div  v-bind="objectAttr">
      <p>텍스트 보간법 : {{ rawHTML }}</p>
      <p>v-html 디렉티브 사용: <span v-html="rawHTML"></span></p>
    </div>
    <div v-bind:id="pid">프로젝트 id:{{ pid }}</div>
    <button>버튼</button>
    <button :disabled="isButtonDisabled">버튼</button>
    <button :disabled="!isButtonDisabled">버튼</button>
    <hr>
    <div>
      <p>{{ number + 1 }}</p>   
      <p>{{ ok ? '예' : '아니오' }}</p>
      <p>{{ message.split('').reverse().join('') }}</p>
      <p v-bind:id="pid">id:{{ pid }}</p>
      <p :id="pid">id:{{ pid }}</p>
      <span :title="sayHello('안녕')"></span>
      {{ sayHello('안녕2') }}
      <p v-if="!seen">내용을 볼 수 있어요</p>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
      <a :href="url">abc</a>
      <button @click="openAlert('경고')">경고 띄우기</button>
      동적 바인딩
      <a :[attrName]="url">abc</a>
    </div>
    <form action=""  @submit.prevent="sendform">
      <input type="text" name="" id="">
      <button type="submit">전송</button>
    </form>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .temp {
    min-height: 100vh;
  }
}
</style>
