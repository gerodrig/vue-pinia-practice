<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterOptionsStore } from '@/store/counter-options';
import CounterOptionsValue from '@/counter/components/CounterOptionsValue.vue';
//?SetupStore
const counterStore = useCounterOptionsStore();
const { count, squaredCount } = storeToRefs(counterStore);
const { increment, incrementBy } = counterStore;
</script>

<template>
  <div>
    <h1>Pinia Options</h1>
    <h4>Counter: {{ count }}</h4>
    <h4>Square: {{ squaredCount }}</h4>
  </div>
  <br />

  <div>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterStore.$reset">Reset</button>

    <br />
    <CounterOptionsValue />
  </div>
</template>

<style scoped></style>
