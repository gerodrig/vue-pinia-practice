<script setup lang="ts">
import CustomerList from '@/customers/components/CustomerList.vue';
import PaginationNumbers from '../components/PaginationNumbers.vue';
import useCustomers from '../composables/useCustomers';
import LoadingModal from '@/shared/components/LoadingModal.vue';


const { isLoading, customers, currentPage, totalPages, getPage} = useCustomers();

</script>

<template>
    <div>
        <h1>Customers list</h1>

        <!-- Customer List -->
        <CustomerList  :customers="customers"/>

        <!-- Pagination Numbers -->
        <PaginationNumbers
          :totalPages="totalPages"
          :currentPage="currentPage"
          @page-changed="getPage"
          />

        <!-- Loading Modal -->
        <LoadingModal v-if="isLoading" />

    </div>
</template>

<style scoped></style>