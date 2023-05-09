
<script setup lang="ts">
import type { Customer } from '../interfaces/customers';


interface Props {
    customers: Customer[];
}

defineProps<Props>();

</script>

<template>
    <ul>
        <li v-for="customer of customers" :key="customer.id">
            <RouterLink :to="{
                name: 'customer-id',
                params: { id: customer.id }
            }">
                {{  customer.name }}
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>

</style>