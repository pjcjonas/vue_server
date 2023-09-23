<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore();
</script>
<template>
  <div class="about">
    <div class="container">
      <h1 class="title">About</h1>
      <p class="description">This is an about page</p>
      <p>Count: {{ store.count }}</p>
      <p>Double Count: {{ store.doubleCount }}</p>
      <button @click="store.increment">Increment</button>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
