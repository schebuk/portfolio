// src/router.js
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
      // Verifica se o usuário está autenticado no Laravel
      if (!window.AuthUser) {
        // Se o usuário não estiver autenticado, redireciona para a página de login
        next('/admin/login');
      } else {
        // Se o usuário estiver autenticado, permite a navegação
        next();
      }
    } else {
      // Se a rota não requer autenticação, permite a navegação
      next();
    }
  });

export default router;
