<template>
    <div class="admin-dashboard">
      <h2>Dashboard do Admin</h2>
      <p>Bem-vindo ao painel de administração!</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
    methods: {
      logout() {
        localStorage.removeItem('token');
        this.$router.push('/admin/login');
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-dashboard {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .admin-dashboard h2 {
    margin-bottom: 20px;
  }
  </style>
  