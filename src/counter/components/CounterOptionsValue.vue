<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterOptionsStore } from '@/store/counter-options';


const { count, lastChanged } = storeToRefs(useCounterOptionsStore());

</script>


<template>
    <h1>The value is: {{ count }}</h1>
    <h4>Last changed: {{ lastChanged }}</h4>
</template>


