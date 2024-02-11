<template>
    <div class="admin-dashboard">
      <h2>Dashboard do Admin</h2>
      <p>Bem-vindo ao painel de administração!</p>
      <router-link to="/admin/logout">Logout</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
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
  