<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Aqui você pode adicionar a lógica de autenticação
        console.log('Email:', this.email);
        console.log('Senha:', this.password);
        
        // Exemplo de redirecionamento após o login bem-sucedido
        this.$router.push('/admin');
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .login-container h2 {
    margin-bottom: 20px;
  }
  
  .login-container form div {
    margin-bottom: 10px;
  }
  
  .login-container label {
    display: block;
  }
  
  .login-container input[type="email"],
  .login-container input[type="password"] {
    width: 100%;
    padding: 8px;
    font-size: 16px;
  }
  
  .login-container button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .login-container button:hover {
    background-color: #0056b3;
  }
  </style>
  