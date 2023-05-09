<script setup lang="ts">
import { ref, toRef, watch } from 'vue';

interface Props {
  totalPages: number;
  currentPage: number;
}

interface Emits {
  (e: 'pageChanged', page: number): void;
}

//defineProps
const props = defineProps<Props>();
//defineEmits
const emits = defineEmits<Emits>();

const totalPages = toRef(props, 'totalPages');
const currentPage = toRef(props, 'currentPage');

const totalPageNumbers = ref<number[]>([]);
watch(totalPages,
  () => {
    totalPageNumbers.value = [...new Array(totalPages.value)].map((_, index) => index + 1);
  },
  { immediate: true }
)
</script>

<template>
  <div>
    <button
      :disabled="currentPage === 1"
      @click="emits('pageChanged', currentPage - 1)">
      Previous
    </button>
    <button
      v-for="number of totalPageNumbers"
      :key="number"
      @click="emits('pageChanged', number)"
      :class="{ active: currentPage === number }"
    >
      {{ number }}
    </button>
    <button
      :disabled="currentPage === totalPages"
      @click="emits('pageChanged', currentPage + 1)">Next</button>
  </div>
</template>

<style scoped>
div {
  margin-top: 10px;
}

button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  margin-right: 5px;
  padding: 10px;
  transition: all 0.5s ease-in-out;
}

button:hover {
  background-color: hsla(160, 100%, 50%, 0.1);
  transition: all 0.5s ease-in-out;
}

button:disabled {
  cursor: not-allowed;
}

button:disabled:hover {
  background-color: transparent;
  transition: all 0.5s ease-in-out;
}
.active {
  background-color: hsla(160, 100%, 50%, 0.1);
  transition: all 0.5s ease-in-out;
}
</style>
