// import { ref } from 'vue';
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuery } from '@tanstack/vue-query';

import type { Customer } from '@/customers/interfaces/customers';
import customersApi from '@/api/customers-api';
import { useCustomersStore } from '@/store/customers';

const getCustomers = async (page: number): Promise<Customer[]> => {

  //make request slower
  // await new Promise( resolve => setTimeout(resolve, 1500));

  const { data } = await customersApi.get<Customer[]>(`/customers?_page=${page}`);

  return data;
};

export default function useCustomers() {
  
  const store = useCustomersStore();
  const { currentPage, totalPages, customers } = storeToRefs(store);
  
  const { isLoading, data } = useQuery(['customers?page=', currentPage], () => getCustomers(currentPage.value));

  //wathc if data changes
  watch( data, customers => {
    if( customers ) {
      store.setCustomers(customers);
    }
  })

  return {
    //State
    isLoading,
    customers,
    currentPage,
    totalPages,

    // Methods
    getPage( newPage: number ) {
      store.setPage(newPage);
    },

    //Getters
    // totalPageNumbers: computed<number[]>(() => [...new Array(totalPages.value)].map( (v, i ) => i + 1) ),
  };
}
