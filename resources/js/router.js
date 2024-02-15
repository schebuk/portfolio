import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; 
import Login from './components/Login.vue';
import AdminDashboard from './components/AdminDashboard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/admin/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'AdminDashboard',
      component: AdminDashboard,
      meta: { requiresAuth: true },
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // Adicione outras rotas conforme necessário
  ],
});

router.beforeEach((to, from, next) => {
  // Verifica se a rota ou qualquer rota filha requer autenticação
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verifica se o token está armazenado no localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // Se o token não estiver presente, redireciona para a página de login
      next('/admin/login');
    } else {
      // Se o token estiver presente, permite a navegação
      next();
    }
  } else {
    // Se a rota não requer autenticação, permite a navegação
    next();
  }
});

export default router;
