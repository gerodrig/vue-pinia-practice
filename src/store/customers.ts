import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Customer } from '@/customers/interfaces/customers';

export const useCustomersStore = defineStore('customers', () => {

  const currentPage = ref<number>(1);
  const totalPages = ref<number>(5);
  const customers = ref<Customer[]>([]);


  return {
    // state
    currentPage,
    totalPages,
    customers,

    // Getters
    //return computed

    // Actions
    setCustomers( newCustomers: Customer[] ) {
      customers.value = newCustomers;
    },
    setPage( newPage: number ) {
        if(currentPage.value === newPage) return;
        if(newPage < 1) return;

        currentPage.value = newPage;
    }
  };
});