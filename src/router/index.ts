import { createRouter, createWebHistory } from 'vue-router'
import CounterOptionsPage from '@/counter/pages/CounterOptionsPage.vue'
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue'
import CustomersLayout from '@/customers/layout/CustomersLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: CounterOptionsPage
    },
    {
      path: '/counter-2',
      name: 'counter-2',
      component: CounterSetupPage
    },
    {
      path: '/customers',
      name: 'customers',
      component: CustomersLayout,
      redirect: {name: 'list'},
      children: [
        {path: 'list', name: 'list', component: () => import('@/customers/pages/ListPage.vue')},
        {path: '/customers/:id', name: 'customer-id', component: () => import('@/customers/pages/CustomerPage.vue')},
      ]
    },

  ]
})

export default router
