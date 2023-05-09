import { ref, watch } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';

import type { Customer } from '@/customers/interfaces/customers';
import customersApi from '@/api/customers-api';

const getCustomer = async (id: number): Promise<Customer> => {
    
      const { data } = await customersApi.get<Customer>(`/customers/${id}`);
    
      return data;
};

const updateCustomer = async(customer: Customer): Promise<Customer> => {
   
  const { data } = await customersApi.patch<Customer>(`/customers/${customer.id}`, customer);

  return data;
}

export default function useCustomer(id: number) {
  
  const customer = ref<Customer>();

  const { isLoading, data, isError } = useQuery(['customer', id], () => getCustomer(id),{
    retry: false,
  });

const customerMutation = useMutation(updateCustomer);

watch(customerMutation.isSuccess, () => {
    setTimeout(() => {
        customerMutation.reset();
    }, 2000);
});

  watch( data, () => {
    if( data.value ) {
      customer.value = {...data.value}
    }
  }, { immediate: true })

  return {
    customer,
    isLoading,
    isError,

    //mutations
    customerMutation
  };
}