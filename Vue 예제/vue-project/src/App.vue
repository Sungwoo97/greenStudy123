<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>


    <div class="wrapper">
      <HelloWorld msg="Hello " msg2="Vue!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/template">기초문법</RouterLink>
        <RouterLink to="/ref">상태관리(ref)</RouterLink>
        <RouterLink to="/reactivity">상태관리(reactive)</RouterLink>
        <RouterLink to="/computed">계산된 속성</RouterLink>
        <RouterLink to="/binding">클래스와 스타일 바인딩</RouterLink>
        <RouterLink to="/condition">조건부 렌더링</RouterLink>
        <RouterLink to="/list_render">리스트 렌더링</RouterLink>
        <RouterLink to="/event">이벤트 핸들링</RouterLink>
        <RouterLink to="/form_bind">Form 입력 바인딩</RouterLink>
        <RouterLink to="/life_cycle">생명 주기 훅</RouterLink>
        <RouterLink to="/watch">감시자</RouterLink>
        <RouterLink to="/component">컴포넌트</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
