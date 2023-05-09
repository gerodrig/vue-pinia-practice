<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useCustomer from '@/customers/composables/UseCustomer';
import { watch } from 'vue';

const route = useRoute();
const router = useRouter();
// const queryClient = useQueryClient();

const { customer , isLoading, isError, customerMutation  } = useCustomer( +route.params.id );

watch( isError, () => {
    if(isError.value)
        router.replace('/customers');
});

</script>

<template>
    <div>
        <h3 v-if="customerMutation.isLoading.value">Loading...</h3>
        <h3 v-if="customerMutation.isSuccess.value">Saved</h3>

        <LoadingModal v-if="isLoading" />
    </div>

    <div v-if="customer">
        <h1>{{ customer.name }}</h1>
        <form @submit.prevent="customerMutation.mutate(customer)"> 
            <input 
                type="text"
                placeholder="Name"
                v-model="customer.name"
            />
            <br>
            <input 
                type="text"
                placeholder="Address" 
                v-model="customer.address"
            />
            <br>

            <button type="submit" :disabled="customerMutation.isLoading.value">Save</button>
        </form>
        <code>
            {{ customer }}
        </code>
    </div>
</template>


<style scoped>
input {
    width: 50%;
    padding: 5px 10px;
    margin-bottom: 10px;
}
input:focus {
    outline: none;
    border: 1px solid green;
}

button {
    background-color: green;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    width: 80px;
    margin-bottom:  10px;
}

button:hover {
    background-color: darkgreen;
    cursor: pointer;
}

h3 {
    color: green;
}

</style>