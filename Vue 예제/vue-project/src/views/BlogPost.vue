<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  }
})
defineEmits(['enlarge-text'], ['smaller-text']);

  

</script>

<template>
  <div class="content">
    <h3>{{ title }}</h3>
    <button @click="$emit('enlarge-text')">텍스트 확대</button>
    <button @click="$emit('smaller-text')">텍스트 축소</button>
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
