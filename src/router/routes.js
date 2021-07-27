
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'penjualan', component: () => import('pages/Index.vue') },
      { path: 'pembelian', name: 'pembelian', component: () => import('pages/pembelian.vue') },
      { path: 'statistik', name: 'statistik', component: () => import('pages/statistik.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
